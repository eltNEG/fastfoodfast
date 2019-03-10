import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import HomeContentContainer from '..';
import initialState from '../../../reducers/initialState';

describe('HomeContentContainer', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ foodReducer: initialState.foods });
  const doFetchFoods = () => {};
  describe('HomeContentContainer Snapshot', () => {
    it('should match snapshot', () => {
      const wrapper = mount(
        <Provider store={store}>
          <HomeContentContainer doFetchFoods={doFetchFoods} />
        </Provider>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
