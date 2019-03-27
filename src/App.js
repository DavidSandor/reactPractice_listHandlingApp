import React, { Component } from 'react';
import './App.css';

import ListItem from './ListItem/ListItem';
import './ListItem/ListItem.css';

import NameValidator from './NameValidator/NameValidator';
import './NameValidator/NameValidator.css';

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

  inputNameIsValid = (input) => {
    return !this.state.itemList.find(item => item.title === input);
  }

  render() {

    const renderedList = [...this.state.itemList].map( item => {
        return <ListItem key={item.title} title={item.title} removeClick={(event) => this.removeItemHandler(event, this.state.itemList.indexOf(item)) }/>
      });

    const validatorMessage =  <NameValidator isValid={this.inputNameIsValid(this.state.newTaskName)} message="Task name already exists!"/>

    const addButtonDisabled = !this.inputNameIsValid(this.state.newTaskName);

    return (
      <div className="App">
        <header className="App-header">
        <input type="text" onChange={this.taskNameInputChangeHandler}></input>
        <button onClick={this.addButtonClickHandler} disabled={addButtonDisabled}>Add task</button>
        {validatorMessage}
          <ul>
            {renderedList}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
