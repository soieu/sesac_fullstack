const assert = require("assert");
const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
function intersect(arr1, arr2) {
  return [...new Set(arr1.filter((val) => arr2.includes(val)))];
  //   console.log([...arr1, ...arr2]);
}

function diff(arr1, arr2) {
  return [...new Set(arr1.filter((val) => !arr2.includes(val)))];
}
assert.deepEqual(intersect(A, C), [3, 4]);
assert.deepEqual(intersect(A, B), [1, 3, 5]);
assert.deepEqual(diff(A, B), [2, 4]);
assert.deepEqual(diff(B, A), [22, 44]);
assert.deepEqual(diff(A, C), [1, 2, 5]);
assert.deepEqual(diff(B, C), [1, 22, 44, 5]);
assert.deepEqual(union(A, B), [1, 2, 3, 4, 5, 22, 44]);
assert.deepEqual(union(A, C), [1, 2, 3, 4, 5, 11, 222, 555]);
