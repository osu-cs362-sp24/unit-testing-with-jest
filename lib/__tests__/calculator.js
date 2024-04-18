const Calculator = require("../calculator")

test("calculator adds 2 and 2 to get 4", function () {
  // Arrange
  const calc = new Calculator()

  // Act
  const result = calc.calculate(2, 2, Calculator.ADD)

  // Assert
  expect(result).toBe(4)
})

// Bad practice.  Don't do.
// test("Calculator.calculate() works correctly", function () {
//   const calc = new Calculator()
//   expect(calc.calculate(2, 2, Calculator.ADD)).toBe(4)
//   expect(calc.calculate(2, 2, Calculator.SUB)).toBe(0)
//   expect(calc.calculate(2, 2, Calculator.MUL)).toBe(4)
//   expect(calc.calculate(2, 2, Calculator.DIV)).toBe(1)
// })

test("calculator subtracts 2 from 2 to get 0", function () {
  // Arrange
  const calc = new Calculator()

  // Act
  const result = calc.calculate(2, 2, Calculator.SUB)

  // Assert
  expect(result).toBe(0)
})

test("calculator multiplies 2 and 2 to get 4", function () {
  // Arrange
  const calc = new Calculator()

  // Act
  const result = calc.calculate(2, 2, Calculator.MUL)

  // Assert
  expect(result).toBe(4)
})

test("calculator divides 2 by 2 to get 1", function () {
  // Arrange
  const calc = new Calculator()

  // Act
  const result = calc.calculate(2, 2, Calculator.DIV)

  // Assert
  expect(result).toBe(1)
})

test("throws an Error when dividing by 0", function () {
  const calc = new Calculator()
  expect(function () {
    calc.calculate(2, 0, Calculator.DIV)
  }).toThrow(RangeError)
})

describe("multiplication operation", function () {
  test("returns negative for opposite-signed inputs", function () {
    const calc = new Calculator()
    expect(calc.calculate(2, -2, Calculator.MUL))
      .toBeLessThan(0)
  })

  test("returns positive for two positive inputs", function () {
    const calc = new Calculator()
    expect(calc.calculate(2, 2, Calculator.MUL))
      .toBeGreaterThan(0)
  })

  test("returns positive for two negative inputs", function () {
    const calc = new Calculator()
    expect(calc.calculate(-2, -2, Calculator.MUL))
      .toBeGreaterThan(0)
  })
})
