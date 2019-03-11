export const HOME_PATH = '/';

export const NOT_FOUND_PATH = '*';

export const REGISTER_PATH = '/register';

export const LOGIN_PATH = '/login';

export const ORDER_HISTORY = '/order-history';

export const { API_BASE_URL } = process.env;

export const OPTIONS = {
  headers: {
    authorization: localStorage.getItem('token')
  }
};

export const FOOD_FETCH_STATES = {
  notFetched: 'notFetched',
  fetching: 'fetching',
  fetched: 'fetched'
};
