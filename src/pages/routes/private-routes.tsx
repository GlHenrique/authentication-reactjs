import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';

const PrivateRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="**" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default PrivateRoutes;
