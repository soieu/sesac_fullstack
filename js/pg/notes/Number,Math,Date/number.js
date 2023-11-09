console.log(new Number(), "vs", Number());

s = "123";

// 문자열을 숫자로 바꾸는 세가지 방법
Number(s);
console.log(+s);
console.log(~~s);

console.log(BigInt("123456789012345678901234567890"));
