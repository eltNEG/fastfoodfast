import React from 'react';
import { shallow } from 'enzyme';
import { AuthModalComponent } from '..';
import { AuthFormComponent, mapStateToProps } from '../AuthForm';

describe('AuthModal component', () => {
  const loadings = { loginIsLoading: true, registerIsLoading: false };
  const funcs = { doLogin: jest.fn(), doRegister: jest.fn() };
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
    const wrapper = shallow(<AuthFormComponent formType="Register" {...loadings} {...funcs} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match AuthForm.jsx snapshot', () => {
    const wrapper = shallow(<AuthFormComponent formType="Login" {...loadings} {...funcs} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match AuthForm.jsx snapshot', () => {
    const wrapper = shallow(<AuthFormComponent formType="Log" {...loadings} {...funcs} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state', () => {
    const wrapper = shallow(<AuthFormComponent formType="Log" {...loadings} {...funcs} />);
    wrapper.instance().handleChange({}, { name: 'username', value: 'user' });
    expect(wrapper.state().username).toBe('user');
  });

  it('should set state', () => {
    loadings.loginIsLoading = false;
    loadings.registerIsLoading = true;
    const wrapper = shallow(<AuthFormComponent formType="Log" {...loadings} {...funcs} />);
    wrapper.instance().handleChange({}, { name: 'username', value: 'user' });
    expect(wrapper.state().username).toBe('user');
  });

  it('should set state', () => {
    const data = {name: 'login'}
    const event = {preventDefault: jest.fn()}
    const wrapper = shallow(<AuthFormComponent formType="Log" {...loadings} {...funcs} />);
    wrapper.instance().handleSubmit(event, data);
    expect(event.preventDefault).toBeCalled();
  });

  it('should set state', () => {
    const data = {name: 'register'}
    const event = {preventDefault: jest.fn()}
    const wrapper = shallow(<AuthFormComponent formType="Log" {...loadings} {...funcs} />);
    wrapper.instance().handleSubmit(event, data);
    expect(event.preventDefault).toBeCalled();
  });

  it('should set state', () => {
    const data = {name: 'register'}
    const event = {preventDefault: jest.fn()}
    const wrapper = shallow(<AuthFormComponent formType="Log" {...loadings} {...funcs} />);
    wrapper.setState({password: 'a'})
    wrapper.instance().handleSubmit(event, data);
    expect(event.preventDefault).toBeCalled();
  });

  it('should return required props', () => {
    const state = { userReducer: loadings };
    expect(mapStateToProps(state)).toEqual(loadings);
  });
});
