// 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.
const assert = require("assert");
s = [
  "강원도 고성군",
  "고성군 토성면",
  "토성면 북면",
  "북면",
  "김1수",
  "고성ㄱ",
];

const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";

const searchByKoreanInitialSound = (data, firstSounds) => {
  const r = [...firstSounds].map((a) => {
    const idx = ㄱㄴㄷ.indexOf(a);
    if (idx === -1) return a;
    const S = 가나다.at(idx);
    const E = 가나다.at(idx + 1).charCodeAt(0) - 1;
    return `[${a}${S}-${String.fromCharCode(E)}]`;
  });

  console.log("rrr>>", r.join(""));
  const regex = new RegExp(r.join(""));
  return data.filter((d) => regex.test(d));
};
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
  "강원도 고성군",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
  "강원도 고성군",
  "고성군 토성면",
  "고성ㄱ",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
  "고성군 토성면",
  "토성면 북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
  "토성면 북면",
  "북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
