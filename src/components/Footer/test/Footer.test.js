import React from 'react';
import { shallow } from 'enzyme';
import Footer from '..';

describe('Footer.jsx', () => {
  it('should match Footer.jsx snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
