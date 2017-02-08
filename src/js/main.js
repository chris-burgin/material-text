// import redux
import {createStore} from 'redux'

// import store
import AppReducers from './store/index'

// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import react components
import App from './components/App/index.jsx'

// create store - subscribe inside <App/>
let store = createStore(AppReducers)

// render the app
ReactDOM.render(
  <App store={store}/>,
  document.getElementById('hook'));
