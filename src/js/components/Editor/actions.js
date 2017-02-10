// ****************
// Actions
// ****************
const UPDATEITEMCONTENT = "UPDATEITEMCONTENT"

// ****************
// Action Creators
// ****************
const updateItemContent = (itemId, content) => {
  return {type: UPDATEITEMCONTENT, content: content, itemId: itemId}
}

// exports
export {
  updateItemContent
}
