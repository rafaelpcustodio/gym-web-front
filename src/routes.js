import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import CreateLogin from './pages/CreateLogin/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login/create" component={CreateLogin} />
      </Switch>
    </BrowserRouter>
  );
}
