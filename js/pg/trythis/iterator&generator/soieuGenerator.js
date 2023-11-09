// 제너레이터 함수 => 제너레이터 객체 생성
// 제너레이터 객체는 iteration, iterator 만족
function* generator() {
  // [rv] = yield [expression];
  // yield는 generator 함수의 실행을 일시적으로 정지시키는 역할. return과 비슷..?
  yield 1;
  yield 2;
  yield 3;
}

// 제너레이터 함수를 통해 제너레이터 인스턴스 생성
// gen === generator[Symbol.iterator]();
const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

/* generator 구성 요소
Generator.prototype.next()
Generator.prototype.return()
Generator.prototype.throw()
*/
