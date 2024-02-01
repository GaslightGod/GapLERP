# GapLERP - Linear Interpolation for Arrays with Gaps!

GapLERP is a JavaScript class tailored for handling linear interpolation in arrays with undefined values. Seamlessly filling gaps using the LERP formula, GapLERP offers a versatile solution for scenarios like gaming applications, where tracking player movement changes over time can be critical. Enhance your projects with intelligent data refinement and ensure fair play by detecting cheating or movement-based issues. Explore GapLERP for a smart and efficient approach to linear interpolation. 🚀💻

## Installation

Before running test cases, make sure you have Node.js installed. If not, you can download it [here](https://nodejs.org/).

Next, install Jest using the following command:

```bash
npm install --save-dev jest
```

## Running Test Cases

Clone the GapLERP repository:

```bash
git clone https://github.com/GaslightGod/gaplerp.git
cd gaplerp
```
Install project dependencies:

```bash
npm install
```

Create a test file, e.g., gapLERP.test.js, with sample test cases. Make sure to adjust the paths accordingly:

```js
// gapLERP.test.js

const GapLERP = require('./GapLERP');

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
```
Run the tests using:

```bash
npm test
```
Ensure the output matches your expectations based on the defined test cases.
