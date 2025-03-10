import PropTypes from 'prop-types';
import { 
  TagIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function NFTFilter({ filters, onFilterChange }) {
  const { status, location, priceRange, sortBy } = filters;

  return (
    <div className="relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl" />
      
      <div className="relative glass-effect rounded-2xl border border-purple-500/10 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Filter Options</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Status Filter */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <TagIcon className="w-4 h-4 mr-1" />
              Status
            </label>
            <div className="relative">
              <select
                value={status}
                onChange={(e) => onFilterChange('status', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">All</option>
                <option value="onSale">On Sale</option>
                <option value="locked">Locked</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: status === 'all' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Location Filter */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <MapPinIcon className="w-4 h-4 mr-1" />
              Location
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => onFilterChange('location', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">All Locations</option>
                <option value="beijing">Beijing</option>
                <option value="shanghai">Shanghai</option>
                <option value="guangzhou">Guangzhou</option>
                <option value="shenzhen">Shenzhen</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: location === 'all' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <CurrencyDollarIcon className="w-4 h-4 mr-1" />
              Price Range
            </label>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => onFilterChange('priceRange', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">All Prices</option>
                <option value="0-1000">0-1000</option>
                <option value="1000-5000">1000-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000+">Above 10000</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: priceRange === 'all' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sort By */}
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-400">
              <ArrowsUpDownIcon className="w-4 h-4 mr-1" />
              Sort By
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onFilterChange('sortBy', e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="latest">Latest Listed</option>
                <option value="priceAsc">Price Low to High</option>
                <option value="priceDesc">Price High to Low</option>
                <option value="yieldDesc">Yield High to Low</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: sortBy === 'latest' ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowsUpDownIcon className="w-4 h-4 text-gray-400" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors"
          >
            High Yield
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/30 transition-colors"
          >
            Short Lock Period
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/30 transition-colors"
          >
            Popular Locations
          </motion.button>
        </div>
      </div>
    </div>
  );
}

NFTFilter.propTypes = {
  filters: PropTypes.shape({
    status: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
};
