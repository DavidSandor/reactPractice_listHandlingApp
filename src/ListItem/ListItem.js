import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: props.title,
            isChecked: false
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
            <input type='checkbox' checked={this.state.isChecked} onClick={this.checkHandler}></input>
            <p>{this.state.title}</p>
        </li>
      );
    }
  }


export default ListItem;
