import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component {
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

  renderRegisterForm = () => (
    <Form onSubmit={this.handleSubmit}>
      <h2>Register a new account</h2>
      {this.renderFormInput('user', 'username', 'Username', 'text')}
      {this.renderFormInput('lock', 'password', 'Password', 'password')}
      {this.renderFormInput('lock', 'confirmPassword', 'Confirm Password', 'password')}
      <Button as="div" fluid size="large">
        Register
      </Button>
      <Message>
        Already have an account?
        {' '}
        <Link to="/login">Login</Link>
      </Message>
    </Form>
  );

  renderLoginForm = () => (
    <Form>
      <h2>Log-in to your account</h2>
      {this.renderFormInput('user', 'username', 'Username', 'text')}
      {this.renderFormInput('lock', 'password', 'Password', 'password')}
      <Button as="div" fluid size="large">
        Login
      </Button>
      <Message>
        Do not have an account?
        {' '}
        <Link to="/register">Register</Link>
      </Message>
    </Form>
  );

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

AuthForm.propTypes = {
  formType: PropTypes.string.isRequired
};

export default AuthForm;
