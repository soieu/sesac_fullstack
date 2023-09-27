Array.prototype.firstObject = function () {
  return this[0];
};

const arr = [1, 2, 3];
const fo = arr.firstObject();
console.log(fo);

class Ax extends Array {}

const arr2 = new Ax();
