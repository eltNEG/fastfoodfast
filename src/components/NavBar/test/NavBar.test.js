import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '..';

describe('NavBar.jsx', () => {
  describe('NavBar snapshot', () => {
    it('should match NavBar.jsx snapshot', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('toggleMenu', () => {
      it('should set state', () => {
        const wrapper = shallow(<NavBar />);
        wrapper.instance().toggleMenu()
        expect(wrapper.state().active).toEqual(true);
      })
  })
});
