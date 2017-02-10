// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import action creators
import {
  updateSearch
} from './actions.js'

// import functions
import {
} from './functions.js'

// import resources
import {
  plus
} from './resources.js'

class SearchBar extends React.Component {
  // ****************
  // Constuctor
  // ****************
  constructor(props) {
    super(props)

    // set the store
    this.store = props.store;
  }

  // ****************
  // Actions
  // ****************
  onKeyUp(e) {
    // dispatch a change to the textbox
    this.store.dispatch(updateSearch(e.target.value))
  }

  // ****************
  // Render
  // ****************
  render() {
    return (
      <div
        className="searchbar">
        <input
          onKeyUp={this.onKeyUp.bind(this)}
          type="text"/>
        <span className="addnew"> {plus} </span>
      </div>
    )
  }
}

export default SearchBar
