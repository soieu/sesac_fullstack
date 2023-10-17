const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

console.table(user);
console.log(JSON.stringify(user, null, 2));

const keys = Object.keys(user);
console.log("keys: " + keys);

const values = Object.values(user);
console.log("values: " + values);

// symbol까지 출력
console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);

// symbol까지 나오는 entries
function entriesWithSymbol(obj) {
  if (!obj || typeof obj !== "object") return [];
  const rets = [];
  for (const k of Reflect.ownKeys(obj)) {
    rets.push([k, obj[k]]);
  }
  return rets;
}

console.log("user entries=", Object.entries(user));

console.log("entriesWithSymbol: ", entriesWithSymbol(user));

console.log(Object.getOwnPropertyDescriptor(user, "id")); // value, writable, enumerable, configurable
console.log(Object.getOwnPropertyDescriptors(user));

// ===================fromEntries : 배열 -> Object ===============================
const park = Object.fromEntries([
  ["id", 7],
  ["nm", "Park"],
]);

const arr = ["a", "b", "c"];
const arrEntries = arr.map(function (a, i) {
  return [i, a];
});

console.log(arrEntries);
console.log(Object.fromEntries(arrEntries));

// =================== assign =============================================================
// Object.create는 prototype에!!
// u1.addr2 = { city: "seoul" }; // 얘는 주소 변경된다
// u1.addr2.city = "seoul"; // 얘는 주소 동일하고
const u1 = Object.assign({}, user); // 첫 인자인 {}에 user 갖다 넣기
const u2 = { ...user };
const u3 = new Object(user);
const u4 = Object.create(user); // object가 아니라 prototype으로
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });
console.log("u1=", u1);
console.log("u2=", u2);
console.log("u3=", u3);
console.log("u4=", u4);
//Object.getPrototypeOf(u4), u4.__proto__ 둘 다 동일함. 후자는 js 개발자 전용느낌?
console.log("u4.proto=", Object.getPrototypeOf(u4), u4.__proto__);
