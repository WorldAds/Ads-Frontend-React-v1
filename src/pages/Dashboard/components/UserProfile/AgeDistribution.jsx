const ageGroups = [
  { 
    range: 'Novice Advertisers',
    percentage: '25%',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    traits: ['Campaign Time < 3m', 'Avg Budget < 5K', 'Prefer Performance Ads']
  },
  { 
    range: 'Growing Advertisers',
    percentage: '40%',
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    traits: ['Campaign Time 3-12m', 'Avg Budget 5K-20K', 'Multi-channel']
  },
  { 
    range: 'Senior Advertisers',
    percentage: '20%',
    bgColor: 'bg-green-500/20',
    textColor: 'text-green-400',
    borderColor: 'border-green-500/20',
    traits: ['Campaign Time 1-3y', 'Avg Budget 20K-50K', 'Brand Building']
  },
  { 
    range: 'Strategic Advertisers',
    percentage: '15%',
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/20',
    traits: ['Campaign Time > 3y', 'Avg Budget > 50K', 'Omni Marketing']
  }
];

export default function AgeDistribution() {
  return (
    <div>
      <h3 className="text-white mb-4">Advertiser Distribution</h3>
      <div className="grid grid-cols-4 gap-4">
        {ageGroups.map(({ range, percentage, bgColor, textColor, borderColor, traits }) => (
          <div 
            key={range}
            className={`${bgColor} rounded-lg p-4 border ${borderColor} relative group overflow-hidden`}
          >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/[0.02] transform -skew-x-12 group-hover:animate-shine" />
            
            <div className="relative">
              <div className={`text-2xl font-bold ${textColor} mb-1`}>
                {percentage}
              </div>
              <div className="text-sm text-gray-400 mb-3">{range}</div>
              
              {/* Trait Tags */}
              <div className="space-y-1">
                {traits.map((trait, index) => (
                  <div
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${bgColor} ${textColor} border ${borderColor} inline-block mr-1 mb-1`}
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Line */}
            <div className={`absolute bottom-0 left-0 h-1 ${textColor} opacity-20 group-hover:opacity-40 transition-opacity`} style={{ width: percentage }} />
          </div>
        ))}
      </div>

      {/* Data Info */}
      <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-4">
            <span>Total Advertisers: 12,567</span>
            <span>Monthly Growth: +15.2%</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Real-time Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}
