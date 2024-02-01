// gapLERP.test.js

const GapLERP = require('../GapLERP');

describe('GapLERP Tests', () => {
  test('Test 1: Linear interpolation with gaps', () => {
    const inputArray = [1, undefined, undefined, 4];
    const expectedOutput = [1, 2, 3, 4];
    expect(GapLERP.run(inputArray)).toEqual(expectedOutput);
  });

  test('Test 2: Array with no gaps', () => {
    const inputArray = [1, 2, 3, 4];
    const expectedOutput = [1, 2, 3, 4];
    expect(GapLERP.run(inputArray)).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});