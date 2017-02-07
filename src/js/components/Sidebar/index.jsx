// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Import Helpers

// React Components
import SidebarItem from '../SidebarItem/index.jsx'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    // set the store
    this.store = props.store;
  }

  render() {
    return (
      <div className="sidebar">
        {(
          Object.keys(this.props.items).map((key) =>
            <SidebarItem
              store={this.store}
              key={key}
              refKey={key}
              content={this.props.items[key].content}
              date={this.props.items[key].date}
              tags={this.props.items[key].tags}
              active={(this.props.activeItem === key ? true : false)}/>
          )
        )}
      </div>
    )
  }
}

export default Sidebar
