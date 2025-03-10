import { mockNFTs, mockMarketStats } from '../data/mockData.js';

class NFTService {
  // Get NFT List
  static async getNFTs({ status, location, priceRange, sortBy, page = 1, limit = 12 }) {
    try {
      let filteredNFTs = [...mockNFTs];
      
      // Apply filters
      if (status && status !== 'all') {
        filteredNFTs = filteredNFTs.filter(nft => nft.status === status);
      }
      if (location && location !== 'all') {
        filteredNFTs = filteredNFTs.filter(nft => nft.location === location);
      }
      if (priceRange && priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filteredNFTs = filteredNFTs.filter(nft => {
          if (max) {
            return nft.floorPrice >= min && nft.floorPrice <= max;
          }
          return nft.floorPrice >= min;
        });
      }

      // Apply sorting
      switch (sortBy) {
        case 'priceAsc':
          filteredNFTs.sort((a, b) => a.floorPrice - b.floorPrice);
          break;
        case 'priceDesc':
          filteredNFTs.sort((a, b) => b.floorPrice - a.floorPrice);
          break;
        case 'yieldDesc':
          filteredNFTs.sort((a, b) => b.yield - a.yield);
          break;
        default:
          filteredNFTs.sort((a, b) => b.id - a.id);
      }

      // Pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedNFTs = filteredNFTs.slice(startIndex, endIndex);

      return {
        nfts: paginatedNFTs,
        pagination: {
          page,
          limit,
          total: filteredNFTs.length,
          pages: Math.ceil(filteredNFTs.length / limit)
        }
      };
    } catch (error) {
      throw new Error(`Failed to get NFT list: ${error.message}`);
    }
  }

  // Get Single NFT Details
  static async getNFTById(id) {
    try {
      const nft = mockNFTs.find(nft => nft.id === parseInt(id));
      if (!nft) {
        throw new Error('NFT not found');
      }
      return nft;
    } catch (error) {
      throw new Error(`Failed to get NFT details: ${error.message}`);
    }
  }

  // Create New NFT
  static async createNFT(nftData) {
    try {
      const newNFT = {
        ...nftData,
        id: mockNFTs.length + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockNFTs.push(newNFT);
      return newNFT;
    } catch (error) {
      throw new Error(`Failed to create NFT: ${error.message}`);
    }
  }

  // Update NFT Information
  static async updateNFT(id, updateData) {
    try {
      const index = mockNFTs.findIndex(nft => nft.id === parseInt(id));
      if (index === -1) {
        throw new Error('NFT not found');
      }
      mockNFTs[index] = {
        ...mockNFTs[index],
        ...updateData,
        updatedAt: new Date()
      };
      return mockNFTs[index];
    } catch (error) {
      throw new Error(`Failed to update NFT: ${error.message}`);
    }
  }

  // Update NFT Price
  static async updateNFTPrice(id, newPrice) {
    try {
      const nft = await this.getNFTById(id);
      nft.history.push({
        date: new Date().toISOString().split('T')[0],
        price: newPrice
      });
      nft.floorPrice = newPrice;
      return nft;
    } catch (error) {
      throw new Error(`Failed to update NFT price: ${error.message}`);
    }
  }

  // Get Market Statistics
  static async getMarketStats() {
    try {
      return mockMarketStats;
    } catch (error) {
      throw new Error(`Failed to get market statistics: ${error.message}`);
    }
  }

  // Get Location Statistics
  static async getLocationStats() {
    try {
      const locationStats = {};
      mockNFTs.forEach(nft => {
        if (!locationStats[nft.location]) {
          locationStats[nft.location] = {
            count: 0,
            totalPrice: 0,
            totalVolume: 0
          };
        }
        locationStats[nft.location].count += 1;
        locationStats[nft.location].totalPrice += nft.floorPrice;
        locationStats[nft.location].totalVolume += nft.floorPrice;
      });

      return Object.entries(locationStats).map(([location, stats]) => ({
        _id: location,
        count: stats.count,
        averagePrice: stats.totalPrice / stats.count,
        totalVolume: stats.totalVolume
      }));
    } catch (error) {
      throw new Error(`Failed to get location statistics: ${error.message}`);
    }
  }
}

export default NFTService;
