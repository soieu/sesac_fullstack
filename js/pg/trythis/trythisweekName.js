const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const today = new Date();
const weekNum = today.getDay(); // 요일번호

console.log(today);
console.log("오늘은 " + week[weekNum] + "입니다.");
