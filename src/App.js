import React, { Component } from 'react';
import './App.css';
import Navigation from './presentational_components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="App">
          <h1>MARS</h1>
        </div>
      </div>
    );
  }
}

export default App;
