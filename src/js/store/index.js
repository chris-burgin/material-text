// import initial state -- this is temp
import initialState from './initialState'

// ****************
// Reducer Imports
// ****************
// item
import {
  ITEMOPEN
} from '../components/SidebarItem/reducers'

// filter
import {
  UPDATESEARCH
} from '../components/SearchBar/reducers'

// ****************
// Switch Logic
// ****************
const reducerSwitch = {
  "ITEMOPEN": ITEMOPEN,
  "UPDATESEARCH": UPDATESEARCH
}

// ****************
// AppReducers()
// use: App State Reducer Manager
// ----------------
// state: optional - json - state to be updated
// action: optional - json - redux action to be taken
// ****************
const AppReducers = (state = initialState, action = {}) =>
  reducerSwitch[action.type]
    ? reducerSwitch[action.type](state, action)
    : state

// export AppReducers
export default AppReducers
