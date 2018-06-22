import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_LYREBIRD_API_KEY;
const apiConfig = {
  headers: { Authorization: API_KEY }
}

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
