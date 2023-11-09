// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

const d1 = new Date(1970, 1, 1);
const d2 = new Date(1970, 1, 2);
console.log((d2 - d1) / 1000);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
// const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
// const days.forEach(d => new Date)
// console.log(days);
// 내년(2024년)의 오늘(8월 30일)의 요일을 출력하시오.

// 오늘(10월 30일)로 부터 100일 후의 날짜는?
today = new Date();
today.setDate(today.getDate() + 100);
console.log(today);
