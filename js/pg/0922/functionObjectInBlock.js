function run(cb) {
  console.log(cb.name, "-->", cb());
}

let x = 100;
function Gee() {
  return x;
}

const arr = [];
function f2() {
  function Bee() {
    console.log("f2 - bee");
    return x;
  }
  for (let i = 0; i < 3; i += 1) {
    const x = i + 1;
    function Bee() {
      console.log("f2 - for - bee"); // function 레벨로 호이스팅 되지만, outenv는 for 내의 record를 가리킴
      return x;
    }
    arr.push(Bee);
    run(Gee);
    run(Bee);
  }
  // for 문 안(블록 안)의 Bee(함수)는 for문이 실행 될 때마다 function object가 새롭게 생기며 실행된다는것을 알 수 있음!!
  console.log(
    "--------\n",
    arr,
    "\narr[0] === arr[1] : ",
    arr[0] === arr[1],
    "\narr[2] === Bee : ",
    arr[2] === Bee,
    "\n-------------"
  );
}

f2();
