import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './AuthModal.scss';

export class AuthModalComponent extends React.Component {
  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const {
      text, children, location
    } = this.props;
    const open = location.pathname === `/${text.toLowerCase()}`;
    return (
      <Modal
        open={open}
        className="auth-modal"
        trigger={<div>{text}</div>}
        onClose={this.handleClose}
        basic
        size="small"
        centered
      >
        {children}
      </Modal>
    );
  }
}

AuthModalComponent.propTypes = {
  text: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired
};

export default withRouter(AuthModalComponent);
