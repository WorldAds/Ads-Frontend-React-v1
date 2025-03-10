import { useState } from 'react';
import { motion } from 'framer-motion';
import { CurrencyDollarIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const mockApps = [
  {
    id: 1,
    name: 'Example Mini App 1',
    developer: 'Developer A',
    category: 'Tools',
    dailyUsers: '12.5K',
    adRevenue: '2,580',
    status: 'Connected',
    lastUpdate: '2024-01-20',
    performance: {
      ctr: '3.2%',
      impressions: '45.6K',
      earnings: '$2,580'
    }
  },
  {
    id: 2,
    name: 'Example Mini App 2',
    developer: 'Developer B',
    category: 'Lifestyle',
    dailyUsers: '8.3K',
    adRevenue: '1,850',
    status: 'Connected',
    lastUpdate: '2024-01-19',
    performance: {
      ctr: '2.8%',
      impressions: '32.1K',
      earnings: '$1,850'
    }
  }
];

export default function MiniProgramManagement() {
  const [apps] = useState(mockApps);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Mini App Management</h1>
          <p className="text-gray-400 mt-2">
            Manage connected mini apps and ad revenue
          </p>
        </div>
        <button className="hero-button">
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
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-sm text-green-400 mt-1">+12.3%</p>
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
            <h3 className="text-gray-400">Revenue Share</h3>
          </div>
          <p className="text-2xl font-bold text-white">$25.8K</p>
          <p className="text-sm text-green-400 mt-1">+15.2%</p>
        </motion.div>
      </div>

      {/* Mini App List */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">Connected Apps</h2>
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
                      Developer: {app.developer}
                    </span>
                    <span className="text-sm text-gray-400">
                      Type: {app.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400`}>
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
                  <p className="text-sm text-gray-400 mb-1">CTR</p>
                  <p className="text-lg font-semibold text-white">{app.performance.ctr}</p>
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
                  <button className="text-red-400 hover:text-red-300 text-sm">
                    Pause Delivery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Revenue Analysis */}
      <div className="mt-8 card">
        <h2 className="text-xl font-semibold gradient-text mb-6">Revenue Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-gray-400 mb-2">Average CPC</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">$0.86</p>
              <p className="text-sm text-green-400">-8.2%</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-gray-400 mb-2">Average CPM</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">$58.5</p>
              <p className="text-sm text-green-400">+12.3%</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-gray-400 mb-2">Revenue Share</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-white">70%</p>
              <p className="text-sm text-gray-400">Fixed Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
