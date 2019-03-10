import actionTypes from '../actions/auth/actionTypes';
import initialState from './initialState';

const {
  LOGIN_ISLOADING,
  LOGIN_SUCCESS,
  REGISTER_ISLOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE
} = actionTypes;

const { user } = initialState;

export default (state = user, action) => {
  switch (action.type) {
    case LOGIN_ISLOADING:
      return {
        ...state,
        loginIsLoading: true
      };
    case REGISTER_ISLOADING:
      return {
        ...state,
        registerIsLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loginIsLoading: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        registerIsLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginIsLoading: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerIsLoading: false
      };
    default:
      return state;
  }
};
