let mc = 0;

function memoised(fn) {
  const memoisedTable = {};
  return function (k) {
    console.log(k, " -> ", memoisedTable);
    return memoisedTable[k] || (memoisedTable[k] = fn(k));
  };
}

const fibonacci = memoised(function (n) {
  if (n <= 1) return n;
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
console.log(fibonacci(1000));

// 배열로 리턴 정답
function fiboArr() {
  const arr = [0, 1];

  return function (n) {
    if (arr.length <= n) {
      for (let i = arr.length; i <= n; i++) arr[i] = arr[i - 2] + arr[i - 1];
    }
    const rets = [];
    for (let i = 0; i <= n; i += 1) rets[i] = arr[i];
    return rets;
  };
}
const fonaccix = fiboArr();
console.log(fonaccix(3));
console.log(fonaccix(5));

//TCO로 어케짜냐?
const fibonacciTCO = memoised(function (n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
