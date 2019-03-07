import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '..';

describe('NotFound snapshot', () => {
  it('should match NotFound.jsx snapshot', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});