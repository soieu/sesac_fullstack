// 문자열이 한글 자음으로 끝나는지 체크하는 isEndJaum(str)을 작성하시오. https://blog.naver.com/tk2rush90/221085154547 참조
const assert = require("assert");
// function isEndJaum(str) {
//   const f = [
//     "ㄱ",
//     "ㄲ",
//     "ㄴ",
//     "ㄷ",
//     "ㄸ",
//     "ㄹ",
//     "ㅁ",
//     "ㅂ",
//     "ㅃ",
//     "ㅅ",
//     "ㅆ",
//     "ㅇ",
//     "ㅈ",
//     "ㅉ",
//     "ㅊ",
//     "ㅋ",
//     "ㅌ",
//     "ㅍ",
//     "ㅎ",
//   ];
//   const s = [
//     "ㅏ",
//     "ㅐ",
//     "ㅑ",
//     "ㅒ",
//     "ㅓ",
//     "ㅔ",
//     "ㅕ",
//     "ㅖ",
//     "ㅗ",
//     "ㅘ",
//     "ㅙ",
//     "ㅚ",
//     "ㅛ",
//     "ㅜ",
//     "ㅝ",
//     "ㅞ",
//     "ㅟ",
//     "ㅠ",
//     "ㅡ",
//     "ㅢ",
//     "ㅣ",
//   ];
//   const t = [
//     "",
//     "ㄱ",
//     "ㄲ",
//     "ㄳ",
//     "ㄴ",
//     "ㄵ",
//     "ㄶ",
//     "ㄷ",
//     "ㄹ",
//     "ㄺ",
//     "ㄻ",
//     "ㄼ",
//     "ㄽ",
//     "ㄾ",
//     "ㄿ",
//     "ㅀ",
//     "ㅁ",
//     "ㅂ",
//     "ㅄ",
//     "ㅅ",
//     "ㅆ",
//     "ㅇ",
//     "ㅈ",
//     "ㅊ",
//     "ㅋ",
//     "ㅌ",
//     "ㅍ",
//     "ㅎ",
//   ];

//   kor = str.substring(str.length - 1);

//   const ga = 44032;
//   let uni = kor.charCodeAt(0);

//   uni = uni - ga;

//   let fn = parseInt(uni / 588);
//   let sn = parseInt((uni - fn * 588) / 28);
//   let tn = parseInt(uni % 28);

//   return tn !== 0 ? true : false;
// }
// 수업
// const ALPHANUM_JAUMS = [
//   108, 76, 109, 77, 110, 78, 114, 82, 49, 51, 54, 55, 56, 48,
// ];

// function isEndJaum(str) {
//   const s = str.charCodeAt(str.length - 1);
//   return (
//     ALPHANUM_JAUMS.includes(s) ||
//     (s >= "ㄱ" && s <= "ㅎ") ||
//     (s - "가") % 28 > 0
//   );
// }
// assert.deepStrictEqual(isEndJaum("아지오"), false);
// assert.deepStrictEqual(isEndJaum("북한강"), true);
// assert.deepStrictEqual(isEndJaum("뷁"), true);
// assert.deepStrictEqual(isEndJaum("강원도"), false);
// assert.deepStrictEqual(isEndJaum("바라당"), true);
// assert.deepStrictEqual(isEndJaum("ㅜㅜ"), false); // 여기서 문제
// assert.deepStrictEqual(isEndJaum("케잌"), true);
// assert.deepStrictEqual(isEndJaum("점수 A"), false);
// assert.deepStrictEqual(isEndJaum("24"), false);
// assert.deepStrictEqual(isEndJaum("23"), true);

// 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
// `고성군${iga('고성군')}`;   // 고성군이  cf. `강원도${iga('강원도')}` ⇒ 강원도가
// `고성군${eunun('고성군')}`; // 고성군은  cf. `강원도${eunun('강원도')}` ⇒ 강원도는
// `고성군${eulul('고성군')}`; // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도를
// (추가) ~이어야/여야, ~이랑/랑

// const josa = (str, ja_mo) => {
//   isEndJaum(str) ?
// }
