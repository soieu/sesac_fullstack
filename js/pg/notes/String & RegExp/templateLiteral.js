function f(txts, a, b, c) {
  console.log("txts>>", txts);
  console.log("a>>", a);
  console.log("b>>", b);
  console.log("c>>", c);
}

const holiday = "한글날";
const month = 10,
  day = 9;
`${holiday}은 ${month}월 ${day}일입니다.`; // 한글날은 10월 9일입니다.
f`${holiday}은 ${month}월 ${day}일입니다.`;
