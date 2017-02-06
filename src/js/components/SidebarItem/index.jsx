// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import action creators
import {
  itemOpen
} from './actions.js'

// import functions
import {
  getTitle
} from './functions.js'

class SidebarItem extends React.Component {
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
  selectItem(e) {
    // dispatch open item
    this.store.dispatch(itemOpen(this.props.refKey))
  }

  // ****************
  // Render
  // ****************
  render() {
    return (
      <div
        className="sidebaritem"
        data-active={this.props.active}
        onClick={this.selectItem.bind(this)}>
        <h2> {getTitle(this.props.item.content)}</h2>
      </div>
    )
  }
}

export default SidebarItem
