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
      <div>
        {(
          Object.keys(this.props.items).map((key) =>
            <SidebarItem
              key={key}
              refKey={key}
              item={this.props.items[key]}
              store={this.store}/>
          )
        )}
      </div>
    )
  }
}

export default Sidebar
