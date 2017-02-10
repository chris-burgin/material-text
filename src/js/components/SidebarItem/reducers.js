// ****************
// Reducers
// ****************

// ****************
// ITEMOPEN()
// use: updates 'activeItemId' to action.value
// ****************
const ITEMOPEN = (state, action) => {
  state.activeItemId = action.itemId
  return state
}

// export
export {
  ITEMOPEN
}
