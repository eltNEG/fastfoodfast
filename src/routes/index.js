import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';

export default [
  {
    key: 'home',
    component: Home,
    exact: true,
    path: '/',
    routeType: 'unAuthenticated',
    redirectTo: '/buy'
  },
  {
    key: 'buy',
    component: Home,
    exact: true,
    path: '/buy',
    routeType: 'authenticated',
    redirectTo: '/'
  },
  {
    key: 'register',
    component: Home,
    exact: true,
    path: '/register',
    routeType: 'unAuthenticated',
    redirectTo: '/'
  },
  {
    key: 'login',
    component: Home,
    exact: true,
    path: '/login',
    routeType: 'unAuthenticated',
    redirectTo: '/'
  },
  {
    key: 'checkout',
    component: Checkout,
    exact: true,
    path: '/checkout/:foodId',
    routeType: 'authenticated',
    redirectTo: '/'
  },
  {
    key: 'not-found',
    component: NotFound,
    path: '*'
  }
];
