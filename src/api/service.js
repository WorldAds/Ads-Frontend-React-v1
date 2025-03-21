import axios from 'axios';

axios.defaults.withCredentials = false;

const apiClient = axios.create({
  baseURL: 'https://world-backend-v1-6a037ce588aa.herokuapp.com',
  timeout: 10000,
  withCredentials: false, 
  headers: {
    'accept': 'application/json'
  }
});

apiClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);


export const getAdsList = async () => {
  try {
    const response = await apiClient.get('/api/v1/advertisements');
    return response.data;
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    throw error;
  }
};

// Create a new advertisement
export const createAd = async (adData) => {
  try {
    const response = await apiClient.post('/api/v1/advertisements', {
      adsName: adData.name,
      budget: parseFloat(adData.budget),
      startDate: new Date(adData.startDate).toISOString(),
      endDate: new Date(adData.endDate).toISOString(),
      targetAudience: adData.targetAudience,
      locations: adData.locations.split(',').map(location => location.trim()),
      creativeType: adData.creativeType.charAt(0).toUpperCase() + adData.creativeType.slice(1), // Capitalize first letter
      creativeURL: adData.creativeUrl
    });
    return response.data;
  } catch (error) {
    console.error('Error creating advertisement:', error);
    throw error;
  }
};
