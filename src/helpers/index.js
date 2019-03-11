import jwtDecode from 'jwt-decode';

const cardItems = (items, renderButton) => items.map(item => ({
  image: item.url,
  header: item.foodname,
  description: 'Buy this now...',
  meta: 'Price: ₦1,200.00',
  extra: renderButton(item.foodid),
  key: item.foodid
}));

export const setToken = token => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');

export const getUserFromLocalStorage = () => {
  const token = getToken();
  try {
    const { exp, iat, ...user } = jwtDecode(token);
    return user;
  } catch (error) {
    return null;
  }
};

export const isUserAuthenticated = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  try {
    const decodedToken = jwtDecode(token);
    const dateNow = new Date();
    if (decodedToken.exp > dateNow.getTime() / 1000) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default cardItems;
