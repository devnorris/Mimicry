import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Main';
import Voice from './Components/VoicesPage';

const Router =  () => (
  <Switch>
    <Route exact path='/' component={ Main } />
  </Switch>
);

export default Router;