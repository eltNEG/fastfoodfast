import { FOOD_FETCH_STATES } from '../constants';

const initialState = {
  foods: {
    foodFetchState: FOOD_FETCH_STATES.notFetced,
    fetchFoodLoading: false,
    foodItems: []
  },
  user: {
    userid: 0,
    username: '',
    role: '',
    isAuthenticated: false,
    fetched: false,
    loginIsLoading: false,
    registerIsLoading: false,
  }
};

export default initialState;
