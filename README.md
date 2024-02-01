<div align="center">
  <h1>GapLERP - Linear Interpolation for Arrays with Gaps!</h1>
</div>

<div align="center">
  <img src="https://media.discordapp.net/attachments/1178257853698560021/1202567191078379550/Linear-Interpolation-312471091.jpg?ex=65cdecf8&is=65bb77f8&hm=49bcfe665280406b55f06eaa435476595cc27e55ef5dac8a4e0939c9094c7baf&=&format=webp&width=600&height=360" alt="Alt Text" width="400">
</div>


GapLERP is a JavaScript class tailored for handling linear interpolation in arrays with undefined values. Seamlessly filling gaps using the LERP formula, GapLERP offers a versatile solution for scenarios like gaming applications, where tracking player movement changes over time can be critical. Enhance your projects with intelligent data refinement and ensure fair play by detecting cheating or movement-based issues. Explore GapLERP for a smart and efficient approach to linear interpolation. 🚀💻

<div align="center">
  <h2>Installation</h2>
</div>

Before running test cases, make sure you have Node.js installed. If not, you can download it [here](https://nodejs.org/).

Next, install Jest using the following command:

```bash
npm install --save-dev jest
```

## Running Test Cases

Clone the GapLERP repository:

```bash
git clone https://github.com/GaslightGod/GapLERP.git
cd GapLERP
```
Install project dependencies:

```bash
npm install
```

Modify the test file, e.g., GapLERP.test.js, with sample test cases. Make sure to adjust the paths accordingly:

```js
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

## Linear Interpolation Formula

GapLERP utilizes the linear interpolation formula:

$` \text{LERP}(a, b, t) = a + t \cdot (b - a)`$

Here's how it ties together:

### Undefined Gap Identification:      
    The undefined_gap method scans the player's distance array, pinpointing the indices where undefined values exist, signifying gaps.

### Linear Interpolation:
    The fix_gaps method utilizes linear interpolation to intelligently fill these gaps. It calculates the spread between defined values and smoothly populates the undefined positions based on the linear relationship.

###  Usage in Player Position Tracking:
    The run method orchestrates the entire process, making it easy to track player position changes over ticks in gaming applications. Adjust the initial and final positions, set the number of ticks, and let the linear interpolation work its magic.

## Potential Applications

GapLERP could hypothetically be employed to track player position changes over time, aiding in the detection of cheating or movement-based issues in gaming applications. By intelligently filling gaps in player movement data, it becomes a valuable tool for ensuring fair play and maintaining a balanced gaming environment.

## Usage

Feel free to integrate GapLERP into your projects. The class offers a smart solution for linear interpolation, particularly when dealing with arrays of data containing undefined values. For more details on GapLERP, refer to the main README.

Happy testing and coding! 🧪🚀
