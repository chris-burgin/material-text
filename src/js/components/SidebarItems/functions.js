// ****************
// isActive()
// use: checks
// ----------------
// activeId: required - int - active id to evaluate
// itemId: required - int - item id to evaluate
// ****************
const isActive = (activeId, itemId) =>
  (activeId === itemId
    ? true
    : false)

// export
export {
  isActive
}
