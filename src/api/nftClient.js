import { handleNFTRequest } from './nftRoutes';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
const USE_MOCK = true; // 使用mock数据

class NFTClient {
  static async makeRequest(endpoint, options = {}) {
    if (USE_MOCK) {
      return handleNFTRequest(endpoint, options);
    }

    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error(`API请求失败: ${response.statusText}`);
    }
    return response.json();
  }

  // 获取NFT列表
  static async getNFTs(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    try {
      return await this.makeRequest(
        `${API_BASE_URL}/nfts?${queryParams}`,
        { method: 'GET' }
      );
    } catch (error) {
      console.error('获取NFT列表错误:', error);
      throw error;
    }
  }

  // 获取单个NFT详情
  static async getNFTById(id) {
    try {
      return await this.makeRequest(
        `${API_BASE_URL}/nfts/${id}`,
        { method: 'GET' }
      );
    } catch (error) {
      console.error('获取NFT详情错误:', error);
      throw error;
    }
  }

  // 创建新NFT
  static async createNFT(nftData) {
    try {
      return await this.makeRequest(
        `${API_BASE_URL}/nfts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nftData),
        }
      );
    } catch (error) {
      console.error('创建NFT错误:', error);
      throw error;
    }
  }

  // 更新NFT信息
  static async updateNFT(id, updateData) {
    try {
      return await this.makeRequest(
        `${API_BASE_URL}/nfts/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        }
      );
    } catch (error) {
      console.error('更新NFT错误:', error);
      throw error;
    }
  }

  // 更新NFT价格
  static async updateNFTPrice(id, price) {
    try {
      return await this.makeRequest(
        `${API_BASE_URL}/nfts/${id}/price`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ price }),
        }
      );
    } catch (error) {
      console.error('更新NFT价格错误:', error);
      throw error;
    }
  }

  // 获取市场统计数据
  static async getMarketStats() {
    try {
      return await this.makeRequest(
        `${API_BASE_URL}/market/stats`,
        { method: 'GET' }
      );
    } catch (error) {
      console.error('获取市场统计数据错误:', error);
      throw error;
    }
  }

  // 获取地区统计数据
  static async getLocationStats() {
    try {
      return await this.makeRequest(
        `${API_BASE_URL}/market/location-stats`,
        { method: 'GET' }
      );
    } catch (error) {
      console.error('获取地区统计数据错误:', error);
      throw error;
    }
  }
}

export default NFTClient;
