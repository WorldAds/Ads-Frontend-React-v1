import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  StarIcon,
  EyeIcon,
  HandRaisedIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowTrendingUpIcon
} from "@heroicons/react/24/outline";

export default function UserManagement() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* User Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6">
          <div className="relative mb-4 sm:mb-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  W
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mb-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white">WorldID Verified User</h2>
              <span className="px-3 py-1 mt-2 sm:mt-0 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                Verified
              </span>
            </div>
            <p className="text-gray-400 mb-4">0x1234...5678</p>
            <div className="flex justify-center sm:justify-start">
              <button className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors flex items-center">
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                Claim Daily Rewards
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20"
        >
          <div className="flex items-center mb-4">
            <CurrencyDollarIcon className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Token Balance</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">1,234</p>
          <p className="text-sm text-green-400">+25 Today&apos;s Earnings</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-6 rounded-2xl bg-pink-500/10 border border-pink-500/20"
        >
          <div className="flex items-center mb-4">
            <StarIcon className="w-5 sm:w-6 h-5 sm:h-6 text-pink-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Contribution</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">2,345</p>
          <p className="text-sm text-green-400">+15 Today&apos;s Growth</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 sm:p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20"
        >
          <div className="flex items-center mb-4">
            <EyeIcon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Today&apos;s Views</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">3/5</p>
          <p className="text-sm text-gray-400">2 Reward Chances Left</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 sm:p-6 rounded-2xl bg-green-500/10 border border-green-500/20"
        >
          <div className="flex items-center mb-4">
            <HandRaisedIcon className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Interactions</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">2/5</p>
          <p className="text-sm text-gray-400">3 Reward Chances Left</p>
        </motion.div>
      </div>

      {/* Activity Log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl"
      >
        <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Today&apos;s Activities</h3>
        <div className="space-y-3 sm:space-y-4">
          {[
            { type: "view", content: "Completed Ad View", time: "10 mins ago", reward: "+5 TOKEN" },
            { type: "interact", content: "Liked Ad Content", time: "1 hour ago", reward: "+3 TOKEN" },
            { type: "view", content: "Completed Ad View", time: "2 hours ago", reward: "+5 TOKEN" },
            { type: "interact", content: "Commented on Ad", time: "3 hours ago", reward: "+3 TOKEN" }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-xl bg-gray-900/50 border border-purple-500/10"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  {activity.type === "view" ? (
                    <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  ) : (
                    <HandRaisedIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  )}
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base font-medium">{activity.content}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{activity.type} · {activity.time}</p>
                </div>
              </div>
              <div className="ml-11 sm:ml-0 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs sm:text-sm inline-block sm:block">
                {activity.reward}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Daily Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
      >
        <div className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center mb-4">
            <ChartBarIcon className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">View Statistics</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-400">Today&apos;s Views</span>
              <span className="text-sm sm:text-base text-white">3 times</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-400">Rewards Earned</span>
              <span className="text-sm sm:text-base text-white">15 TOKEN</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center mb-4">
            <ClockIcon className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Interaction Statistics</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-400">Today&apos;s Interactions</span>
              <span className="text-sm sm:text-base text-white">2 times</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-400">Rewards Earned</span>
              <span className="text-sm sm:text-base text-white">6 TOKEN</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10">
          <div className="flex items-center mb-4">
            <ArrowTrendingUpIcon className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 mr-2" />
            <h3 className="text-base sm:text-lg font-semibold text-white">Contribution Statistics</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-400">Today&apos;s Growth</span>
              <span className="text-sm sm:text-base text-white">15 points</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-gray-400">Total Contribution</span>
              <span className="text-sm sm:text-base text-white">2,345 points</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
