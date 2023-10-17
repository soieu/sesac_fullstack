function f(n) {
  if (n.hasOwnProperty("id")) n.id += 1; // 오염 !!!! 비순수함수 !!!!
  else n += 1;
}

function f2({ id }) {
  id += 1; // 복제된 값만 들고온 것 !! 실제 heap 내 값 변경되지 않음
}

let n = 10;
let nobj = { id: 10 };
f(n);
f(nobj);
console.log(n, nobj);
f2(nobj);
console.log(nobj);

// ==========overloading===========
function f(a) {
  return a + 100;
}
function f(a, b) {
  return a + b;
}
console.log(f(10), f(10, 20)); // f(a)는 안됨.....>!!!!!
