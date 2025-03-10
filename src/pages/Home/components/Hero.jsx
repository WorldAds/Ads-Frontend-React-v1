import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/20 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Decorative Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
              style={{
                top: `${25 + i * 25}%`,
                left: '10%',
                right: '10%',
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

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">World</span>
              <span className="text-white">ADS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Integrating <span className="text-gradient font-semibold">World 3.0</span>, 
              <span className="text-gradient font-semibold">DePIN</span>, 
              <span className="text-gradient font-semibold">RWA</span> and 
              <span className="text-gradient font-semibold">AI</span> technologies 
              to create a decentralized advertising ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-shadow"
            >
              Launch DApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-purple-500/20 text-purple-400 font-medium text-lg hover:bg-purple-500/10 transition-colors flex items-center"
            >
              Visit World APP mini apps to view ads and earn rewards.
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
