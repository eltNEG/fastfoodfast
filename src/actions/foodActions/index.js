import actionTypes from './actionTypes';
import { getFoods } from '../../helpers/axiosCall';
import { triggerLoading, setFetchState } from '..';
import { FOOD_FETCH_STATES } from '../../constants';

const {
  FETCH_FOOD_FAILURE,
  FETCH_FOOD_LOADING,
  FETCH_FOOD_SUCCESS,
  CHANGE_FOOD_FETCH_STATE
} = actionTypes;

const fetchFoodSuccess = foods => ({
  type: FETCH_FOOD_SUCCESS,
  payload: foods
});

export const fetchFoodFailure = () => ({ type: FETCH_FOOD_FAILURE });

export const doFetchFoods = () => async (dispatch) => {
  dispatch(setFetchState(CHANGE_FOOD_FETCH_STATE, FOOD_FETCH_STATES.fetching));
  dispatch(triggerLoading(FETCH_FOOD_LOADING));
  try {
    const response = await getFoods();
    dispatch(fetchFoodSuccess(response.data.data.menu));
  } catch (error) {
    dispatch(fetchFoodFailure());
  }
};
