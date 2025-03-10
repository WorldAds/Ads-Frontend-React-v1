import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Roles from './components/Roles';
import Economics from './components/Economics';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Creative Abstract Background Animation */}
      <BackgroundAnimation />
      
      {/* Background Decorations - Grid overlay on top of animation */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Grid Background */}
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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-500/10 to-transparent transform rotate-45" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-pink-500/10 to-transparent transform -rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <Hero />

        {/* Divider Decoration */}
        <div className="relative h-px my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
        </div>

        {/* Core Features */}
        <Features />

        {/* Divider Decoration */}
        <div className="relative h-px my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse" />
        </div>

        {/* Role Introduction */}
        <Roles />

        {/* Divider Decoration */}
        <div className="relative h-px my-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
        </div>

        {/* Economic Model */}
        <Economics />

        {/* Footer Decoration */}
        <div className="relative h-20 mt-20">
          <div className="absolute bottom-0 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center z-30"
      >
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500/20 to-transparent mb-2" />
        Scroll Down to Explore More
      </motion.div>
    </motion.div>
  );
}
