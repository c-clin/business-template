import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Collection from './components/Collection';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/collection" component={Collection} />
        <Footer />
      </div>
    );
  }
}

export default App;
