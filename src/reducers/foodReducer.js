import actionTypes from '../actions/foodActions/actionTypes';
import initialState from './initialState';
import { FOOD_FETCH_STATES } from '../constants';

const {
  FETCH_FOOD_FAILURE,
  FETCH_FOOD_LOADING,
  FETCH_FOOD_SUCCESS,
  CHANGE_FOOD_FETCH_STATE
} = actionTypes;

const { foods } = initialState;

export default (state = foods, action) => {
  switch (action.type) {
    case FETCH_FOOD_LOADING:
      return {
        ...state,
        fetchFoodLoading: true
      };
    case FETCH_FOOD_SUCCESS:
      return {
        ...state,
        fetchFoodLoading: false,
        foodItems: action.payload,
        foodFetchState: FOOD_FETCH_STATES.fetched
      };
    case FETCH_FOOD_FAILURE:
      return {
        ...state,
        fetchFoodLoading: false,
        foodFetchState: FOOD_FETCH_STATES.fetched
      };
    case CHANGE_FOOD_FETCH_STATE:
      return {
        ...state,
        foodFetchState: action.payload
      };
    default:
      return state;
  }
};
