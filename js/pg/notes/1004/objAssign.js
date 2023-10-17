const user = { id: 1, name: "Hong" };
// Object.create는 prototype에!!
const u1 = Object.assign({}, user);
const u2 = { ...user };
const u3 = new Object(user);
const u4 = Object.create(user); // prototype에다가 심는거??
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });
console.log("u1=", u1);
console.log("u2=", u2);
console.log("u3=", u3);
console.log("u4=", u4);
console.log("u4.proto=", Object.getPrototypeOf(u4));
