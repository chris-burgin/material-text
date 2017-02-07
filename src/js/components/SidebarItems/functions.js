// ****************
// isActive()
// use: checks
// ----------------
// activeId: required - int - active id
// itemId: required - int - item id
// ****************
const isActive = (activeId, itemId) =>
  (activeId === itemId
    ? true
    : false)

// export
export {
  isActive
}
