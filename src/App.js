import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />

        <Route path="/home" component={Home} />
        <Route path="/header" component={Header} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
