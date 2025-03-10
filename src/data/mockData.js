export const mockNFTs = [
  {
    id: 1,
    name: 'Beijing Sanlitun LED Screen',
    description: 'LED screen located in the core area of Sanlitun business district, with daily foot traffic of 100,000+',
    imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    status: 'onSale',
    floorPrice: 5000,
    yield: 12.5,
    lockPeriod: 180,
    owner: 'worldads',
    tokenId: '0x123',
    location: 'Beijing',
    contractAddress: '0x1234...5678',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-20', price: 4800 },
      { date: '2024-01-15', price: 4500 }
    ],
    attributes: [
      { trait_type: 'Screen Size', value: '500 inches' },
      { trait_type: 'Resolution', value: '4K' },
      { trait_type: 'Location Rating', value: 'S Grade' },
      { trait_type: 'Daily Traffic', value: '100,000+' }
    ]
  },
  {
    id: 2,
    name: 'Shanghai Nanjing Road LED Screen',
    description: 'Prime location on Nanjing Road Pedestrian Street, covering high foot traffic, 24/7 display',
    imageUrl: 'https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    status: 'locked',
    floorPrice: 8000,
    yield: 15.8,
    lockPeriod: 365,
    owner: 'worldads',
    tokenId: '0x456',
    location: 'Shanghai',
    contractAddress: '0x2345...6789',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-18', price: 7800 },
      { date: '2024-01-10', price: 7500 }
    ],
    attributes: [
      { trait_type: 'Screen Size', value: '600 inches' },
      { trait_type: 'Resolution', value: '8K' },
      { trait_type: 'Location Rating', value: 'S Grade' },
      { trait_type: 'Daily Traffic', value: '200,000+' }
    ]
  },
  {
    id: 3,
    name: 'Guangzhou TeeMall LED Screen',
    description: 'Core location in TeeMall business district, covering high-end consumer groups',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    status: 'onSale',
    floorPrice: 6000,
    yield: 13.5,
    lockPeriod: 240,
    owner: 'worldads',
    tokenId: '0x789',
    location: 'Guangzhou',
    contractAddress: '0x3456...7890',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-19', price: 5800 },
      { date: '2024-01-14', price: 5500 }
    ],
    attributes: [
      { trait_type: 'Screen Size', value: '400 inches' },
      { trait_type: 'Resolution', value: '4K' },
      { trait_type: 'Location Rating', value: 'A Grade' },
      { trait_type: 'Daily Traffic', value: '80,000+' }
    ]
  },
  {
    id: 4,
    name: 'Shenzhen Huaqiangbei LED Screen',
    description: 'Core location in Huaqiangbei business district, perfect combination of technology and commerce',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1006&q=80',
    status: 'onSale',
    floorPrice: 7000,
    yield: 14.2,
    lockPeriod: 300,
    owner: 'worldads',
    tokenId: '0x101',
    location: 'Shenzhen',
    contractAddress: '0x4567...8901',
    blockchain: 'Ethereum',
    history: [
      { date: '2024-01-17', price: 6800 },
      { date: '2024-01-12', price: 6500 }
    ],
    attributes: [
      { trait_type: 'Screen Size', value: '450 inches' },
      { trait_type: 'Resolution', value: '4K' },
      { trait_type: 'Location Rating', value: 'S Grade' },
      { trait_type: 'Daily Traffic', value: '150,000+' }
    ]
  }
];

export const mockMarketStats = {
  totalVolume: 1234567,
  totalNFTs: 156,
  averageYield: 14.2,
  totalHolders: 892,
  dailyVolume: 45678,
  weeklyGrowth: 12.5,
  activeListings: 78,
  floorPrice: 5000
};

export const mockLocationStats = [
  {
    _id: 'Beijing',
    count: 45,
    averagePrice: 6500,
    totalVolume: 292500,
    screenSizes: {
      large: 15,
      medium: 20,
      small: 10
    },
    trafficFlow: 4500000
  },
  {
    _id: 'Shanghai',
    count: 38,
    averagePrice: 7200,
    totalVolume: 273600,
    screenSizes: {
      large: 12,
      medium: 18,
      small: 8
    },
    trafficFlow: 4200000
  },
  {
    _id: 'Guangzhou',
    count: 32,
    averagePrice: 5800,
    totalVolume: 185600,
    screenSizes: {
      large: 10,
      medium: 15,
      small: 7
    },
    trafficFlow: 3800000
  },
  {
    _id: 'Shenzhen',
    count: 41,
    averagePrice: 6800,
    totalVolume: 278800,
    screenSizes: {
      large: 14,
      medium: 19,
      small: 8
    },
    trafficFlow: 4000000
  }
];
