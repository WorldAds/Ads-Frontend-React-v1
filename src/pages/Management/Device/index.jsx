import { useState } from "react";
import { motion } from "framer-motion";
import {
  DeviceTabletIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  QrCodeIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";
import DeviceDetailModal from "./components/DeviceDetailModal";

const devices = [
  {
    id: 1,
    name: "Beijing Sanlitun LED Screen",
    location: "Sanlitun, Chaoyang District, Beijing",
    status: "active",
    dailyViews: 12500,
    dailyIncome: 450,
    utilization: 85,
    lastSync: "2 mins ago",
    image: "https://picsum.photos/400/300"
  },
  {
    id: 2,
    name: "Shanghai Nanjing Road LED Screen",
    location: "Nanjing East Road, Huangpu District, Shanghai",
    status: "maintenance",
    dailyViews: 18000,
    dailyIncome: 680,
    utilization: 92,
    lastSync: "5 mins ago",
    image: "https://picsum.photos/400/301"
  },
  {
    id: 3,
    name: "Guangzhou TeeMall LED Screen",
    location: "Tianhe Road, Tianhe District, Guangzhou",
    status: "active",
    dailyViews: 15000,
    dailyIncome: 520,
    utilization: 88,
    lastSync: "1 min ago",
    image: "https://picsum.photos/400/302"
  }
];

export default function DeviceManagement() {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDevice(null);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Statistics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20"
        >
          <div className="flex items-center mb-4">
            <DeviceTabletIcon className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Total Devices</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">3</p>
          <p className="text-sm text-green-400">All Online</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20"
        >
          <div className="flex items-center mb-4">
            <CurrencyDollarIcon className="w-5 sm:w-6 h-5 sm:h-6 text-pink-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Today&apos;s Revenue</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">1,650</p>
          <p className="text-sm text-green-400">+12.5% vs Yesterday</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20"
        >
          <div className="flex items-center mb-4">
            <ChartBarIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Average Utilization</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">88.3%</p>
          <p className="text-sm text-green-400">Above Industry Average</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 sm:p-6 rounded-2xl bg-green-500/10 border border-green-500/20"
        >
          <div className="flex items-center mb-4">
            <ArrowTrendingUpIcon className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Total Views</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">45.5K</p>
          <p className="text-sm text-green-400">Real-time Today</p>
        </motion.div>
      </div>

      {/* Device List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {devices.map((device, index) => (
          <motion.div
            key={device.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group cursor-pointer"
            onClick={() => handleDeviceClick(device)}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Device Image */}
              <div className="aspect-video relative">
                <img 
                  src={device.image} 
                  alt={device.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              </div>

              {/* Device Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white line-clamp-1">{device.name}</h3>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                    device.status === "active" 
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {device.status === "active" ? "Running" : "Maintenance"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center text-gray-400">
                      <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm truncate">{device.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm">Synced {device.lastSync}</span>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-end text-green-400">
                      <CurrencyDollarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm">{device.dailyIncome} TOKENS/day</span>
                    </div>
                    <div className="flex items-center justify-end text-blue-400">
                      <ChartBarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm">{device.utilization}% Utilization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-2">
                <button className="p-1.5 sm:p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors">
                  <QrCodeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="p-1.5 sm:p-2 rounded-lg bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white transition-colors">
                  <ArrowPathIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add Device Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full p-4 sm:p-6 rounded-2xl border border-dashed border-purple-500/20 text-purple-400 hover:bg-purple-500/5 transition-colors flex items-center justify-center space-x-2"
      >
        <DeviceTabletIcon className="w-5 sm:w-6 h-5 sm:h-6" />
        <span>Add New Device</span>
      </motion.button>

      {/* Device Detail Modal */}
      <DeviceDetailModal
        device={selectedDevice}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
