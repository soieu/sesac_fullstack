const assert = require("assert");

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const lucy = new Dog("Lucy");

const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  zs: new Set([arr, oo]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[1, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;
  const value = obj.valueOf();
  if (obj.constructor.name === "Symbol") return Object(value);
  const copiedObj = new obj.constructor(typeof value !== "object" ? value : []);
  for (const k of Reflect.ownKeys(obj)) {
    copiedObj[k] = deepCopy(obj[k]);
  }
  return copiedObj;
};

const newKim = deepCopy(kim);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  "Not Pass3: city가 다르지 않아요!"
);
