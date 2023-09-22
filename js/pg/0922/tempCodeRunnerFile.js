const arr1 = [];
const makeArray = (n) => {
  if (n === 1) return arr1.push(n);
  return makeArray(n - 1);
};
console.log(makeArray(10));