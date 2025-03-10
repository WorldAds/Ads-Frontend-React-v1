import { motion } from 'framer-motion';
import {
  GlobeAltIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  CpuChipIcon,
  SignalIcon,
  CubeTransparentIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'World 3.0',
    description: 'Decentralized identity authentication based on World ID ensures each user is real and unique, building a trustworthy advertising ecosystem.',
    icon: GlobeAltIcon,
    items: [
      { icon: CubeTransparentIcon, text: 'Decentralized Identity' },
      { icon: SignalIcon, text: 'On-chain Verification' },
      { icon: ChartBarIcon, text: 'Transparent Credit System' }
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'DePIN',
    description: 'Decentralized Physical Infrastructure Network connects and manages physical advertising devices through blockchain technology, enabling asset tokenization.',
    icon: CircleStackIcon,
    items: [
      { icon: BuildingOfficeIcon, text: 'Device NFTization' },
      { icon: SignalIcon, text: 'Real-time Data Chain' },
      { icon: ChartBarIcon, text: 'Smart Revenue Distribution' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'RWA',
    description: 'Real-world assets on-chain, transforming physical advertising screen resources into blockchain assets, providing liquidity and investment opportunities.',
    icon: BuildingOfficeIcon,
    items: [
      { icon: CircleStackIcon, text: 'Asset Tokenization' },
      { icon: ChartBarIcon, text: 'Transparent Revenue' },
      { icon: CubeTransparentIcon, text: 'Enhanced Liquidity' }
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI Powered',
    description: 'Utilizing artificial intelligence to optimize ad delivery, content moderation, and user matching, enhancing advertising effectiveness and user experience.',
    icon: SparklesIcon,
    items: [
      { icon: CpuChipIcon, text: 'Ad Creative' },
      { icon: CpuChipIcon, text: 'Smart Delivery' },
      { icon: SparklesIcon, text: 'AI Moderation' }
    ],
    gradient: 'from-orange-500 to-yellow-500'
  }
];

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 to-transparent" />
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
            <span className="text-gradient">Core Technologies</span>
          </h2>
          <p className="text-xl text-gray-400">
            Integrating cutting-edge technologies to build the next-generation advertising ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 rounded-2xl border border-purple-500/10 backdrop-blur-xl">
                {/* Title and Icon */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-3 gap-4">
                  {feature.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-3 rounded-xl bg-gray-800/50 border border-purple-500/10 flex flex-col items-center justify-center"
                    >
                      <item.icon className="w-5 h-5 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-400 text-center">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
