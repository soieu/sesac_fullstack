// "use strict";
y = 1;
console.log("y : ", y);

NaN = 1;
Infinity = 0;
console.log(isNaN(Infinity, Infinity, NaN));

function f() {
  "use strict";
  z = 0;
  console.log("outer -f z : ", z);
}

{
  function f() {
    console.log("block -f");
  }
}
f();

z = 9;
