import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';
import './ListItem/ListItem.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <ListItem title="Task1"></ListItem>
            <ListItem title="Task2"></ListItem>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
