// ****************
// isActive()
// use: checks
// ----------------
// activeId: required - int - active id to evaluate
// itemId: required - int - item id to evaluate
// ****************
const isActive = (activeId, itemId) =>
  activeId === itemId
    ? true
    : false

const tagFilter = (searchText, tags) =>
  tags.find((tag) => tag.includes(searchText))
    ? true
    : false

const textFilter = (searchText, text) => {

}

const isFiltered = (searchText, tags, text) => {

}

// export
export {
  isActive
}
