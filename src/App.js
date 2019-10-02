import React, {Component} from 'react';
import NavBox from './NavBox';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <NavBox />
        <Routes />
      </div>
    );
  }
}

export default App;