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
    key: 'not-found',
    component: NotFound,
    path: '*'
  }
];
