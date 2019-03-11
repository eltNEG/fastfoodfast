import React from 'react';
import { Menu, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NavBar.scss';
import {
  HOME_PATH, LOGIN_PATH, REGISTER_PATH, ORDER_HISTORY
} from '../../constants';
import { isUserAuthenticated, setToken } from '../../helpers';
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
    <Menu.Item as="div" onClick={text === 'Logout' ? this.logout : null}>
      <Link to={path}>
        {['Login', 'Register'].includes(text) ? (
          <AuthModal text={text}>
            <AuthForm formType={text} />
          </AuthModal>
        ) : (
          <div>{text}</div>
        )}
      </Link>
    </Menu.Item>
  );

  rightMenuItem = (isAuthenticated) => {
    if (!isAuthenticated) {
      return {
        firstMenuPath: REGISTER_PATH,
        firstMenuText: 'Register',
        secondMenuPath: LOGIN_PATH,
        secondMenuText: 'Login'
      };
    }
    return {
      firstMenuPath: ORDER_HISTORY,
      firstMenuText: 'Order History',
      secondMenuPath: HOME_PATH,
      secondMenuText: 'Logout'
    };
  };

  logout = () => {
    if (isUserAuthenticated()) {
      setToken('');
      window.location.reload();
    }
  };

  renderDesktopMenu = () => {
    const menuItem = this.rightMenuItem(isUserAuthenticated());
    return (
      <Menu.Menu className="desktop" position="right">
        {this.renderMenuItemLink(menuItem.firstMenuPath, menuItem.firstMenuText)}
        {this.renderMenuItemLink(menuItem.secondMenuPath, menuItem.secondMenuText)}
      </Menu.Menu>
    );
  };

  renderMobileMenu = () => {
    const { active } = this.state;
    const menuItem = this.rightMenuItem(isUserAuthenticated());
    return (
      <Menu.Menu position="right" className="mobile">
        <Accordion as="item">
          <Accordion.Title active={active} onClick={this.toggleMenu}>
            <Icon size="big" inverted name="bars" />
          </Accordion.Title>
          <Accordion.Content as="menu" className="accordion-content" active={active}>
            {this.renderMenuItemLink(menuItem.firstMenuPath, menuItem.firstMenuText)}
            {this.renderMenuItemLink(menuItem.secondMenuPath, menuItem.secondMenuText)}
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
