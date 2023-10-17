const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

f2(Math.max)(1, 3, 2, 5, 4);
