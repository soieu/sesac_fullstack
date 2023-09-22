function outerfun(a) {
  return function innerfun(b) {
    return a + b;
  };
}

const rf = outerfun(3);
const res = rf(4);
console.log(res);
