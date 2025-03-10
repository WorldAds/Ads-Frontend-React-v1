import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  UserIcon,
  DeviceTabletIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: ChartBarIcon,
    description: 'View platform overall data',
    color: 'purple'
  },
  {
    name: 'Personal Space',
    path: '/management/user',
    icon: UserIcon,
    description: 'Manage your personal info and rewards',
    color: 'pink'
  },
  {
    name: 'My Devices',
    path: '/management/device',
    icon: DeviceTabletIcon,
    description: 'Manage your ad screens and revenue',
    color: 'blue'
  },
  {
    name: 'Ad Campaigns',
    path: '/management/advertiser',
    icon: BuildingOfficeIcon,
    description: 'Manage your ad campaigns and budget',
    color: 'green'
  },
  {
    name: 'World Mini Apps',
    path: '/management/developer',
    icon: CodeBracketIcon,
    description: 'Manage your mini app ad integration and revenue',
    color: 'orange'
  },
  {
    name: 'Content Review',
    path: '/management/reviewer',
    icon: ShieldCheckIcon,
    description: 'Participate in community governance and review ad content',
    color: 'cyan'
  }
];

export default function Sidebar({ onCloseMobile }) {
  const location = useLocation();
  const isReviewerPage = location.pathname.includes('/reviewer');

  // Display different user roles based on page
  const getUserRole = () => {
    if (isReviewerPage) {
      return (
        <div className="flex flex-wrap items-center mt-1 gap-2">
          <div className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center space-x-1">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-medium text-purple-400">Content Reviewer</span>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20">
            <span className="text-xs font-medium text-green-400">Level 3</span>
          </div>
        </div>
      );
    }
    return (
      <div className="mt-1 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">
        <span className="text-xs font-medium text-blue-400">Verified User</span>
      </div>
    );
  };

  return (
    <div className="h-full bg-gray-900/50 backdrop-blur-xl border-r border-purple-500/10">
      {/* User Info */}
      <div className="p-4 sm:p-6 border-b border-purple-500/10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
              <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  W
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-2 border-gray-900" />
          </div>
          <div>
            <h3 className="text-white text-sm sm:text-base font-medium">WorldID Verified</h3>
            {getUserRole()}
          </div>
        </div>

        {/* Token Info */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 sm:p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center mb-1">
              <CurrencyDollarIcon className="w-4 h-4 text-purple-400 mr-1" />
              <p className="text-xs sm:text-sm text-gray-400">Token Balance</p>
            </div>

            <p className="text-base sm:text-lg font-semibold text-white">1,234</p>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
            <div className="flex items-center mb-1">
              <StarIcon className="w-4 h-4 text-pink-400 mr-1" />
              <p className="text-xs sm:text-sm text-gray-400">Contribution</p>
            </div>

            <p className="texvaat-base sm:text-lg font-semibold text-white">2,345</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="py-4 sm:py-6 px-3 sm:px-4 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className="block relative"
              onClick={() => {
                if (window.innerWidth < 1024 && onCloseMobile) {
                  onCloseMobile();
                }
              }}
            >
              <motion.div
                className={`p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? `bg-${item.color}-500/10 border-${item.color}-500/50`
                    : 'hover:bg-gray-800/50 border-transparent'
                } border relative group`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-1 sm:mb-2">
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${item.color}-400`} />
                    <span className={`text-sm sm:text-base font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 ml-7 sm:ml-8">
                    {item.description}
                  </p>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="w-full h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-r" />
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-r blur-sm"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Status */}
      <div className="p-3 sm:p-4 border-t border-purple-500/10">
        <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm text-gray-400">Chain Status</span>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
              <span className="text-xs sm:text-sm text-green-400">Synced</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Latest Block: #12345678
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onCloseMobile: PropTypes.func
};

Sidebar.defaultProps = {
  onCloseMobile: () => {}
};
