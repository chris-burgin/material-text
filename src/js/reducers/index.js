// import initial state
import initialState from './initialState'

// import item reducers
import ITEMOPEN from './item/ITEMOPEN'

// import search reducers
import UPDATESEARCH from './search/UPDATESEARCH'

// switch
const reducerSwitch = {
  "ITEMOPEN": ITEMOPEN,
  "UPDATESEARCH": UPDATESEARCH
}

// App State Reducer Manager
const AppReducers = (state = initialState, action = {}) =>
  reducerSwitch[action.type] ?
    reducerSwitch[action.type](state, action) :
    state

// export AppReducers
export default AppReducers
