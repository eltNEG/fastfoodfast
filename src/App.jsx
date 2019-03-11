import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RouteManager from './components/RouteManager';

const App = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <Switch>
        {routes.map(route => (
          <RouteManager
            key={route.key}
            path={route.path}
            component={route.component}
            exact={route.exact}
            redirectTo={route.redirectTo}
            routeType={route.routeType}
          />
        ))}
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
