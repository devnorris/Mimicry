import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Main';
import VoicesPage from './Components/VoicesPage';

const Router =  () => (
  <Switch>
    <Route exact path='/' component={ Main } />
    <Route path='/voices' component={ VoicesPage } />
  </Switch>
);

export default Router;