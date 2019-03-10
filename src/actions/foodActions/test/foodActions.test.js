import sinon from 'sinon';
import moxios from 'moxios';
import { doFetchFoods } from '..';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosCall';
import { items, fetchFoodItemsResponse } from '../../../mocks';

describe('foodActions', () => {
  describe('doFetchFoods', () => {
    it('should get foodItems', async () => {
      axios.getFoods = jest.fn().mockResolvedValue(fetchFoodItemsResponse);
      const dispatch = jest.fn();
      await doFetchFoods()(dispatch);
      expect(dispatch).toBeCalledTimes(3);
      expect(dispatch).toHaveBeenLastCalledWith({
        type: actionTypes.FETCH_FOOD_SUCCESS,
        payload: fetchFoodItemsResponse.data.data.menu
      });
    });
    it('should not get foodItems', async () => {
        axios.getFoods = jest.fn().mockRejectedValue({});
        const dispatch = jest.fn();
        await doFetchFoods()(dispatch);
        expect(dispatch).toBeCalledTimes(3);
        expect(dispatch).toHaveBeenLastCalledWith({
            type: actionTypes.FETCH_FOOD_FAILURE,
          });
      });
  });
});
