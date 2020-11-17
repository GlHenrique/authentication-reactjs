import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import NotFound from '../NotFound';

const PublicRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="**" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default PublicRoutes;
