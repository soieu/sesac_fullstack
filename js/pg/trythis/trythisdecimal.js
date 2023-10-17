for (let i = 0.1; i < 0.9; i = i + 0.1) {
  console.log(i.toFixed(1));
}

const a = 0.21354;
const b = 0.1;

const a1 = (a * 100000 + b * 100000) / 100000;
console.log("🚀 ~ file: trythisdecimal.js:9 ~ a1:", a1);

console.log((a + b).toFixed(5));

function addPoint(x, y) {
  const ex = x.toString().length - 2;
  const ey = y.toString().length - 2;
  const e = 10 ** (ex > ey ? ex : ey);
  return (x * e + y * e) / e;
  ㅓ;
}
console.log((0.14 + 0.28).toFixed(2));
