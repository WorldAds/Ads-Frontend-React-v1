import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* 渐变光晕 */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full filter blur-[100px]"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full filter blur-[80px]"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* 网格背景 */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* 导航栏 */}
      <Navbar />

      {/* 主内容区 */}
      <main className="relative pt-16">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.2,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="relative min-h-[calc(100vh-4rem)]"
          >
            <Outlet />
          </motion.div>
        </div>
      </main>

      {/* 底部装饰 */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.2), transparent)'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
