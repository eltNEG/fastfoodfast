import axios from 'axios';
import { API_BASE_URL, OPTIONS } from '../../constants';

export const getFoods = async () => {
  const response = await axios.get(`${API_BASE_URL}/menu`);
  return response;
};

export const orderFood = async (payload) => {
  OPTIONS.headers.authorization = localStorage.getItem('token');
  const response = await axios.post(`${API_BASE_URL}/orders`, payload, OPTIONS);
  return response;
};

export const login = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
  return response;
};

export const register = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, payload);
  return response;
};

export default getFoods;
