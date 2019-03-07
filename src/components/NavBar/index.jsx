import React from 'react';
import { Menu, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH } from '../../constants';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

<<<<<<< HEAD
  toggleMenu = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  renderMenuItemLink = (path, text) => (
    <Menu.Item>
      <Link to={path}>
        <div>{text}</div>
      </Link>
    </Menu.Item>
  );

  renderDesktopMenu = () => (
    <Menu.Menu className="desktop" position="right">
      {this.renderMenuItemLink(REGISTER_PATH, 'Register')}
      {this.renderMenuItemLink(LOGIN_PATH, 'Login')}
    </Menu.Menu>
  );

=======
  renderDesktopMenu = () => (
    <Menu.Menu className="desktop" position="right">
      <Menu.Item>
        <Link to={REGISTER_PATH}>
          <div>Register</div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={LOGIN_PATH}>
          <div>login</div>
        </Link>
      </Menu.Item>
    </Menu.Menu>
  );

  toggleMenu = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

>>>>>>> [ft-#164048770] Implement header and footer
  renderMobileMenu = () => {
    const { active } = this.state;
    return (
      <Menu.Menu position="right" className="mobile">
        <Accordion as="item">
          <Accordion.Title active={active} onClick={this.toggleMenu}>
            <Icon size="big" inverted name="bars" />
          </Accordion.Title>
          <Accordion.Content as="menu" className="accordion-content" active={active}>
<<<<<<< HEAD
            {this.renderMenuItemLink(REGISTER_PATH, 'Register')}
            {this.renderMenuItemLink(LOGIN_PATH, 'Login')}
=======
            <Menu.Item>
              <Link to={REGISTER_PATH}>
                <div>Register</div>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={LOGIN_PATH}>
                <div>login</div>
              </Link>
            </Menu.Item>
>>>>>>> [ft-#164048770] Implement header and footer
          </Accordion.Content>
        </Accordion>
      </Menu.Menu>
    );
  };

  render() {
    return (
<<<<<<< HEAD
      <Menu borderless className="nav-bar">
=======
      <Menu fixed borderless className="nav-bar">
>>>>>>> [ft-#164048770] Implement header and footer
        <Menu.Menu position="left">
          <Menu.Item>
            <Link to={HOME_PATH}>
              <h1>FastFoodFast</h1>
            </Link>
          </Menu.Item>
        </Menu.Menu>
        {this.renderDesktopMenu()}
        {this.renderMobileMenu()}
      </Menu>
    );
  }
}

export default NavBar;
