//다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
//배열에서 합해서 N이되는 두 개의 요소(index)를 찾는
//keyPair(arr, N)함수를 작성하시오.
const assert = require("assert");
const keyPair1 = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == n) {
        return [i, j];
      }
    }
  }
};

// sort & 2 pointer
const keyPair2 = (arr, n) => {
  const obj = {};
  for (entry in Object.entries(arr)) {
    obj.push(entry.key, entry.value);
  }
  console.log(obj);
};

// keyPair([1, 4, 45, 6, 10, 8], 16);
keyPair2([1, 4, 45, 6, 10, 8], 16);

assert.deepStrictEqual(keyPair1([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair1([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair1([1, 2, 3, 4, 5], 9), [3, 4]);
