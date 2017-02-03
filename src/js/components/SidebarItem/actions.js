// ****************
// Actions
// ****************
const ITEMOPEN = "ITEMOPEN"

// ****************
// Action Creators
// ****************
const itemOpen = (itemId) => {
  return {type: ITEMOPEN, itemId: itemId}
}

// exports
export {itemOpen}
