import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default [
  {
    key: 'home',
    component: Home,
    exact: true,
    path: '/'
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
    key: 'not-found',
    component: NotFound,
    path: '*'
  }
];
