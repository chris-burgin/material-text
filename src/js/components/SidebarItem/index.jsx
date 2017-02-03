// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import action creators
import {itemOpen} from './actions.js'

class SidebarItem extends React.Component {
  constructor(props) {
    super(props)

    // set the store
    this.store = props.store;
  }

  render() {
    return (
      <div onClick={() => this.store.dispatch(itemOpen(this.props.refKey))}>
        <span>
          sidebaritem
        </span>
      </div>
    )
  }
}

export default SidebarItem
