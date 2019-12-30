import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from './appbar';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <AppBar />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
