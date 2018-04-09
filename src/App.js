import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookShout from './components/bookshout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShout />
      </div>
    );
  }
}

export default App;
