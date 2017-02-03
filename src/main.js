// import react
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

// import reducers
import AppReducers from './reducers/index'

// import components
import App from './components/App/index.jsx'

// create store
let store = createStore(AppReducers)

// test sub
store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'ITEMOPEN', id: '1' })

// render the app
ReactDOM.render(
  <App/>,
  document.getElementById('hook'));
