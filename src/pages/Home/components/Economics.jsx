import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  DeviceTabletIcon,
  BuildingOfficeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const tokenomics = [
  {
    title: 'Development Team',
    percentage: 5,
    color: 'purple',
    icon: ChartBarIcon
  },
  {
    title: 'Foundation',
    percentage: 10,
    color: 'pink',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Community',
    percentage: 3,
    color: 'blue',
    icon: UserGroupIcon
  },
  {
    title: 'Early Investors',
    percentage: 12,
    color: 'green',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Individual Users',
    percentage: 30,
    color: 'orange',
    icon: UserGroupIcon
  },
  {
    title: 'Device Network',
    percentage: 40,
    color: 'cyan',
    icon: DeviceTabletIcon
  }
];

export default function Economics() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-pink-500/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Economic Model</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Total Supply: 2.6B · Linear Release · 13-Year Unlock Period
          </p>
          
          {/* Release Rules */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl">
            <div className="flex items-center justify-center mb-4">
              <ClockIcon className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Release Rules</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tokens are released linearly each day, with all participants receiving proportional allocations.
              All participants except community ecosystem follow the same release rules to ensure alignment of interests.
              New users receive 10 tokens as a joining bonus (requires WorldID verification, subsidized from community rewards).
              Users: Can earn up to 5 WADS daily through watching, first-come-first-served, refreshed across three time zones.
              Device owners: Share 40% of daily output, receiving both base rewards and additional rewards from advertisers.
            </p>
          </div>
        </motion.div>

        {/* Distribution Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 rounded-2xl border border-purple-500/10 backdrop-blur-xl">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`absolute h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 rounded-full`}
                  />
                </div>
                <p className="text-2xl font-bold text-white">
                  {item.percentage}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Economic Loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gray-800/50 border border-purple-500/10 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Economic Loop</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Ad Revenue</h4>
              <p className="text-gray-400 text-sm">Advertiser payments enter the ecosystem</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-pink-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Revenue Distribution</h4>
              <p className="text-gray-400 text-sm">Proportional distribution to participants</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <DeviceTabletIcon className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Token Burn</h4>
              <p className="text-gray-400 text-sm">10% of ad revenue burned</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
