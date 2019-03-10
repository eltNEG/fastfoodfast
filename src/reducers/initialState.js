import { FOOD_FETCH_STATES } from '../constants';

const initialState = {
  foods: {
    foodFetchState: FOOD_FETCH_STATES.notFetced,
    fetchFoodLoading: false,
    foodItems: []
  }
};

export default initialState;
