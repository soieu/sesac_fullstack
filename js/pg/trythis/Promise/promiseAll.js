assert = require("assert");
const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    if (!promises?.length) return Promise.reject("Input Promises!!");
    const results = [];
    let leftRunCnt = promises?.length;
    for (let i = 0; i < promises.length; i += 1) {
      // 순서 보장위해 인덱스 사용
      promises[i].then((res) => {
        results[i] = res;
        leftRunCnt -= 1;
        if (leftRunCnt === 0) resolve(results);
      });
    }
  });
const vals = [1, 2, 3];
console.time("ppp");
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    console.timeEnd("ppp");
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

// promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
//   .then((array) => {
//     console.log("여긴 과연 호출될까?!");
//   })
//   .catch((error) => {
//     console.log("reject!!!!!!>>", error);
//   });
