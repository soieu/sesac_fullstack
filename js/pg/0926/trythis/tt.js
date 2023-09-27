// const $spanX = document.getElementById("spanX");
// while ($spanX.offsetWidth <= 500) {
//   const X = document.createTextNode("X");
//   $spanX.appendChild(X);
// }

// X의 길이를 미리 구하고
// const $spanX = document.getElementById("spanX");
// console.log("111", $spanX.offsetWidth);
// $spanX.textContent = "XXXXX";
// const width = $spanX.offsetWidth;
// $spanX.textContent = "X".repeat(500 / (width / 5));

//fun
function f2() {
  const $tmp = $spanX.cloneNode();
  while ($tmp.offsetWidth < 500) {
    $tmp.textContent += "X";
  }
  $spanX.parentNode.replaceChild($tmp, $spanX);
}
// virtual DOM
