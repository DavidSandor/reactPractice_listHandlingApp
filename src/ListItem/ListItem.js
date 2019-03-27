import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: props.title,
            isChecked: false,
            removeClickHandler: props.removeClick
        };
    }

    checkHandler = (event) => {
        this.setState({
            isChecked: event.target.checked
        });
    }

    render() {

        let listItemClasses = 'list-item';

        if(this.state.isChecked){
            listItemClasses += ' list-item-done';
        }

      return (
        <li className={listItemClasses}>
            <input type='checkbox' checked={this.state.isChecked} onChange={this.checkHandler}></input>
            <p>{this.state.title}</p>
            <button onClick={this.state.removeClickHandler}>Remove</button>
        </li>
      );
    }
  }


export default ListItem;
