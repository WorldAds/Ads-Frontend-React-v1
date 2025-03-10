import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  DeviceTabletIcon,
  CodeBracketIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const roles = [
  {
    icon: UserGroupIcon,
    title: 'Individual Users',
    description: 'Earn token rewards daily through watching and interacting after WorldID verification',
    color: 'purple'
  },
  {
    icon: DeviceTabletIcon,
    title: 'Device Owners',
    description: 'Invest in advertising screen NFTs and earn future advertising revenue',
    color: 'pink'
  },
  {
    icon: CodeBracketIcon,
    title: 'Mini App Developers',
    description: 'Integrate advertising protocol and earn revenue share by displaying ads to users',
    color: 'blue'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Advertisers',
    description: 'Customize ad campaigns in a decentralized way with transparent data',
    color: 'green'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Content Reviewers',
    description: 'Review content compliance with local regulations and earn platform rewards for review contributions',
    color: 'orange'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Roles() {
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
            <span className="text-gradient">Role Introduction</span>
          </h2>
          <p className="text-xl text-gray-400">
            Multi-party participation in building a decentralized advertising ecosystem
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 rounded-2xl border border-purple-500/10 backdrop-blur-xl">
                <div className={`w-12 h-12 rounded-xl bg-${role.color}-500/10 border border-${role.color}-500/20 flex items-center justify-center mb-6`}>
                  <role.icon className={`w-6 h-6 text-${role.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {role.title}
                </h3>
                <p className="text-gray-400">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
