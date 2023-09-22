let tot = 0;
for (let i = 1; i <= 100; i += 1) {
  tot += i;
}
const sum1 = (n) => {
  if (n === 1) return 1; // 1
  return n + sum1(n - 1); // 2, 3
};

const sum2 = (n, acc = 0) => {
  if (n === 0) return acc;
  return sum2(n - 1, acc + n);
};

console.log(tot);
const sum1R = sum1(100);
console.log(sum1R);
const sum2R = sum2(100);
console.log(sum2R);
