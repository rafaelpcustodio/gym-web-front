import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Main from '../../main/pages/index';
import CreateExercise from '../../createexercise/pages/index';

const UserRoutes = () => (
  <Switch>
    <Route path="/main" exact component={Main} />
    <Route path="/exercises/create" exact component={CreateExercise} />
    <Redirect to="/main" exact component={Main} />
  </Switch>
);

export default UserRoutes;
