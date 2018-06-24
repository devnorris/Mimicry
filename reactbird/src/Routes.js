import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { history } from './redux/store';
import Main from './Components/Main';
import App from './App';

const Router =  () => (
  <Switch>
    <Route exact path='/' component={ Main } />
  </Switch>
);

export default Router;