import React from 'react';
import { shallow } from 'enzyme';
import { AuthModalComponent } from '..';
import AuthForm from '../AuthForm';

describe('AuthModal component', () => {
  it('should match AuthModal.jsx snapshot', () => {
    const wrapper = shallow(
      <AuthModalComponent
        text="register"
        history={{}}
        children={<div />}
        location={{ pathname: '/register' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should match AuthModal.jsx snapshot', () => {
    const wrapper = shallow(
      <AuthModalComponent
        text="register"
        history={{}}
        children={<div />}
        location={{ pathname: '/login' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should set push to history', () => {
    const history = {
      push: jest.fn()
    };
    const wrapper = shallow(
      <AuthModalComponent
        text="register"
        history={history}
        children={<div />}
        location={{ pathname: '/login' }}
      />
    );
    wrapper.instance().handleClose();
    expect(history.push).toBeCalledTimes(1);
  });
  it('should match AuthForm.jsx snapshot', () => {
    const wrapper = shallow(<AuthForm formType="Register" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match AuthForm.jsx snapshot', () => {
    const wrapper = shallow(<AuthForm formType="Login" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match AuthForm.jsx snapshot', () => {
    const wrapper = shallow(<AuthForm formType="Log" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state', () => {
    const wrapper = shallow(<AuthForm formType="Log" />);
    wrapper.instance().handleChange({}, { name: 'username', value: 'user' });
    expect(wrapper.state().username).toBe('user');
  });
});
