class GapLERP {
  static run(arr) {
    const gaps = this.undefined_gap(arr);
    return this.fix_gaps(arr, gaps);
  }

  static fix_gaps(arr, gaps) {
    for (let i = 0, L = gaps.length; i !== L; i += 2) {
      const start_index = gaps[i];
      const start_value = arr[start_index];
      const total_undefined = gaps[i + 1] - start_index;
      const alg = arr[gaps[i + 1]] - start_value;
      const spread = alg / total_undefined;
      for (let n = 0; n !== total_undefined; ++n) arr[start_index + n] = start_value + (spread * n);
    }
    return arr;
  }

  static undefined_gap(arr) {
    for (var i = 1, L = arr.length, gaps = []; i !== L; ++i) {
      if (arr[i] === undefined && arr[i - 1] !== undefined) gaps[gaps.length] = i - 1;
      else if (arr[i] !== undefined && arr[i - 1] === undefined) gaps[gaps.length] = i;
    }
    return gaps;
  }
}

module.exports = GapLERP;