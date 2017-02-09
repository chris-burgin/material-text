const objValues = (obj) =>
  Object.keys(obj).map((key) => obj[key])

const tagFilter = (searchText, tags) =>
  objValues(tags).find((value) => value.toLowerCase().includes(searchText))
    ? true
    : false

const textFilter = (searchText, content) =>
  content.toLowerCase().includes(searchText.toLowerCase())

const notEmpty = (searchText) =>
  searchText.length > 0

const containsFilter = (searchText, tags, text) =>
  notEmpty(searchText)
    ? textFilter(searchText, text) || tagFilter(searchText, tags)
    : true

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

// export
export {
  isActive,
  containsFilter
}
