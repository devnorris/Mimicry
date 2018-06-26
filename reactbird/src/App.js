import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Routes';


const Navigation = (props) =>
  <nav>
    <ul>
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/:id/new'>Voice List</NavLink></li>
      <li><NavLink to='/utterances'>Your Utterances</NavLink></li>
    </ul>
  </nav>

  class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    )
  }
}

export default App;
