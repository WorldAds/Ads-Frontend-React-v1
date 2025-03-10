const interests = [
  { 
    name: 'Brand Advertising',
    percentage: 65,
    color: 'bg-purple-500',
    description: 'Large Brand Promotion',
    trend: '+5.2%'
  },
  { 
    name: 'Performance Ads',
    percentage: 58,
    color: 'bg-blue-500',
    description: 'CPC/CPA Ads',
    trend: '+8.3%'
  },
  { 
    name: 'Contextual Ads',
    percentage: 52,
    color: 'bg-pink-500',
    description: 'Scenario-based Promotion',
    trend: '+4.7%'
  },
  { 
    name: 'Programmatic Ads',
    percentage: 45,
    color: 'bg-green-500',
    description: 'Automated Delivery',
    trend: '+3.1%'
  },
  { 
    name: 'Interactive Ads',
    percentage: 38,
    color: 'bg-yellow-500',
    description: 'User Interactive Marketing',
    trend: '+6.4%'
  }
];

export default function InterestChart() {
  return (
    <div className="w-full">
      <h3 className="text-white mb-4 text-lg md:text-xl">Ad Placement Preferences</h3>
      <div className="space-y-4">
        {interests.map(interest => (
          <div key={interest.name} className="group">
            {/* Title and Trend */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1 sm:mb-0">
                <span className="text-gray-300 text-sm md:text-base">{interest.name}</span>
                <span className="text-xs text-gray-500 mt-0.5 sm:mt-0">{interest.description}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">{interest.percentage}%</span>
                <span className="text-xs text-green-400">{interest.trend}</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/[0.02] transform -skew-x-12 group-hover:animate-shine" />
              
              {/* Progress Bar */}
              <div
                className={`h-full ${interest.color} rounded-full relative group-hover:opacity-80 transition-all duration-500 ease-out`}
                style={{ width: `${interest.percentage}%` }}
              >
                {/* Halo Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.1] to-white/0" />
              </div>
            </div>

            {/* Activity Metrics */}
            <div className="flex justify-between mt-2 sm:mt-1">
              <div className="flex space-x-2 text-xs">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-1 h-1 rounded-full ${
                      index < Math.floor(interest.percentage / 20)
                        ? interest.color
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {interest.percentage >= 60 ? 'Highly Active' : 
                 interest.percentage >= 40 ? 'Moderately Active' : 'Active'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-6 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-400">
          <span className="mb-2 sm:mb-0">Last Updated: 5 mins ago</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Real-time Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
}
