const $spanA = document.getElementById("spanA");
console.log("Ddddd", spanA);

const $divs = document.getElementsByTagName("div");
console.log("Ddddd", $divs);

const $div = $divs[0];
console.log("Ddddd", $div);

const cnodes = document.children;
console.log("Ddddd", cnodes);
// HTMLCollection
// NodeList
// Node

const fc = $div.firstChild;
console.log("Ddddd", fc); // 얘는 공백있어서 \n이 들어감 !!
const fec = $div.firstElementChild;
console.log("Ddddd", fec);

console.log(fec.firstChild); // 얘는 바로 span 들어감 !!

const a = document.querySelector("#spanA");
console.log(a);

const b1 = document.querySelector("div p");
console.log(b1);
const b2 = document.querySelectorAll("div p");
console.log(b2);

$div.style.backgroundColor = "red";
