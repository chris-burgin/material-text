// ****************
// getLine()
// use: returns a specified line from the content text
// ----------------
// lineNumber: required - int - the line number to return
// text: required - string - text content of the item
// ****************
const getLine = (lineNumber, text) =>
  text.split('\n')[lineNumber]

// ****************
// getTitle()
// use: returns the title from the content string
// ----------------
// text: required - string - text content of the item
// ****************
const getTitle = (text) =>
  getLine(0, text)

// ****************
// getShort()
// use: returns the 2nd line of content from the content string
// ----------------
// text: required - string - text content of the item
// ****************
const getShort = (text) =>
  getLine(1, text)

// export
export {
  getTitle,
  getShort
}
