import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  WalletIcon, 
  BellIcon, 
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const location = useLocation();
  const isManagementPage = location.pathname.startsWith('/management');
  const isReviewerPage = location.pathname.includes('/reviewer');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/nft-market', label: 'NFT Market' },
    { path: '/management/user', label: 'Management' }
  ];

  // Display different user roles based on page
  const getUserRole = () => {
    if (isReviewerPage) {
      return (
        <>
          <div className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center space-x-1">
              <ShieldCheckIcon className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-purple-400">Content Reviewer</span>
            </div>
          </div>
          <div className="px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20">
            <span className="text-xs text-green-400">Level 3</span>
          </div>

        </>
      );
    }
    return (
      <div className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
        <span className="text-xs text-blue-400">Verified User</span>
      </div>
    );
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-xl border-b border-purple-500/10" />

      {/* Content */}
      <div className="relative container mx-auto h-full px-2 sm:px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-xl font-bold text-gradient hidden sm:block">WorldADS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 transition-colors ${
                (item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path))
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {(item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Function Area */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-purple-500/10 transition-colors">
            <BellIcon className="w-6 h-6 text-gray-400 hover:text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </button>

          {/* Wallet */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
          >
            <WalletIcon className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400">Connect Wallet</span>
          </motion.button>

          {/* User Info */}
          <div className="relative" ref={profileMenuRef}>
            <button 
              className="flex items-center space-x-1 sm:space-x-3 p-1 sm:p-2 rounded-lg hover:bg-purple-500/10 transition-colors"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
                  <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                    <span className="text-white font-bold">U</span>
                  </div>
                </div>
                {isManagementPage && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-900" />
                )}
              </div>

              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-white">0x1234...5678</p>
                <div className="flex items-center space-x-1">
                  {getUserRole()}
                </div>
              </div>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute right-0 mt-2 w-[calc(100vw-2rem)] sm:w-64 py-2 bg-gray-900/95 rounded-lg border border-purple-500/10 backdrop-blur-xl transition-all duration-200 ${
                isProfileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div className="px-4 py-2 border-b border-gray-800">
                <p className="text-sm font-medium text-white">WorldID Verified</p>
                <div className="flex items-center space-x-2 mt-1">
                  {getUserRole()}
                </div>
              </div>
              <div className="px-4 py-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Balance</span>
                  <span className="text-sm text-white">1,234 TOKEN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Contribution</span>
                  <div className="flex items-center">
                    <StarIcon className="w-3 h-3 text-pink-400 mr-1" />
                    <span className="text-sm text-white">2,345</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-2 pt-2">
                <button className="w-full px-4 py-2 text-left text-sm text-gray-400 hover:text-white hover:bg-purple-500/10 transition-colors">
                  Settings
                </button>
                <button className="w-full px-4 py-2 text-left text-sm text-gray-400 hover:text-white hover:bg-purple-500/10 transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-purple-500/10 py-4 px-4 md:hidden z-40 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg ${
                    (item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path))
                      ? 'bg-purple-500/10 text-white'
                      : 'text-gray-400 hover:bg-purple-500/5 hover:text-white'
                  } transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-800 mt-2">
                <div className="flex items-center space-x-3 p-2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
                      <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                        <span className="text-white font-bold">U</span>
                      </div>
                    </div>
                    {isManagementPage && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-900" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">0x1234...5678</p>
                    <div className="flex items-center space-x-1">
                      {getUserRole()}
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-2 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <WalletIcon className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400">Connect Wallet</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
