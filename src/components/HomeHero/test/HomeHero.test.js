import React from 'react';
import { shallow } from 'enzyme';
import HomeHero from '..';

describe('HomeHero snapshot', () => {
  it('should match HomeHero.jsx snapshot', () => {
    const wrapper = shallow(<HomeHero />);
    expect(wrapper).toMatchSnapshot();
  });
});