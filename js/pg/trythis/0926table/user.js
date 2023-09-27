const users = [
  { id: 1, name: "홍길동", tel: "01088889991", addr: "서울" },
  { id: 2, name: "김길동", tel: "01088889992", addr: "부산" },
  { id: 3, name: "이길동", tel: "01088889993", addr: "서울" },
  { id: 4, name: "박길동", tel: "01088889994", addr: "서울" },
];

// create element
const ctable = document.createElement("table");

// set Attributes on Element
ctable.style.border = "1px solid black";

// add element to DOM
const $body = document.body;
$body.appendChild(ctable);
const $table = $body.lastChild;

console.log(Object.keys(users[0]));
// th 만들고
// of랑 in의 차이점이 뭘까??
// object.keys()도 뭘까??
for (const key of Object.keys(users[0])) {
  const cth = document.createElement("th");
  cth.textContent = key;
  cth.style.border = "1px solid black";
  $table.appendChild(cth);
}
// tr - td 만들기
for (const user of users) {
  const ctr = document.createElement("tr");
  e;
  const $tr = $table.appendChild(ctr);
  for (value of Object.values(user)) {
    const ctd = document.createElement("td");
    ctd.textContent = value;
    ctd.style.border = "1px solid black";
    $tr.appendChild(ctd);
  }
}
console.log($body);
