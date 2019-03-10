import { toast } from 'react-toastify';
import { login, register } from '../../helpers/axiosCall';
import { triggerLoading } from '..';
import { setToken } from '../../helpers';
import actionTypes from './actionTypes';

const {
  LOGIN_ISLOADING,
  LOGIN_SUCCESS,
  REGISTER_ISLOADING,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE
} = actionTypes;

const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

const loginFailure = () => ({
  type: LOGIN_FAILURE
});

const registerSuccess = userData => ({
  type: REGISTER_SUCCESS,
  payload: userData
});

const registerFailure = () => ({
  type: REGISTER_FAILURE
});

export const doLogin = payload => async (dispatch) => {
  dispatch(triggerLoading(LOGIN_ISLOADING));
  try {
    const response = await login(payload);
    setToken(response.data.data.token);
    dispatch(loginSuccess(response.data.data.user));
    toast.success('Login Successful');
  } catch (error) {
    toast.error('Login failed');
    dispatch(loginFailure());
  }
};

export const doRegister = payload => async (dispatch) => {
  dispatch(triggerLoading(REGISTER_ISLOADING));
  try {
    const response = await register(payload);
    setToken(response.data.data.token);
    dispatch(registerSuccess(response.data.data.user));
    toast.success('Registration Successful');
  } catch (error) {
    toast.error('Registration failed');
    dispatch(registerFailure());
  }
};
