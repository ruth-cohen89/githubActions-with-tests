const { add, substract, multiply, divide } = require("./math"); // Update 'math' to your file name.

describe("Math Operations", () => {
  test("add() should correctly add two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
  });

  test("substract() should correctly subtract two numbers", () => {
    expect(substract(5, 3)).toBe(2);
    expect(substract(0, 5)).toBe(-5);
    expect(substract(-5, -5)).toBe(0);
  });

  test("multiply() should correctly multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 100)).toBe(0);
  });

  test("divide() should correctly divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-6, 2)).toBe(-3);
    expect(divide(0, 5)).toBe(0);
  });

  test("divide() should handle division by zero gracefully", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
