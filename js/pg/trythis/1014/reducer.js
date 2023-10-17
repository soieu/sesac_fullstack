// initValue에 따라 x...
const reduce = (arr, fn, initValue = null) => {
  if (arr.length == 0) {
    console.log(initValue);
    return;
  }
  if (initValue == null) {
    initValue = fn(arr[arr.length - 1], arr[arr.length - 2]);
    arr.pop();
    arr.pop();

    return reduce(arr, fn, initValue);
  } else {
    initValue = fn(initValue, arr[arr.length - 1]);
    arr.pop();
    return reduce(arr, fn, initValue);
  }
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
