import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';
import './ListItem/ListItem.css';

class App extends Component {

  state = {
    itemList: [
      {title: "Task1"}, 
      {title: "Task2"}
    ],
    newTaskName: ""
  }

  taskNameInputChangeHandler = (event) => {
    this.setState({
      newTaskName: event.target.value
    })
  }

  addButtonClickHandler = () => {

    const changedList = [...this.state.itemList];
    changedList.push(
      {title: this.state.newTaskName}
    );

    this.setState({
      itemList: changedList
    });
  }
  
  removeItemHandler = (event, index) => {

    const changedList = [...this.state.itemList];
    changedList.splice(index, 1);

    this.setState({
      itemList: changedList
    });
  }

  render() {

    const renderedList = [...this.state.itemList].map( item => {
        return <ListItem key={item.title} title={item.title} removeClick={(event) => this.removeItemHandler(event, this.state.itemList.indexOf(item)) }/>
      });    

    return (
      <div className="App">
        <header className="App-header">
        <input type="text" onChange={this.taskNameInputChangeHandler}></input>
        <button onClick={this.addButtonClickHandler}>Add task</button>
          <ul>
            {renderedList}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
