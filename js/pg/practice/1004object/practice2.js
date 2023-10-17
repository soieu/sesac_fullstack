const oriArr = [];
oriArr.push(["A", 10, 20]);
oriArr.push(["B", 30, 40]);
oriArr.push(["C", 50, 60, 70]);

// arr -> obj
const obj = {};
for (content of oriArr) {
  const key = content[0];
  const putArray = [];
  for (let i = 1; i < content.length; i++) {
    const value = content[i];
    putArray[i - 1] = value;
  }
  obj[key] = putArray;
}
console.log(obj);

// obj -> arr
const arr = [];
for (content in obj) {
  const putArray = [];
  putArray.push(content);
  putArray.push(...obj[content]);
  arr.push(putArray);
}
console.log(arr);
