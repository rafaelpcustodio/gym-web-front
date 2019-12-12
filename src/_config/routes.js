import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from '../login/pages/index';
import CreateLogin from '../createlogin/pages/index';
import Main from '../main/pages/index';

import history from './history';
import { store } from './store';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      {localStorage.getItem('token') !== null ? (
        <Switch>
          <Route path="/main" exact component={Main} />
          <Redirect to="/main" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/login/create" exact component={CreateLogin} />
          <Route path="/login" exact component={Login} />;
          <Redirect to="/login" />
        </Switch>
      )}
    </BrowserRouter>
  </Provider>
);
export default Routes;
