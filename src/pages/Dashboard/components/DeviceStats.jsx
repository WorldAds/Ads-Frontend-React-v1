import { motion } from 'framer-motion';

const regions = [
  {
    name: 'Asia Pacific',
    devices: 385,
    change: '+12.3%',
    utilization: '88%',
    status: {
      online: 356,
      offline: 29
    }
  },
  {
    name: 'North America',
    devices: 245,
    change: '+8.5%',
    utilization: '92%',
    status: {
      online: 232,
      offline: 13
    }
  },
  {
    name: 'Europe',
    devices: 156,
    change: '+15.2%',
    utilization: '85%',
    status: {
      online: 142,
      offline: 14
    }
  }
];

export default function DeviceStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold gradient-text">Device Distribution</h2>
        <div className="flex space-x-4">
          <button className="text-purple-400 hover:text-purple-300 text-sm">
            View Details
          </button>
          <button className="text-purple-400 hover:text-purple-300 text-sm">
            Add Device
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {region.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Devices:</span>
                  <span className="text-white">{region.devices}</span>
                  <span className="text-sm text-green-400">{region.change}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Utilization</p>
                <p className="text-lg font-semibold text-white">{region.utilization}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center p-3 rounded-lg bg-gray-900/50">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Online Devices</p>
                  <p className="text-lg font-semibold text-green-400">
                    {region.status.online}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-3 rounded-lg bg-gray-900/50">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Offline Devices</p>
                  <p className="text-lg font-semibold text-red-400">
                    {region.status.offline}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: region.utilization }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">Total Devices</p>
          <p className="text-xl font-semibold text-white mt-1">786</p>
          <p className="text-sm text-green-400">+11.8%</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">Countries Covered</p>
          <p className="text-xl font-semibold text-white mt-1">25</p>
          <p className="text-sm text-green-400">+2</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">Average Utilization</p>
          <p className="text-xl font-semibold text-white mt-1">88.5%</p>
          <p className="text-sm text-green-400">+3.2%</p>
        </div>
      </div>
    </motion.div>
  );
}
