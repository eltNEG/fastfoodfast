import actionTypes from '../actions/orderHistoryActions/actionTypes';
import initialState from './initialState';

const { FETCH_ORDER_FAILURE, FETCH_ORDER_ISLOADING, FETCH_ORDER_SUCCESS } = actionTypes;

const { order } = initialState;

export default (state = order, action) => {
  switch (action.type) {
    case FETCH_ORDER_ISLOADING:
      return {
        ...state,
        orderHistoryIsLoading: true
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        orderHistoryIsLoading: false,
        orderHistory: action.payload,
        orderFetched: true
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        orderHistoryIsLoading: false,
        orderFetched: true
      };
    default:
      return state;
  }
};
