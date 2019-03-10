import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const getFoods = async () => {
  const response = await axios.get(`${API_BASE_URL}/menu`);
  return response;
};


export default getFoods;
