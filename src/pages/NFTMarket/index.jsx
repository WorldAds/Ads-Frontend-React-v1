import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NFTCard from './components/NFTCard';
import NFTFilter from './components/NFTFilter';
import NFTDetail from './components/NFTDetail';
import NFTClient from '../../api/nftClient';

export default function NFTMarket() {
  const [nfts, setNfts] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [marketStats, setMarketStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    location: 'all',
    priceRange: 'all',
    sortBy: 'latest',
    page: 1,
    limit: 12
  });

  // Load NFT list
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        setLoading(true);
        const result = await NFTClient.getNFTs(filters);
        setNfts(result.nfts);
        setError(null);
      } catch (err) {
        setError('Failed to load NFT list');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [filters]);

  // Load market statistics
  useEffect(() => {
    const fetchMarketStats = async () => {
      try {
        const stats = await NFTClient.getMarketStats();
        setMarketStats(stats);
      } catch (err) {
        console.error('Failed to load market statistics:', err);
      }
    };

    fetchMarketStats();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1 // Reset page number
    }));
  };

  const handleNFTClick = async (nft) => {
    try {
      const details = await NFTClient.getNFTById(nft.id);
      setSelectedNFT(details);
      setIsDetailOpen(true);
    } catch (err) {
      console.error('Failed to load NFT details:', err);
    }
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">NFT Marketplace</h1>
        <p className="text-gray-400">Trade Premium Advertising Assets</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10"
        >
          <div className="flex items-center mb-2">
            <span className="text-gray-400">Total Volume</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {marketStats?.totalVolume?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) ?? 'Loading...'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10"
        >
          <div className="flex items-center mb-2">
            <span className="text-gray-400">Total NFTs</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {marketStats?.totalNFTs ?? 'Loading...'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10"
        >
          <div className="flex items-center mb-2">
            <span className="text-gray-400">Average Yield</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {marketStats?.averageYield ? `${marketStats.averageYield.toFixed(2)}%` : 'Loading...'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl bg-gray-800/50 border border-purple-500/10"
        >
          <div className="flex items-center mb-2">
            <span className="text-gray-400">Total Holders</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {marketStats?.totalHolders ?? 'Loading...'}
          </p>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="mb-8">
        <NFTFilter 
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* NFT List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map(nft => (
            <NFTCard
              key={nft.id}
              nft={nft}
              onClick={handleNFTClick}
            />
          ))}
        </div>
      )}

      {/* NFT Detail Modal */}
      <NFTDetail
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        nft={selectedNFT}
      />
    </div>
  );
}
