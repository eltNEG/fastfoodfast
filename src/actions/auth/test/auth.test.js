import 'jest-localstorage-mock';
import sinon from 'sinon';
import moxios from 'moxios';
import { doLogin, doRegister } from '..';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosCall';
import { items, fetchFoodItemsResponse } from '../../../mocks';

describe('authActions', () => {
  const responseMock = { data: { data: { user: {}, token: '' } } };
  describe('doLogin', () => {
    it('should get foodItems', async () => {
      axios.login = jest.fn().mockResolvedValue(responseMock);
      const dispatch = jest.fn();
      await doLogin()(dispatch);
      expect(dispatch).toBeCalledTimes(2);
    });
    it('should not get foodItems', async () => {
      axios.login = jest.fn().mockRejectedValue({});
      const dispatch = jest.fn();
      await doLogin()(dispatch);
      expect(dispatch).toBeCalledTimes(2);
    });
  });
  describe('doRegister', () => {
    it('should get foodItems', async () => {
      axios.register = jest.fn().mockResolvedValue(responseMock);
      const dispatch = jest.fn();
      await doRegister()(dispatch);
      expect(dispatch).toBeCalledTimes(2);
    });
    it('should not get foodItems', async () => {
      axios.register = jest.fn().mockRejectedValue({});
      const dispatch = jest.fn();
      await doRegister()(dispatch);
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
