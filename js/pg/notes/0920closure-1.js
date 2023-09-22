// for loop
function f() {
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 1000);
  }
}

f();

function f2() {
  for (var i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 1000);
  }
}

f2();
