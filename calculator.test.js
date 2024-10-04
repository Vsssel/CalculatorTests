// calculator.test.js
const Calculator = require('./calculator'); // Importing the Calculator class

const calculator = new Calculator(); // Creating an instance of the Calculator

// Test for addition
test('Properly adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, -1)).toBe(-2);
    expect(calculator.add(-1, 1)).toBe(0);
});

// Test for subtraction
test('Properly subtracts two numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(-1, -1)).toBe(0);
    expect(calculator.subtract(-1, 1)).toBe(-2);
});

// Test for multiplication
test('Properly multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(0, 5)).toBe(0);
});

// Test for division
test('Properly divides two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(-6, -2)).toBe(3);
    expect(calculator.divide(-6, 2)).toBe(-3);
    expect(calculator.divide(0, 5)).toBe(0);
});

// Test for division by zero
test('Throws an error when dividing by zero', () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
});
