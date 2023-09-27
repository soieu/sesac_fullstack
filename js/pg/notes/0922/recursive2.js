// 1부터 10까지의 원소로 이루어진 배열을 만드는 함수를 재귀 함수로 구현하기

const arr1 = [];
const makeArray = (n) => {
  if (n === 0) return arr1.reverse();
  arr1.push(n);
  return makeArray(n - 1);
};
console.log(makeArray(10));

const arr2 = [];
const makeArray2 = (n, i = 1) => {
  if (n < i) return arr2;
  arr2.push(i);
  return makeArray2(n, i + 1);
};

console.log(makeArray2(10));

const makeArrayTco = (n, acc = []) => {
  if (n === 0) return acc.reverse();
  acc.push(n);
  return makeArrayTco(n - 1, acc);
};

console.log(makeArrayTco(10));

const makeArrayTco2 = (n, acc = []) => {
  if (n === 1) return [1, ...acc];
  return makeArrayTco2(n - 1, [n, ...acc]);
};

console.log(makeArrayTco2(10));

// 재귀 답지
function mA(n) {
  if (n === 1) return [1];
  return [...mA(n - 1), n];
}
console.log(mA(10));
