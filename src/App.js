import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/home" component={Home} />
        <Route path="/header" component={Header} />
      </div>
    );
  }
}

export default App;
