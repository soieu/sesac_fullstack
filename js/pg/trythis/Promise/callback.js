// 다음 코드를 Promise를 이용하여 refactoring 하시오.
// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

// const promiseFn = (sec) =>
//   new Promise((resolve, reject) => {
//     resolve(
//       setTimeout(() => {
//         console.log("depth" + sec / 1000, new Date());
//       }, sec)
//     );
//   });

// promiseFn(1000)
//   .then(() => promiseFn(2000))
//   .then(() => promiseFn(3000))
//   .catch((err) => console.log("Error!!>>", err));

// // depth 처리도 뭔가 이상하고
// // depth =3일 때 실행되고 error뜨게 하는거 안됨

// const depthTimer = (depth) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("depth" + depth, new Date());
//       if (depth >= 3) return reject(new Error("Already 3-depth"));
//       else resolve(depth + 1);
//     }, 1000 * depth);
//   });
// depthTimer(1)
//   .then(depthTimer) // resolve의 인자를 받아와서 console.log로 출력된다 !!!!!!
//   .then(depthTimer)
//   .then(console.log) // resolve의 인자를 받아와서 console.log로 출력된다 !!!!!!
//   .catch((err) => console.error(err));
