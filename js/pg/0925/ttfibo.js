let mc = 0;

function memoised(fn) {
  const memoisedTable = {};
  return function (k) {
    console.log(k, " -> ", memoisedTable);
    return memoisedTable[k] || (memoisedTable[k] = fn(k));
  };
}

const fibonacci = memoised(function (n) {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(3));
console.log("================================");
console.log(fibonacci(4));
console.log("================================");
console.log(fibonacci(5));
console.log("================================");
console.log(fibonacci(6));
console.log("================================");
console.log(fibonacci(7));

console.log("================================");
console.log(fibonacci(8));
console.log("================================");
console.log(fibonacci(9));
console.log("================================");
console.log(fibonacci(10));
