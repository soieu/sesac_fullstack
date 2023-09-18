// 암묵적 임시적? 형변환
console.log("-------------암묵적 형변환-------------");
// a = 1;
// b = ((a.b = 5), console.log("xxx>", a.b));
// console.log(a, b);

//
console.log("-------------NaN-------------");
console.log(isNaN(+"s")); // true

console.log("-------------쉼표그룹연산자-------------");
// (c = a = 1), (b = 2);
// c = ((a = 1), (b = 2)); // c = 2 . 마지막 리터럴이 c가 됨

console.log("-------------배열 swap-------------");
const arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;

console.log(c);
console.log("previous : ", a, b);
[a, b] = [b, a];
console.log("result : ", a, b);
