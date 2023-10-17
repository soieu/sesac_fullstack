const weeks = ["일", "월", "화", "수", "목", "금", "토"];
// const getNextWeek = (widx) => {
//   if (widx >= weeks.length) widx = 0;
//   return `${weeks[widx]}요일`;
// };

// let cnt = 0;
// let widx = 0;

// const intl = setInterval(() => {
//   // widx += 2; // side-effect!
//   widx += 1;
//   console.log("call", cnt, getNextWeek(widx));
//   if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);

// pureFunction : 부수효과 X -> 외부의 변수 이용 xx
// closure & IIFE
// const getNextWeek = (() => {
//   let widx = -1;
//   return function () {
//     widx += 1; // side-effect!
//     if (widx >= weeks.length) widx = 0;
//     return `${weeks[widx]}요일`;
//   };
// })();

// const getNW = getNextWeek();
// let cnt = 0;
// const intl = setInterval(() => {
//   // widx += 2; // side-effect!
//   console.log("call", cnt, getNextWeek());
//   if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);

//closure
const getNextWeek = () => {
  let widx = -1;
  return function () {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
};

const getNW = getNextWeek();
let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cnt, getNW());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
