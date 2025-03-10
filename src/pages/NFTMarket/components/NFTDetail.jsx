import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  ClockIcon,
  MapPinIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

export default function NFTDetail({ isOpen, onClose, nft }) {
  if (!nft) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-5xl bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Image */}
              <div className="relative">
                <div className="aspect-square">
                  <img 
                    src={nft.imageUrl} 
                    alt={nft.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <HeartIcon className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ShareIcon className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Right Information */}
              <div className="p-8 overflow-y-auto">
                <h2 className="text-2xl font-bold text-gradient mb-2">{nft.name}</h2>
                <p className="text-gray-400 mb-6">{nft.description}</p>

                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                    <div className="flex items-center mb-2">
                      <CurrencyDollarIcon className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-gray-400">Floor Price</span>
                    </div>
                    <p className="text-xl font-bold text-white">{nft.floorPrice} TOKEN</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <div className="flex items-center mb-2">
                      <ChartBarIcon className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-400">Yield</span>
                    </div>
                    <p className="text-xl font-bold text-white">{nft.yield}%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <div className="flex items-center mb-2">
                      <ClockIcon className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-gray-400">Lock Period</span>
                    </div>
                    <p className="text-xl font-bold text-white">{nft.lockPeriod} days</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <div className="flex items-center mb-2">
                      <MapPinIcon className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-gray-400">Location</span>
                    </div>
                    <p className="text-xl font-bold text-white">{nft.location}</p>
                  </div>
                </div>

                {/* Contract Information */}
                <div className="mb-8">
                  <h3 className="flex items-center text-lg font-semibold text-white mb-4">
                    <DocumentTextIcon className="w-5 h-5 mr-2 text-purple-400" />
                    Contract Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50">
                      <span className="text-gray-400">Contract Address</span>
                      <span className="text-white font-mono">{nft.contractAddress}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50">
                      <span className="text-gray-400">Token ID</span>
                      <span className="text-white font-mono">#{nft.tokenId}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50">
                      <span className="text-gray-400">Blockchain</span>
                      <span className="text-white">{nft.blockchain}</span>
                    </div>
                  </div>
                </div>

                {/* Transaction History */}
                <div className="mb-8">
                  <h3 className="flex items-center text-lg font-semibold text-white mb-4">
                    <ArrowTrendingUpIcon className="w-5 h-5 mr-2 text-green-400" />
                    Transaction History
                  </h3>
                  <div className="space-y-3 text-sm">
                    {nft.history?.map((record, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50">
                        <span className="text-gray-400">{record.date}</span>
                        <span className="text-white">{record.price} TOKEN</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Buy Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl border border-purple-500/20 text-purple-400 font-medium hover:bg-purple-500/10 transition-colors"
                  >
                    Add to Collection
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

NFTDetail.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  nft: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    floorPrice: PropTypes.number.isRequired,
    yield: PropTypes.number.isRequired,
    lockPeriod: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    contractAddress: PropTypes.string.isRequired,
    tokenId: PropTypes.string.isRequired,
    blockchain: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }))
  })
};
