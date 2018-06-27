import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Main';
import VoicesPage from './Components/VoicesPage';
import CreateAudioPage from './Components/CreateAudioPage';

const Router =  () => (
  <Switch>
    <Route exact path='/' component={ Main } />
    <Route path='/voices' component={ VoicesPage } />
    <Route path='/:id/new' component={ CreateAudioPage } />
  </Switch>
);

export default Router;