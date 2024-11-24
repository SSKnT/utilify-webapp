import axios from 'axios';

const postToApiBinary = async (url, params, config = {}) => {
  try {
    const response = await axios.post(url, params, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config.headers, // Merge any additional headers passed in config
      },
      responseType: 'blob', // Ensure responseType is set to 'blob' for binary data
    });
    return response;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default postToApiBinary;