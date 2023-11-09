const assert = require("assert");
// 문자열에 한글이 있는지 체크하는 hasHangul(str) 함수를 작성하시오.
const HANGUL = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const hasHangul = (str) => HANGUL.test(str);

assert.deepStrictEqual(hasHangul("강원도"), true);
assert.deepStrictEqual(hasHangul("ㄱㄴㄷ"), true);
assert.deepStrictEqual(hasHangul("ㅜㅜㅠㅠ"), true);
assert.deepStrictEqual(hasHangul("케잌뷐"), true);
assert.deepStrictEqual(hasHangul("12345"), false);
assert.deepStrictEqual(hasHangul("IC"), false);

// 문자열이 모두 한글인지 체크하는 isHangul(str) 함수를 작성하시오.
const NOTHANGUL = /[^ㄱ-ㅎㅏ-ㅣ가-힣]/;
const isHangul = (str) => !NOTHANGUL.test(str);
assert.deepStrictEqual(isHangul("강원도"), true);
assert.deepStrictEqual(isHangul("ㄱㄴㄷ"), true);
assert.deepStrictEqual(isHangul("ㅜㅜㅠㅠ"), true);
assert.deepStrictEqual(isHangul("케잌뷐"), true);
assert.deepStrictEqual(isHangul("12한글345"), false);
assert.deepStrictEqual(isHangul("아산IC"), false);
