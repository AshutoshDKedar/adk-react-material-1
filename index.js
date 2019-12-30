import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from './appbar';
import Tabs from './tabs';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar /><br/>
        <Tabs />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
