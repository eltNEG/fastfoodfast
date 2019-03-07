import React from 'react';
import { shallow } from 'enzyme';
import Home from '..';

describe('Home snapshot', () => {
  it('should match Home.jsx snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
