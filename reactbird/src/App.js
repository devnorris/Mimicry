import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Router from './Routes';

const API_KEY = process.env.REACT_APP_LYREBIRD_API_KEY;
const apiConfig = {
  headers: { Authorization: API_KEY }
}

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/voices'>Voice List</NavLink></li>
    <li><NavLink to='/voice/:id'>Voice</NavLink></li>
  </ul>
</nav>


class App extends Component {
  constructor() {
    super();
    this.state = {
      voiceList: []
    }
  }

  componentDidMount() {

    axios.get('https://custom.lyrebird.ai/api/v0/voices', apiConfig )
    .then(res => {
      this.setState({ voiceList: res.data.results});
    console.log(this.state.voiceList)
    })
    .catch(error => {
      console.log("error", error)
    })
  }


  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
