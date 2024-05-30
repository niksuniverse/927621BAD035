import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const getProducts = async (company, category) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products`);
  return response.data;
};

export default {
  getProducts,
};
