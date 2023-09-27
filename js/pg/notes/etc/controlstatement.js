arr = [1, 2, 3];
for (let k in arr) {
  console.log(k);
}
for (let k of arr) {
  console.log(k);
}

arr.map((a) => {
  console.log(a);
  if (a == 2) return;
});
