import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const getFoods = async () => {
  const response = await axios.get(`${API_BASE_URL}/menu`);
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
