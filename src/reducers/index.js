// import initial state
import initialState from './initialState'

// import reducers
import ITEMOPEN from './item/ITEMOPEN'

// switch
const reducerSwitch = {
  "ITEMOPEN": ITEMOPEN
}

// App State Reducer Manager
const AppReducers = (state = initialState, action = {}) =>
  reducerSwitch[action.type] ?
    reducerSwitch[action.type](state, action) :
    state

// export AppReducers
export default AppReducers
