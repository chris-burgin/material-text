// ****************
// REDUCERS
// ****************

// ****************
// UPDATESEARCH()
// use: updates 'filter -> searchText' to action.value
// ****************
const UPDATESEARCH = (state, action) => {
  state.filter.searchText = action.searchText
  return state
}

// export
export {
  UPDATESEARCH
}
