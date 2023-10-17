assert = require("assert");
function range(first = 1, last = null, step = null) {
  if (step === 0 || first === last) {
    return [first];
  }
  if ((step > 0 && first > last) || (step < 0 && first < last)) {
    return [];
  }
  let minusone = false;
  if (last === null) {
    if (first === 0) {
      return [0];
    }
    if (first < 0) {
      minusone = true;
      first *= -1;
    }
    last = first;
    first = 1;
  }

  let arr = [];
  if (last < first) {
    if (step === null) step = -1;
    for (let i = first; i >= last; i += step) {
      arr.push(i);
    }
  } else {
    if (step === null) step = 1;
    for (let i = first; i <= last; i += step) {
      arr.push(i);
    }
  }
  if (minusone) {
    let farr = [];
    arr.reverse();
    arr.forEach((a, idx) => farr.push(a * -1));
    arr = farr;
  }
  console.log(arr);
  return arr;
}

// assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);

// assert.deepStrictEqual(range(5, 5), [5]);
// assert.deepStrictEqual(range(5, 5, 1), [5]);
// assert.deepStrictEqual(range(0, 0), [0]);
// assert.deepStrictEqual(range(0), [0]);
// assert.deepStrictEqual(range(0, 0, 5), [0]);
// assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
// assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);
// assert.deepStrictEqual(range(10, 1, -3), [10, 7, 4, 1]);
// assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
// assert.deepStrictEqual(
//   range(100),
//   Array.from({ length: 100 }, (_, i) => i + 1)
// );
// assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
// assert.deepStrictEqual(range(5, 5, 0), [5]);
// assert.deepStrictEqual(range(5, 5, -1), [5]);
// assert.deepStrictEqual(range(5, 1, 1), []);
// assert.deepStrictEqual(range(1, 5, -1), []);
// assert.deepStrictEqual(range(1, 5, 6), [1]);
// assert.deepStrictEqual(range(2, 1, -5), [2]);
// assert.deepStrictEqual(range(0, -1, -5), [0]);
// assert.deepStrictEqual(range(0, -1, 0), [0]);
// assert.deepStrictEqual(range(1, 5, 0), [1]);
// assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
// assert.deepStrictEqual(range(0, -1), [0, -1]);
// assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
// assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);
// assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
