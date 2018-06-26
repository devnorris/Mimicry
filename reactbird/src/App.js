import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Routes';


const Navigation = (props) =>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <button><NavLink to='/'>Dashboard</NavLink></button>
      <button><NavLink to='/voices'>Voice List</NavLink></button>
      <button><NavLink to='/:id/new'>Create Utterance</NavLink></button>
      <button><NavLink to='/utterances'>Your Utterances</NavLink></button>
    </div>
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
