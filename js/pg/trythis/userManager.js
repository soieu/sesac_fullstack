//아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.

const assert = require("assert");
const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

const addUser = (user) => [...users, user];

const removeUser = (user) => users.filter((_user) => _user.id !== user.id);

const changeUser = (target, newUser) =>
  users.map((_user) => (_user.id === target.id ? newUser : _user));

assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(changeUser(kim, choi), [choi, lee, park]);
