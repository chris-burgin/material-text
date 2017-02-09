// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import modules
import MenuBar from '../MenuBar/index.jsx'
import TagBar from '../TagBar/index.jsx'

// import action creators
import {
} from './actions.js'

// import functions
import {
} from './functions.js'

class Main extends React.Component {
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
      <div className="main">
        <MenuBar
          store={this.store}/>
        <TagBar
          store={this.store}/>
      </div>
    )
  }
}

export default Main
