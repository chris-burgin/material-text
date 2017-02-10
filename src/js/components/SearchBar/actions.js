// ****************
// Actions
// ****************
const UPDATESEARCH = "UPDATESEARCH"

// ****************
// Action Creators
// ****************
const updateSearch = (searchText) => {
  return {type: UPDATESEARCH, searchText: searchText}
}

// exports
export {
  updateSearch
}
