// ****************
// Helper Functions
// ****************

// ****************
// getLine()
// use: to get a specific line from the content
// returns: a specified line from the content text
// ----------------
// lineNumber: required - int - the line number to return
// text: required - string - text content of the item
// ****************
const getLine = (lineNumber, text) =>
  text.split('\n')[lineNumber]

// ****************
// Exported Functions
// ****************

// ****************
// getTitle()
// use: get the first line as a title for the sidebar item
// returns: line 0 if exists, "New Note!" if it does not exist
// ----------------
// text: required - string - text content of the item
// ****************
const getTitle = (text) =>
  getLine(0, text).length > 0
    ? getLine(0, text)
    : "New Note!"

// ****************
// getShort()
// use: get short content to be used as the description of the sidebar item
// returns: a specified line from the content text
// ----------------
// text: required - string - text content of the item
// ****************
const getShort = (text) =>
  getLine(1, text)
    ? getLine(1, text)
    : "No additional content."

// export
export {
  getTitle,
  getShort
}
