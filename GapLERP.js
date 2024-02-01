class GapLERP {
  /**
   * Runs the GapLERP algorithm on the given array.
   * @param {Array} arr - The array with undefined values.
   * @returns {Array} - The array with gaps seamlessly filled.
   */
  static run(arr) {
    const gaps = this.undefined_gap(arr);
    return this.fix_gaps(arr, gaps);
  }

  /**
   * Fills gaps in the array using linear interpolation.
   * @param {Array} arr - The array with gaps.
   * @param {Array} gaps - Array indices where gaps exist.
   * @returns {Array} - The array with gaps filled.
   */
  static fix_gaps(arr, gaps) {
    for (let i = 0, L = gaps.length; i !== L; i += 2) {
      const start = gaps[i];
      const startVal = arr[start];
      const totalUndefined = gaps[i + 1] - start;
      const alg = arr[gaps[i + 1]] - startVal;
      const spread = alg / totalUndefined;

      for (let n = 0; n !== totalUndefined; ++n) {
        arr[start + n] = startVal + (spread * n);
      }
    }
    return arr;
  }

  /**
   * Finds indices where undefined values create gaps in the array.
   * @param {Array} arr - The array with undefined values.
   * @returns {Array} - Array indices where gaps exist.
   */
  static undefined_gap(arr) {
    for (let i = 1, L = arr.length, gaps = []; i !== L; ++i) {
      if (arr[i] === undefined && arr[i - 1] !== undefined) gaps.push(i - 1);
      else if (arr[i] !== undefined && arr[i - 1] === undefined) gaps.push(i);
    }
    return gaps;
  }

  /**
   * Replaces specific values in the array with a provided value.
   * @param {Array} arr - The array to modify.
   * @param {number} targetValue - The value to replace.
   * @param {number} replacementValue - The new value.
   * @returns {Array} - The modified array.
   */
  static replace_values(arr, targetValue, replacementValue) {
    for (let i = 0, L = arr.length; i !== L; ++i) {
      if (arr[i] === targetValue) {
        arr[i] = replacementValue;
      }
    }
    return arr;
  }

  /**
   * Calculates the average value of the array.
   * @param {Array} arr - The array of numeric values.
   * @returns {number} - The average value.
   */
  static calculate_average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }
}

module.exports = GapLERP;