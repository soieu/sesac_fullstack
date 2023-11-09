const m = new Map();

m.set(1, "10");
m.set(2, "20");
m.set(1, "100");

console.log("m : ", m, m.get(2));
