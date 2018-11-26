import React, { Component } from 'react';
import MainPage from './Components/MainPage';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainPage />
      </div>
    );
  }
}

export default App;
