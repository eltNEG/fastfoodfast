import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { doLogin, doRegister } from '../../actions/auth';

export class AuthFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', // eslint-disable-line react/no-unused-state
      password: '', // eslint-disable-line react/no-unused-state
      confirmPassword: '' // eslint-disable-line react/no-unused-state
    };
  }

  handleChange = (event, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, data) => {
    event.preventDefault();
    const { username, password, confirmPassword } = this.state;
    const { doLogin, doRegister } = this.props;
    const { name } = data;
    if (name === 'login') {
      doLogin({ username, password });
    } else {
      if (password !== confirmPassword) {
        toast('Entered passwords are not the same');
        return;
      }
      doRegister({ username, password });
    }
  };

  renderFormInput = (icon, name, placeholder, type) => {
    const state = this;
    return (
      <Form.Input
        fluid
        icon={icon}
        name={name}
        iconPosition="left"
        placeholder={placeholder}
        type={type}
        onChange={this.handleChange}
        value={state[name]}
      />
    );
  };

  renderAuthButton = (name, btnText, disabled) => (
    <Button
      as="div"
      disabled={disabled}
      fluid
      size="large"
      name={name}
      onClick={this.handleSubmit}
    >
      {btnText}
    </Button>
  );

  renderRegisterForm = () => {
    let disabled = false;
    let btnText = 'Register';
    const { registerIsLoading } = this.props;
    if (registerIsLoading) {
      disabled = true;
      btnText = 'Registering...';
    }
    return (
      <Form name="registerForm" onSubmit={this.handleSubmit}>
        <h2>Register a new account</h2>
        {this.renderFormInput('user', 'username', 'Username', 'text')}
        {this.renderFormInput('lock', 'password', 'Password', 'password')}
        {this.renderFormInput('lock', 'confirmPassword', 'Confirm Password', 'password')}
        {this.renderAuthButton('register', btnText, disabled)}
        <Message>
          Already have an account?
          {' '}
          <Link to="/login">Login</Link>
        </Message>
      </Form>
    );
  };

  renderLoginForm = () => {
    let disabled = false;
    let btnText = 'Login';
    const { loginIsLoading } = this.props;
    if (loginIsLoading) {
      disabled = true;
      btnText = 'Logging in...';
    }
    return (
      <Form name="loginForm">
        <h2>Log-in to your account</h2>
        {this.renderFormInput('user', 'username', 'Username', 'text')}
        {this.renderFormInput('lock', 'password', 'Password', 'password')}
        {this.renderAuthButton('login', btnText, disabled)}
        <Message>
          Do not have an account?
          {' '}
          <Link to="/register">Register</Link>
        </Message>
      </Form>
    );
  };

  render() {
    const { formType } = this.props;
    switch (formType) {
      case 'Register':
        return this.renderRegisterForm();
      case 'Login':
        return this.renderLoginForm();
      default:
        return this.renderRegisterForm();
    }
  }
}

AuthFormComponent.propTypes = {
  formType: PropTypes.string.isRequired,
  doLogin: PropTypes.func.isRequired,
  doRegister: PropTypes.func.isRequired,
  loginIsLoading: PropTypes.bool.isRequired,
  registerIsLoading: PropTypes.bool.isRequired
};

export const mapStateToProps = (state) => {
  const { userReducer } = state;
  const { registerIsLoading, loginIsLoading } = userReducer;
  return { registerIsLoading, loginIsLoading };
};

const mapDispatchToProps = dispatch => bindActionCreators({ doLogin, doRegister }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthFormComponent);
