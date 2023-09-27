function f1(id, name) {
  console.log("f1>>", id, name);
}

function f2(user) {
  console.log("f2>>", user.id, user.name);
}
function f3({ id, name }) {
  console.log("f3>>", id, name);
}
function f4() {
  const { id, name } = arguments[0] || {};
  console.log("f4>>", id, name);
}
function f6(...args) {
  if (!args.length) return;
  const [{ id, name }] = args;
  console.log("f6>>", id, name);
}

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

f1(hong.id, hong.name);
f2(hong);
f3(hong);
f4(hong);
f6(hong);
