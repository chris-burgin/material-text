// ****************
// Helper Functions
// ****************

// ****************
// objValues()
// use: converts an flat object into an array of the objects values
// returns: array of values from the object
// ----------------
// obj: required - object - flat object to convert to an array of values
// ****************
const objValues = (obj) =>
  Object.keys(obj).map((key) => obj[key])

// ****************
// tagFilter()
// use: search flat object for values that contain a string
// returns: true if value found in tags, false if value not found in tags
// ----------------
// searchText: required - string - text to search tags for
// tags: required - object - flat object to search for value
// ****************
const tagFilter = (searchText, tags) =>
  objValues(tags).find((value) =>
    value.toLowerCase().includes(searchText.toLowerCase()))
  ? true
  : false

// ****************
// textFilter
// use: checks if text contains a search value
// returns: true if searchText is found in text, false if not found
// ----------------
// searchText: required - string - value to search text for
// text: required - string - text to search for a value in
// ****************
const textFilter = (searchText, text) =>
  text.toLowerCase().includes(searchText.toLowerCase())

// ****************
// notEmpty()
// use: checks if string is empty
// returns: true is not empty, false if empty
// ----------------
// searchText: required - string - value to check for
// ****************
const notEmpty = (searchText) =>
  searchText.length > 0

// ****************
// Exported Functions
// ****************

// ****************
// containsFilter()
// use: checks to see if an item, represented by tags or text contains
//  searchText
// returns: true if the searchText is empty or is found in tags or text, false
//  if it is not found.
// ----------------
// searchText: required - string - value to check for
// tags: required - object - flat object to search for value
// text: required - string - text to search for a value in
// ****************
const containsFilter = (searchText, tags, text) =>
  notEmpty(searchText)
    ? textFilter(searchText, text) || tagFilter(searchText, tags)
    : true

// ****************
// isActive()
// use: checks to see if the item is the active item (currently, selected)
// returns: true if itemId and activeId are the same (aka, if the item
//  is active), returns false if the items are not equal (aka, not active)
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
