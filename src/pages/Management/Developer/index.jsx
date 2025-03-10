import { useState } from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import CreateMiniappModal from "./components/CreateMiniappModal";

const initialApps = [
  {
    id: 1,
    name: "World Mini App A",
    appId: "world_app_001",
    category: "Tools",
    status: "Connected",
    dailyUsers: "12.5K",
    revenue: "2,580",
    lastUpdate: "2024-01-20",
    performance: {
      adCtr: "3.2%",
      impressions: "45.6K",
      earnings: "$2,580"
    }
  }
];

export default function DeveloperManagement() {
  const [apps, setApps] = useState(initialApps);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateApp = (formData) => {
    const newApp = {
      id: Date.now(), // Use timestamp as unique ID
      name: formData.name,
      appId: formData.worldAppId,
      category: formData.category,
      status: "Pending Review",
      dailyUsers: "0",
      revenue: "0",
      lastUpdate: new Date().toLocaleDateString(),
      performance: {
        adCtr: "0%",
        impressions: "0",
        earnings: "$0"
      }
    };

    setApps(prevApps => [newApp, ...prevApps]); // Add new app to the beginning of the list
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold gradient-text">World Mini Apps</h1>
          <p className="text-gray-400 mt-2">
            Integrate Ad SDK to earn advertising revenue
          </p>
        </div>
        <button 
          className="hero-button"
          onClick={() => setIsModalOpen(true)}
        >
          Connect New Mini App
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <CodeBracketIcon className="w-5 h-5 text-purple-500 mr-2" />
            <h3 className="text-gray-400">Connected Apps</h3>
          </div>
          <p className="text-2xl font-bold text-white">{apps.length}</p>
          <p className="text-sm text-green-400 mt-1">+{apps.length - initialApps.length} New</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <ChartBarIcon className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-gray-400">Daily Impressions</h3>
          </div>
          <p className="text-2xl font-bold text-white">1.2M</p>
          <p className="text-sm text-green-400 mt-1">+8.5%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="w-5 h-5 text-green-500 mr-2" />
            <h3 className="text-gray-400">Ad Revenue</h3>
          </div>
          <p className="text-2xl font-bold text-white">$25.8K</p>
          <p className="text-sm text-green-400 mt-1">+15.2%</p>
        </motion.div>
      </div>

      {/* Mini App List */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">My Mini Apps</h2>
          <div className="flex space-x-4">
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              Batch Manage
            </button>
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              Data Analysis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {app.name}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">
                      AppID: {app.appId}
                    </span>
                    <span className="text-sm text-gray-400">
                      Type: {app.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      app.status === "Connected" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Daily Active Users</p>
                  <p className="text-lg font-semibold text-white">{app.dailyUsers}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-gray-900/50">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ad CTR</p>
                  <p className="text-lg font-semibold text-white">{app.performance.adCtr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Impressions</p>
                  <p className="text-lg font-semibold text-white">{app.performance.impressions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Today&apos;s Earnings</p>
                  <p className="text-lg font-semibold text-white">{app.performance.earnings}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">
                  Last Updated: {app.lastUpdate}
                </span>
                <div className="space-x-4">
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    View Details
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    Ad Settings
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 text-sm">
                    SDK Config
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SDK Integration Guide */}
      <div className="mt-8 card">
        <h2 className="text-xl font-semibold gradient-text mb-6">SDK Integration Guide</h2>
        <div className="space-y-6 text-gray-400">
          <div>
            <h3 className="text-white text-lg mb-2">Quick Start</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Install SDK: npm install @worldads/miniapp-sdk</li>
              <li>Initialize: Import and initialize SDK in your mini app entry file</li>
              <li>Integrate Ad Components: Follow documentation to integrate ad display components</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Ad Types</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Banner Ads: Suitable for placement at top or bottom of content area</li>
              <li>Interstitial Ads: Display during natural scene transitions</li>
              <li>Rewarded Video: Earn in-app rewards after complete viewing</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <button className="text-purple-400 hover:text-purple-300">
              View Full Documentation →
            </button>
          </div>
        </div>
      </div>

      {/* Create Mini App Modal */}
      <CreateMiniappModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateApp}
      />
    </div>
  );
}
