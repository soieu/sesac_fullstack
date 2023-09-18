var v = 0;
function varF() {
  console.log("function-v first = ", v);
  var v = 1;
  {
    var v = 2,
      vv = 3;
    console.log("block-v = ", v);
  }
  console.log("function-v = ", v);
}
varF();
console.log("v = ", v);

// var는 전역 아니고 함수레벨 !
