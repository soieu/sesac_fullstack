const _ = require("lodash");
const obj = {
  id: 1,
  name: "Hong",
  addr: { city: "Seoul" },
  f: function (a, b) {
    return a + b;
  },
};
const newObj = _.cloneDeep(obj);
obj.addr.city = "Pusan";

console.log(obj);
console.log(newObj);
