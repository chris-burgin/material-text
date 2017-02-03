// react imports
import React from 'react';
import ReactDOM from 'react-dom';

// import modules
import Sidebar from '../Sidebar/index.jsx'

class App extends React.Component {
  // setup the constructor
  constructor() {
    // declares this the constructor
    super()

    // set initial state (will be from redux)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Sidebar/>
      </div>
    )
  }

  click1() {
    console.log(this.state)
  }
}

export default App
