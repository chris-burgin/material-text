// ****************
// ITEMOPEN()
// use: updates 'activeItem' to action.value
// ****************
const ITEMOPEN = (state, action) => {
  state.activeItem = action.itemId
  return state
}

// export
export default ITEMOPEN
