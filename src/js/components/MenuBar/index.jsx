// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import action creators
import {
  itemOpen
} from './actions.js'

// import functions
import {
  getTitle,
  getShort
} from './functions.js'

class MenuBar extends React.Component {
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

  // ****************
  // Render
  // ****************
  render() {
    return (
      <div className="menubar">

      </div>
    )
  }
}

export default MenuBar
