// ****************
// REDUCERS
// ****************

// ****************
// UPDATEITEMCONTENT()
// use: updates 'content' at `itemId` to `action.content`
// ****************
const UPDATEITEMCONTENT = (state, action) => {
  state.items[action.itemId].content = action.content
  return state
}

// export
export {
  UPDATEITEMCONTENT
}
