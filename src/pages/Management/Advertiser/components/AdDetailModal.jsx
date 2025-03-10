import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { XMarkIcon, ChartBarIcon, UserGroupIcon, CurrencyDollarIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function AdDetailModal({ isOpen, onClose, ad }) {
  if (!ad) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gray-900 rounded-lg p-6 w-full max-w-4xl shadow-xl max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold gradient-text">{ad.name}</h2>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-sm text-gray-400">Type: {ad.typeName}</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    ad.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {ad.status}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-2 -mr-2">
              {/* Performance Metrics */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <div className="flex items-center mb-2">
                    <ChartBarIcon className="w-5 h-5 text-purple-500 mr-2" />
                    <h3 className="text-gray-400">Impressions</h3>
                  </div>
                  <p className="text-xl font-bold text-white">{ad.performance.impressions}</p>
                  <p className="text-sm text-green-400">Above Average</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <div className="flex items-center mb-2">
                    <UserGroupIcon className="w-5 h-5 text-blue-500 mr-2" />
                    <h3 className="text-gray-400">Clicks</h3>
                  </div>
                  <p className="text-xl font-bold text-white">{ad.performance.clicks}</p>
                  <p className="text-sm text-green-400">+12.5%</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <div className="flex items-center mb-2">
                    <CurrencyDollarIcon className="w-5 h-5 text-green-500 mr-2" />
                    <h3 className="text-gray-400">Conversions</h3>
                  </div>
                  <p className="text-xl font-bold text-white">{ad.performance.conversions}</p>
                  <p className="text-sm text-green-400">+8.3%</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <div className="flex items-center mb-2">
                    <ClockIcon className="w-5 h-5 text-yellow-500 mr-2" />
                    <h3 className="text-gray-400">CTR</h3>
                  </div>
                  <p className="text-xl font-bold text-white">{ad.performance.ctr}</p>
                  <p className="text-sm text-green-400">Excellent</p>
                </div>
              </div>

              {/* Ad Information */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="p-6 rounded-lg bg-gray-800/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ad ID</span>
                      <span className="text-white">{ad.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ad Type</span>
                      <span className="text-white">{ad.typeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Start Date</span>
                      <span className="text-white">{ad.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">End Date</span>
                      <span className="text-white">{ad.endDate}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-gray-800/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Budget Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Budget</span>
                      <span className="text-white">${ad.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Spent</span>
                      <span className="text-white">${ad.spent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Remaining Budget</span>
                      <span className="text-white">${ad.budget - ad.spent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Budget Usage</span>
                      <span className="text-white">{((ad.spent / ad.budget) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Trend Chart */}
              <div className="p-6 rounded-lg bg-gray-800/50">
                <h3 className="text-lg font-semibold text-white mb-4">Performance Trend</h3>
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-400">Trend chart will be displayed here</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
              <button
                className="hero-button"
              >
                Edit Ad
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

AdDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  ad: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    typeName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    spent: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    performance: PropTypes.shape({
      impressions: PropTypes.string.isRequired,
      clicks: PropTypes.string.isRequired,
      ctr: PropTypes.string.isRequired,
      conversions: PropTypes.string.isRequired
    }).isRequired
  })
};
