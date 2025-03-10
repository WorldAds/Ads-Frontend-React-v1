import { mockNFTs, mockMarketStats } from '../data/mockData.js';

// 模拟API延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const handleNFTRequest = async (endpoint, options = {}) => {
  // 模拟网络延迟
  await delay(500);

  // 解析路径和查询参数
  const url = new URL(endpoint, window.location.origin);
  const path = url.pathname.replace('/api/', '');
  const searchParams = Object.fromEntries(url.searchParams);

  // 路由处理
  switch (path) {
    case 'nfts': {
      if (options.method === 'POST') {
        // 创建NFT
        return { ...options.body, id: mockNFTs.length + 1 };
      }
      // 获取NFT列表
      let filteredNFTs = [...mockNFTs];
      
      // 应用筛选
      if (searchParams.status && searchParams.status !== 'all') {
        filteredNFTs = filteredNFTs.filter(nft => nft.status === searchParams.status);
      }
      if (searchParams.location && searchParams.location !== 'all') {
        filteredNFTs = filteredNFTs.filter(nft => nft.location === searchParams.location);
      }
      if (searchParams.priceRange && searchParams.priceRange !== 'all') {
        const [min, max] = searchParams.priceRange.split('-').map(Number);
        filteredNFTs = filteredNFTs.filter(nft => {
          if (max) {
            return nft.floorPrice >= min && nft.floorPrice <= max;
          }
          return nft.floorPrice >= min;
        });
      }

      // 应用排序
      switch (searchParams.sortBy) {
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

      // 分页
      const page = Number(searchParams.page) || 1;
      const limit = Number(searchParams.limit) || 12;
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
    }

    case 'market/stats': {
      return mockMarketStats;
    }

    case 'market/location-stats': {
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
    }

    default: {
      // 处理单个NFT请求
      if (path.startsWith('nfts/')) {
        const id = Number(path.split('/')[1]);
        const nft = mockNFTs.find(n => n.id === id);
        if (!nft) throw new Error('NFT不存在');
        return nft;
      }
      throw new Error('未知的API端点');
    }
  }
};

export default handleNFTRequest;
