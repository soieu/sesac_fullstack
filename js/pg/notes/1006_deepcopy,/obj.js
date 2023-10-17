var s1 = "abc"; // 'abc'. primitive
var s2 = Object("abc"); //[String: 'abc']
var s3 = String("abc"); // 'abc'
s4 = new String("abc");
s5 = new s4.constructor();
sy1 = Symbol("abc"); // primitive
sy2 = Object(sy1); //object
sy2.valucOf();
sy1.constructor;
// sy1은 primitive인에 왜 constructor가 있지? => 암묵적 형변환

// Symbol인지 확인
// obj.constructor.name ="Symbol"

console.log(s1 === s2); // false
console.log(s1 === s3); // true

console.log(s2 instanceof String); // true
console.log(s3 instanceof String); // false
