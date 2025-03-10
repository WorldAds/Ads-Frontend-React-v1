import mongoose from 'mongoose';

const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['onSale', 'locked'],
    default: 'onSale'
  },
  floorPrice: {
    type: Number,
    required: true,
    min: 0
  },
  yield: {
    type: Number,
    required: true,
    min: 0
  },
  lockPeriod: {
    type: Number,
    required: true,
    min: 0
  },
  owner: {
    type: String,
    required: true
  },
  tokenId: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  contractAddress: {
    type: String,
    required: true
  },
  blockchain: {
    type: String,
    required: true,
    default: 'Ethereum'
  },
  history: [{
    date: {
      type: Date,
      default: Date.now
    },
    price: {
      type: Number,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// 添加索引以提高查询性能
nftSchema.index({ status: 1 });
nftSchema.index({ location: 1 });
nftSchema.index({ floorPrice: 1 });
nftSchema.index({ yield: 1 });

// 添加虚拟字段
nftSchema.virtual('priceHistory').get(function() {
  return this.history.sort((a, b) => b.date - a.date);
});

// 添加实例方法
nftSchema.methods.updatePrice = async function(newPrice) {
  this.history.push({
    price: newPrice,
    date: new Date()
  });
  this.floorPrice = newPrice;
  return this.save();
};

// 添加静态方法
nftSchema.statics.getMarketStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalNFTs: { $sum: 1 },
        averagePrice: { $avg: '$floorPrice' },
        averageYield: { $avg: '$yield' },
        totalVolume: {
          $sum: {
            $multiply: ['$floorPrice', 1]
          }
        }
      }
    }
  ]);
  return stats[0];
};

const NFT = mongoose.model('NFT', nftSchema);

export default NFT;
