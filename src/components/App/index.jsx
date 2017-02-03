// react imports
import React from 'react';
import ReactDOM from 'react-dom';

// import modules
import Sidebar from '../Sidebar/index.jsx'

class App extends React.Component {
  // setup the constructor
  constructor(props) {
    // declares this the constructor
    super(props)

    // set store
    this.store = props.store;

    // set the initial state
    this.state = this.store.getState()

    // launch subscriber
    this.subscriber()
  }

  subscriber() {
    this.store.subscribe(() => {
      this.setState(this.store.getState())
    })
  }

  render() {
    return (
      <div className="app">
        <Sidebar/>
      </div>
    )
  }
}

export default App
