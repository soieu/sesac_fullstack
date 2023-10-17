const assert = require("assert");
// const arr = [1, 2, 3];

// const ar = arr.reduce((acc, a) => acc / a, 1);
// console.log("ar:", ar);

const reduce = (arr, fn, initValue) => {};
assert.strictEqual(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  6
); // 6이면 통과!
assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
); // 15면 통과!
assert.strictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
); // 120이면 통과!
assert.strictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
); // 8이면 통과!
assert.strictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
); // 0이면 통과!
