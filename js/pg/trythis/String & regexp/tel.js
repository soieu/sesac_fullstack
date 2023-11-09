// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
const assert = require("assert");

const telfmt = (tel) => {
  const len = tel?.length ?? 0;
  if (len < 7) return tel;

  if (len <= 8) return `${tel.substring(0, 4)} - ${tel.substring(4)}`;
  const c = 4;
  const a = tel.startsWith("02") ? 2 : 3;
  const b = tel.length - a - c;

  const regex = new RegExp(`(\\d${a})(\\d${b})(\\d${c})`);
  console.log(tel.replace(regex, "$1-$2-$3"));
  return tel.replace(regex, "$1-$2-$3");
};

telfmt("0101234567");
// assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
// assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
// assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
// assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
// assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
// assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
// assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
