import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import { getFoods, orderFood } from '../../helpers/axiosCall';
import { triggerLoading, setFetchState } from '..';
import { FOOD_FETCH_STATES } from '../../constants';

const {
  FETCH_FOOD_FAILURE,
  FETCH_FOOD_LOADING,
  FETCH_FOOD_SUCCESS,
  CHANGE_FOOD_FETCH_STATE,
  ORDER_ISLOADING,
  ORDER_SUCCESS,
  ORDER_FAILURE
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

const orderSuccess = () => ({
  type: ORDER_SUCCESS
});

const orderFailure = () => ({
  type: ORDER_FAILURE
});

export const doOrderFood = payload => async (dispatch) => {
  dispatch(triggerLoading(ORDER_ISLOADING));
  try {
    await orderFood(payload);
    toast.success('Your food is on the way');
    dispatch(orderSuccess());
  } catch (error) {
    toast.error('Error placing an order. Try again.');
    dispatch(orderFailure());
  }
};
