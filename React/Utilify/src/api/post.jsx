import axios from 'axios';

const postToApi = async (url, params) => {
  try {
    const response = await axios.post(url, params);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default postToApi;
