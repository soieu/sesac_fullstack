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
  dog: lucy,
};

// ====================== deepCopy ====================
// deepCopy equal fail!
function deepCopy1(obj) {
  let newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }
  return newObj;
}

// pass2: 다르지 않아요!
function deepCopy2(obj) {
  return { ...obj };
}
// pass2: 다르지 않아요!
function deepCopy3(obj) {
  newObj = {};
  Reflect.ownKeys(obj);
  const descriptors1 = Object.getOwnPropertyDescriptors(obj);

  for (let key of Reflect.ownKeys(obj)) {
    newObj[key] = descriptors1[key].value;
  }
  return newObj;
}
// mdn shallow copy - pass2: 다르지 않아요!
function deepCopy4(obj) {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}

//Not Valid Deep Copy!
function deepCopy5(obj) {
  return obj;
}

// 수업시간 답지
function answerSC1(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive 또는 function이면 그냥 리턴
  }
  // console.log(obj[yy].toString());
  const copiedObj = new obj.constructor();
  for (const k of Reflect.ownKeys(obj)) {
    copiedObj[k] = answerSC1(obj[k]);
  }
  return copiedObj;
}

// ====================== testcode ====================
const newKim = answerSC1(kim);
console.log(newKim);
assert.deepStrictEqual(newKim, kim, "deepCopy equal fail!");

newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim, "Not Valid Deep Copy!");

newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
console.log(
  "Pass1?",
  kim.arr[0] !== newKim.arr[0] && kim.arr[3].aid !== newKim.arr[3].aid
);
assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1], "pass2: 다르지 않아요!");
assert.notStrictEqual(
  kim.oo.addr.city,
  newKim.oo.addr.city,
  "Not Pass3: city가 다르지 않아요!"
);
