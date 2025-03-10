import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function StatCard({ icon: Icon, title, value, change, changeType = 'positive', tooltip, delay = 0 }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:opacity-75 transition-opacity" />
      
      <div className="card relative overflow-hidden">
        {/* Background Animation Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-colors" />
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Icon className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="text-gray-400">{title}</h3>
            </div>
            {tooltip && (
              <div className="relative">
                <button
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <InformationCircleIcon className="w-5 h-5" />
                </button>
                {showTooltip && (
                  <div className="absolute right-0 top-full mt-2 w-48 p-2 bg-gray-800 rounded-lg text-xs text-gray-300 z-10">
                    {tooltip}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="relative">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {value}
            </p>
            {change && (
              <div className="flex items-center mt-1">
                <div className={`flex items-center ${
                  changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                }`}>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: changeType === 'positive' ? 0 : 180 }}
                    className="w-0 h-0 border-l-[4px] border-l-transparent border-b-[6px] border-r-[4px] border-r-transparent mr-1"
                    style={{
                      borderBottomColor: changeType === 'positive' ? '#34d399' : '#f87171'
                    }}
                  />
                  <span className="text-sm">{change}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
        </div>
      </div>
    </motion.div>
  );
}

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeType: PropTypes.oneOf(['positive', 'negative']),
  tooltip: PropTypes.string,
  delay: PropTypes.number
};

StatCard.defaultProps = {
  changeType: 'positive',
  delay: 0
};

export default StatCard;
