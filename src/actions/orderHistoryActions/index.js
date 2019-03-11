import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import { getOrderHistory } from '../../helpers/axiosCall';
import { triggerLoading } from '..';

const { FETCH_ORDER_FAILURE, FETCH_ORDER_ISLOADING, FETCH_ORDER_SUCCESS } = actionTypes;

const fetchOrderSuccess = orderHistory => ({
  type: FETCH_ORDER_SUCCESS,
  payload: orderHistory
});

export const fetchOrderFailure = () => ({
  type: FETCH_ORDER_FAILURE
});

export const doGetOrderHistory = () => async (dispatch) => {
  dispatch(triggerLoading(FETCH_ORDER_ISLOADING));
  try {
    const response = await getOrderHistory();
    dispatch(fetchOrderSuccess(response.data.data.orders));
  } catch (error) {
    toast.error('An Error occurred while fetching your order history.');
    dispatch(fetchOrderFailure());
  }
};
