import React from 'react';
import { Menu, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NavBar.scss';
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../../constants';
import AuthModal from '../AuthModal';
import AuthForm from '../AuthModal/AuthForm';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleMenu = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  renderMenuItemLink = (path, text) => (
    <Menu.Item>
      <Link to={path}>
        <AuthModal text={text}>
          <AuthForm formType={text} />
        </AuthModal>
      </Link>
    </Menu.Item>
  );

  renderDesktopMenu = () => (
    <Menu.Menu className="desktop" position="right">
      {this.renderMenuItemLink(REGISTER_PATH, 'Register')}
      {this.renderMenuItemLink(LOGIN_PATH, 'Login')}
    </Menu.Menu>
  );

  renderMobileMenu = () => {
    const { active } = this.state;
    return (
      <Menu.Menu position="right" className="mobile">
        <Accordion as="item">
          <Accordion.Title active={active} onClick={this.toggleMenu}>
            <Icon size="big" inverted name="bars" />
          </Accordion.Title>
          <Accordion.Content as="menu" className="accordion-content" active={active}>
            {this.renderMenuItemLink(REGISTER_PATH, 'Register')}
            {this.renderMenuItemLink(LOGIN_PATH, 'Login')}
          </Accordion.Content>
        </Accordion>
      </Menu.Menu>
    );
  };

  render() {
    return (
      <Menu borderless className="nav-bar">
        <Menu.Menu position="left">
          <Menu.Item>
            <Link to={HOME_PATH}>
              <h1>FastFoodFast</h1>
            </Link>
          </Menu.Item>
        </Menu.Menu>
        {this.renderDesktopMenu()}
        {this.renderMobileMenu()}
        <ToastContainer autoClose={3000} />
      </Menu>
    );
  }
}

export default NavBar;
