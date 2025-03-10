import { useState } from "react";
import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  PlusIcon,
  ArrowPathIcon,
  PauseCircleIcon,
  PlayCircleIcon
} from "@heroicons/react/24/outline";
import CreateAdModal from "./components/CreateAdModal";
import AdDetailModal from "./components/AdDetailModal";

const mockAds = [
  {
    id: 1,
    name: "New Year Promotion",
    type: "personal",
    typeName: "Personal User",
    status: "Active",
    budget: "5000",
    spent: "2580",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    performance: {
      impressions: "125.6K",
      clicks: "3.2K",
      ctr: "2.55%",
      conversions: "156"
    }
  },
  {
    id: 2,
    name: "Mall Screen Ad",
    type: "device",
    typeName: "Ad Screen",
    status: "Paused",
    budget: "8000",
    spent: "3650",
    startDate: "2024-01-10",
    endDate: "2024-02-10",
    performance: {
      impressions: "89.3K",
      clicks: "2.1K",
      ctr: "2.35%",
      conversions: "98"
    }
  }
];

export default function AdvertiserManagement() {
  const [ads] = useState(mockAds);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setIsDetailModalOpen(true);
  };

  const handleToggleAdStatus = (adId) => {
    console.log("Toggle ad status:", adId);
    // TODO: Implement ad status toggle functionality
  };

  return (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <RocketLaunchIcon className="w-5 h-5 text-purple-500 mr-2" />
            <h3 className="text-gray-400">Active Ads</h3>
          </div>
          <p className="text-2xl font-bold text-white">12</p>
          <p className="text-sm text-green-400 mt-1">+2 New</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <ChartBarIcon className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-gray-400">Total Impressions</h3>
          </div>
          <p className="text-2xl font-bold text-white">214.9K</p>
          <p className="text-sm text-green-400 mt-1">+12.5%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <UserGroupIcon className="w-5 h-5 text-green-500 mr-2" />
            <h3 className="text-gray-400">Reach</h3>
          </div>
          <p className="text-2xl font-bold text-white">45.2K</p>
          <p className="text-sm text-green-400 mt-1">+8.3%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="w-5 h-5 text-yellow-500 mr-2" />
            <h3 className="text-gray-400">Total Spend</h3>
          </div>
          <p className="text-2xl font-bold text-white">$6,230</p>
          <p className="text-sm text-green-400 mt-1">Budget Sufficient</p>
        </motion.div>
      </div>

      {/* Ad Management */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">My Ads</h2>
          <div className="flex space-x-4">
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              Batch Manage
            </button>
            <button 
              className="hero-button flex items-center"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <PlusIcon className="w-5 h-5 mr-1" />
              Create Ad
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {ads.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {ad.name}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      Type: {ad.typeName}
                    </span>
                    <span className="text-sm text-gray-400">
                      Budget: ${ad.budget}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      ad.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {ad.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Spent</p>
                  <p className="text-lg font-semibold text-white">${ad.spent}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 p-4 rounded-lg bg-gray-900/50">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Impressions</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.impressions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Clicks</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.clicks}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">CTR</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.ctr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Conversions</p>
                  <p className="text-lg font-semibold text-white">{ad.performance.conversions}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">
                  Duration: {ad.startDate} to {ad.endDate}
                </span>
                <div className="space-x-4">
                  <button 
                    className="text-purple-400 hover:text-purple-300 text-sm"
                    onClick={() => handleViewDetails(ad)}
                  >
                    View Details
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    Edit Ad
                  </button>
                  <button 
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                    onClick={() => handleToggleAdStatus(ad.id)}
                  >
                    {ad.status === "Active" ? (
                      <>
                        <PauseCircleIcon className="w-4 h-4 mr-1" />
                        Pause
                      </>
                    ) : (
                      <>
                        <PlayCircleIcon className="w-4 h-4 mr-1" />
                        Resume
                      </>
                    )}
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm flex items-center">
                    <ArrowPathIcon className="w-4 h-4 mr-1" />
                    Refresh Data
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ad Guide */}
      <div className="card">
        <h2 className="text-xl font-semibold gradient-text mb-6">Ad Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">Creative Optimization</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Choose suitable ad formats</li>
              <li>• Create engaging content</li>
              <li>• Update ad materials regularly</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">Delivery Strategy</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Target precise audience</li>
              <li>• Allocate budget wisely</li>
              <li>• Optimize delivery timing</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Analysis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Monitor key metrics</li>
              <li>• Analyze conversion data</li>
              <li>• Optimize delivery strategy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Create Ad Modal */}
      <CreateAdModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* Ad Detail Modal */}
      <AdDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        ad={selectedAd}
      />
    </div>
  );
}
