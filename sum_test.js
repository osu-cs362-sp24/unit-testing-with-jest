const sum = require("./lib/sum")
const result = sum(2, 2)
const expected = 5
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

const result2 = sum(3, 3)
const expected2 = 7
if (result2 !== expected2) {
  throw new Error(`${result2} is not equal to ${expected2}`)
}
