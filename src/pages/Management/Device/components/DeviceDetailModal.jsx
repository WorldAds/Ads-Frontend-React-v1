import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  MapPinIcon,
  ClockIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  CogIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

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

export default function DeviceDetailModal({ device, isOpen, onClose }) {
  if (!device) return null;

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
            className="relative w-full max-w-4xl bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors z-10"
            >
              <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Image */}
              <div className="relative">
                <div className="aspect-square md:aspect-auto md:h-full">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-cover md:rounded-l-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                {/* Status Label */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <div className={`px-3 py-1 sm:px-4 sm:py-2 rounded-xl ${
                    device.status === "active" 
                      ? "bg-green-500/10 border-green-500/20 text-green-400" 
                      : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                  } border backdrop-blur-sm`}>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        device.status === "active" ? "bg-green-400" : "bg-yellow-400"
                      } animate-pulse`} />
                      <span className="text-xs sm:text-sm">{device.status === "active" ? "Running" : "Maintenance"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Information */}
              <div className="p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{device.name}</h2>
                
                {/* Basic Information */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center text-gray-400">
                    <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">{device.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">Last synced {device.lastSync}</span>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center mb-2">
                      <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
                      <span className="text-xs sm:text-sm text-gray-400">Daily Views</span>
                    </div>
                    <p className="text-base sm:text-xl font-bold text-white">{device.dailyViews.toLocaleString()}</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center mb-2">
                      <CurrencyDollarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" />
                      <span className="text-xs sm:text-sm text-gray-400">Daily Revenue</span>
                    </div>
                    <p className="text-base sm:text-xl font-bold text-white">{device.dailyIncome} TOKEN</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center mb-2">
                      <ChartBarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2" />
                      <span className="text-xs sm:text-sm text-gray-400">Utilization</span>
                    </div>
                    <p className="text-base sm:text-xl font-bold text-white">{device.utilization}%</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
                    <div className="flex items-center mb-2">
                      <ArrowTrendingUpIcon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mr-2" />
                      <span className="text-xs sm:text-sm text-gray-400">Growth Rate</span>
                    </div>
                    <p className="text-base sm:text-xl font-bold text-white">+12.5%</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="flex-1 px-4 py-2 sm:py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors flex items-center justify-center">
                    <CogIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">Device Settings</span>
                  </button>
                  <button className="flex-1 px-4 py-2 sm:py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors flex items-center justify-center">
                    <ArrowPathIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">Sync Data</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

DeviceDetailModal.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["active", "maintenance"]).isRequired,
    dailyViews: PropTypes.number.isRequired,
    dailyIncome: PropTypes.number.isRequired,
    utilization: PropTypes.number.isRequired,
    lastSync: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
