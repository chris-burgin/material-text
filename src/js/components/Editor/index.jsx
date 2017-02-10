// import react
import React from 'react';
import ReactDOM from 'react-dom';

// outside modules
import CodeMirror from 'react-codemirror'

// import modules
import MenuBar from '../MenuBar/index.jsx'
import TagBar from '../TagBar/index.jsx'

// import action creators
import {
  updateItemContent
} from './actions.js'

// import functions
import {
} from './functions.js'

class Editor extends React.Component {
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
  onContentChange(newContent) {
    this.store.dispatch(updateItemContent(this.props.activeItemId, newContent))
  }

  // ****************
  // Render
  // ****************
  render() {
    return (
      <div className="editor">
        <CodeMirror
          value={this.props.content}
          onChange={this.onContentChange.bind(this)}
          options={{viewportMargin: 0}}/>
      </div>
    )
  }
}

export default Editor
