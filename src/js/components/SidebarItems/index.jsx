// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// React Components
import SidebarItem from '../SidebarItem/index.jsx'

// Functions
import {
  isActive,
  containsFilter
} from './functions.js'

class SidebarItems extends React.Component {
  constructor(props) {
    super(props)

    // set the store
    this.store = props.store;
  }

  render() {
    return (
      <div className="sidebaritems">
        {(
          Object.keys(this.props.items).map((key) =>
            containsFilter(
              this.props.filter.searchText,
              this.props.items[key].tags,
              this.props.items[key].content)
                ? <SidebarItem
                  store={this.store}
                  key={key}
                  refKey={key}
                  content={this.props.items[key].content}
                  date={this.props.items[key].date}
                  tags={this.props.items[key].tags}
                  active={isActive(this.props.activeItem, key)}/>
                : false
          )
        )}
      </div>
    )
  }
}

export default SidebarItems
