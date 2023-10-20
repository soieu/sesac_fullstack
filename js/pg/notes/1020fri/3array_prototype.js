const assert = require("assert");
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const choi = { id: 4, name: "Choi" };

const users = [hong, kim, lee];

const arr = [1, 2, 3, 4, 5];

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]); // this는 Array
};

Array.prototype.filterBy = function (prop, value) {
  return this.filter((a) => a[prop] === value); // this는 Array
};
Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value); // this는 Array
};

Object.defineProperties(Array.prototype, {
  firstObject: {
    get: function () {
      return this[0];
    },
    set: function (value) {
      this[0] = value;
    },
  },
  lastObject: {
    get: function () {
      return this[this.length - 1];
    },
    set: function (value) {
      this[this.length - 1] = value;
    },
  },
});
// console.log(dog.upperName);

// Array.defineProperties(Array.prototype, {
//   upperName: {
//     get: function () {
//       return this.name.toUpperCase();
//     },
//   },
//   mapBy: {},
// });
// console.log(dog.upperName);

// arr.firstObject; // 1
// arr.lastObject; // 5

assert.deepStrictEqual(users.mapBy("id"), [1, 2, 3]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Kim", "Lee"]);
assert.deepStrictEqual(users.filterBy("id", 2), [{ id: 2, name: "Kim" }]);
assert.deepStrictEqual(users.findBy("name", "Kim"), { id: 2, name: "Kim" });
assert.deepStrictEqual(users.firstObject, { id: 1, name: "Hong" });
assert.deepStrictEqual(users.lastObject, { id: 3, name: "Lee" });

users.firstObject = choi;
console.log(users);
