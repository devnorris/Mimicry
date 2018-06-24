import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Main';
import Voice from './Components/Voice';

const Router =  () => (
  <Switch>
    <Route exact path='/voices' component={ Main } />
    <Route exact path='/voice/:id' component={ Voice } />
  </Switch>
);

export default Router;