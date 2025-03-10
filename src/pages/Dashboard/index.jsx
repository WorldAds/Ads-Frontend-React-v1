import { motion } from 'framer-motion';
import {
  FireIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  UsersIcon,
  TvIcon
} from '@heroicons/react/24/outline';
import StatCard from './components/StatCard';
import WorldMap from './components/charts/WorldMap';
import TrendChart from './components/charts/TrendChart';
import UserProfile from './components/UserProfile';

const stats = [
  {
    icon: UsersIcon,
    title: 'Platform Users',
    value: '256.8K',
    change: '16.3%',
    tooltip: 'Total registered platform users'
  },
  {
    icon: UserGroupIcon,
    title: 'Advertisers',
    value: '12.5K',
    change: '15.2%',
    tooltip: 'Active advertisers count'
  },
  {
    icon: TvIcon,
    title: 'LED Screens',
    value: '1,256',
    change: '18.9%',
    tooltip: 'Connected advertising screens'
  },
  {
    icon: FireIcon,
    title: 'Ad Revenue',
    value: '156K WAD',
    change: '8.5%',
    tooltip: 'Platform ad revenue (24h)'
  },
  {
    icon: ChartBarIcon,
    title: 'Daily Impressions',
    value: '2.5M',
    change: '5.4%',
    tooltip: 'Average daily ad impressions'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold gradient-text">WorldAds Dashboard</h1>
        <p className="text-gray-400 mt-2">
          Decentralized LED Screen Advertising Ecosystem
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            tooltip={stat.tooltip}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Platform Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Ad Performance</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 text-sm">Real-time</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Average CTR</span>
              <span className="text-white font-mono">3.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Conversion Rate</span>
              <span className="text-white font-mono">1.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Engagement Rate</span>
              <span className="text-white font-mono">5.6%</span>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Ad Revenue</h3>
            <div className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">24h</div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Ad Revenue</span>
              <span className="text-white font-mono">156K WAD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Screen Revenue</span>
              <span className="text-white font-mono">89K WAD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Platform Fee</span>
              <span className="text-white font-mono">12K WAD</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Screen Distribution Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold gradient-text">Screen Distribution</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">Covering 156 Business Districts</span>
            </div>
            <div className="flex items-center space-x-2">
              <TvIcon className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">1,256 Screens</span>
            </div>
          </div>
        </div>
        <WorldMap />
      </motion.div>

      {/* User Profile and Trend Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20"
        >
          <h2 className="text-xl font-semibold gradient-text mb-6">Advertiser Profile</h2>
          <UserProfile />
        </motion.div>

        {/* Trend Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
        >
          <h2 className="text-xl font-semibold gradient-text mb-6">Platform Trends</h2>
          <TrendChart />
        </motion.div>
      </div>
    </div>
  );
}
