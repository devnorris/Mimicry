import React, { Component } from 'react';
import axios from 'axios';
import Router from './Routes';
const API_KEY = process.env.REACT_APP_LYREBIRD_API_KEY;
const apiConfig = {
  headers: { Authorization: API_KEY }
}

class App extends Component {

  componentDidMount() {

    axios.get('https://custom.lyrebird.ai/api/v0/voices', apiConfig )
    .then(res => {
      console.log("res", res.data)
    })
    .catch(error => {
      console.log("error", error)
    })
  }


  render() {
    return (
      <div>
        <h1>LyreBird</h1>

        <Router />
      </div>
    );
  }
}

export default App;
