import React from 'react';
import { shallow } from 'enzyme';
import HomeContent from '..';
import BuyNowBtn from '../BuyNowButton';

describe('HomeContent snapshot', () => {
  it('should match HomeContent.jsx snapshot', () => {
    const wrapper = shallow(<HomeContent />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('BuyNowBtn snapshot', () => {
  it('should match BuyNowBtn.jsx snapshot', () => {
    const wrapper = shallow(<BuyNowBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
