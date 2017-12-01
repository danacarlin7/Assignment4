import React, { Component } from 'react';

import Danasapp from './Components/Danasapp';
import './App.css';
//import Danasapp from './Components/DanasApp.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          Dana's App

        <header className="App-header">

          <h1 className="App-title">Welcome to Dana's Blog</h1>
        </header>
          <Danasapp />


      </div>
    );
  }
}

export default App;
