import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { AuthRoute, UnauthRoute } from 'react-router-auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isUserAuthenticated, getUserFromLocalStorage } from '../../helpers';
import { doGetUser } from '../../actions/auth';
import Loader from '../Loader';

function routeToRender(routeType) {
  switch (routeType) {
    case 'authenticated':
      return AuthRoute;
    case 'unAuthenticated':
      return UnauthRoute;
    default:
      return Route;
  }
}

const RouteManager = (props) => {
  const {
    exact, path, isAuthenticated, component, redirectTo, routeType, doGetUser
  } = props;
  if (isUserAuthenticated() && !isAuthenticated) {
    const user = getUserFromLocalStorage();
    doGetUser(user);
    return <Loader />;
  }

  const RouteToRender = routeToRender(routeType);
  return (
    <RouteToRender
      authenticated={isAuthenticated}
      redirectTo={redirectTo}
      path={path}
      component={component}
      exact={exact}
    />
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ doGetUser }, dispatch);

const mapStateToProps = (state) => {
  const { userReducer } = state;
  const { isAuthenticated, userFetched } = userReducer;
  return {
    isAuthenticated,
    userFetched
  };
};

RouteManager.defaultProps = {
  exact: false,
  isAuthenticated: false,
  redirectTo: '/',
  routeType: null
};

RouteManager.propTypes = {
  exact: PropTypes.bool,
  doGetUser: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
  routeType: PropTypes.oneOf(['authenticated', 'unAuthenticated'])
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteManager);
