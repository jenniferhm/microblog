import React, { Component } from 'react';
import NavBox from './NavBox';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBox className="navBox"/>
        <Routes className="routes"/>
      </div>
    );
  }
}

export default App;