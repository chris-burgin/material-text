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
        <div className="title">
          <h2> {getTitle(this.props.content)} </h2>
          <span className="date"> {this.props.date} </span>
        </div>
        <div className="meta">
          <span className="short"> {getShort(this.props.content)} </span>
        </div>
      </div>
    )
  }
}

export default SidebarItem
