// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// React Components
import SidebarItems from '../SidebarItems/index.jsx'
import SearchBar from '../SearchBar/index.jsx'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    // set the store
    this.store = props.store;
  }

  render() {
    return (
      <div className="sidebar">
        <SearchBar
          store={this.store}/>

        <SidebarItems
          store={this.store}
          items={this.props.items}
          activeItem={this.props.activeItem} />
      </div>
    )
  }
}

export default Sidebar
