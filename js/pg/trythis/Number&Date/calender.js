/*
특정 날짜를 받으면 해당 월의 달력을 출력하시오.
일  월  화  수  목  금  토 
—
    1  2   3  4  5   6
7   8  9  10 11  12  13
…
*/

const WEEKS = "일월화수목금토";
const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const today = new Date();
function calender(today) {
  const Year = today.getFullYear();
  const Month = today.getMonth();
  const day_length = month_days[Month];
  const day_one_weekday = new Date(Year, Month, 1).getDay();
  let output = "";

  for (let i = 1; i <= day_length; i++) {
    if (i % 7 === 0) {
      output += "\n";
    }
    output += i + "\t";
  }
  console.log(output);
}

calender(today);
