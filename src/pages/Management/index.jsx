import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Management() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Close sidebar on small screens by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-[calc(100vh-4rem)] relative">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-20 right-4 z-50">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-gray-900/80 backdrop-blur-xl border border-purple-500/20 text-gray-400 hover:text-white transition-colors"
        >
          {isSidebarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[280px] flex-shrink-0 fixed lg:static left-0 h-[calc(100vh-4rem)] z-40 overflow-hidden"
          >
            <div className="h-full overflow-y-auto custom-scrollbar">
              <Sidebar onCloseMobile={() => setIsSidebarOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className={`flex-1 ${isSidebarOpen ? 'lg:ml-[280px]' : ''} w-full transition-all duration-300`}>
        <div className="relative min-h-full">
          {/* Web3 Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Dynamic Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Gradient Glow */}
            <motion.div
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full filter blur-[100px]"
            />
            <motion.div
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full filter blur-[80px]"
            />
            
            {/* Decorative Lines */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                style={{
                  top: `${25 + i * 25}%`,
                  left: '5%',
                  right: '5%',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          {/* Content Area */}
          <div className="relative h-full overflow-y-auto custom-scrollbar">
            <div className="p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                className="relative"
              >
                {/* Content Container */}
                <div className="relative">
                  {/* Content Background */}
                  <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/10" />
                  
                  {/* Actual Content */}
                  <div className="relative p-6">
                    <Outlet />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
