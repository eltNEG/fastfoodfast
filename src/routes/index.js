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
    path: '/register'
  },
  {
    key: 'login',
    component: Home,
    exact: true,
    path: '/login'
  },
  {
    key: 'not-found',
    component: NotFound,
    path: '*'
  }
];
