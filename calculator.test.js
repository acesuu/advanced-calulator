const { add, subtract, multiply, divide, exponentiate, sqrt, modulus } = require('./calculator');

describe('Advanced Calculator Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides 10 / 0 to throw an error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('exponentiates 2 ^ 3 to equal 8', () => {
    expect(exponentiate(2, 3)).toBe(8);
  });

  // New test for the square root function
  test('calculates the square root of 4 to equal 2', () => {
    expect(sqrt(4)).toBe(2);
  });

  // New test for the square root of a negative number throwing an error
  test('calculates the square root of -1 to throw an error', () => {
    expect(() => sqrt(-1)).toThrow('Cannot calculate the square root of a negative number.');
  });

  // New test for the modulus function
  test('calculates the modulus of 10 % 3 to equal 1', () => {
    expect(modulus(10, 3)).toBe(1);
  });
});
