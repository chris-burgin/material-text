// ****************
// ITEMOPEN()
// use: updates 'activeItem' to action.value
// ****************
const ITEMOPEN = (state, action) => {
  state.activeItem = action.id
  return state
}

// export
export default ITEMOPEN
