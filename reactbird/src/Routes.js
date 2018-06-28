import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Components/Main';
import VoicesPage from './Components/VoicesPage';
import CreateAudioPage from './Components/CreateAudioPage';
import UtterancesPage from './Components/UtterancesPage';

const Router =  () => (
  <Switch>
    <Route exact path='/' component={ Main } />
    <Route path='/voices' component={ VoicesPage } />
    <Route path='/:id/new' component={ CreateAudioPage } />
    <Route path='/utterances' component={ UtterancesPage } />
  </Switch>
);

export default Router;