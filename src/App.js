import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './pages/Main/main';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Remove From here */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Remove to here */}

        <Main />
      </div>
    );
  }
}

export default App;
