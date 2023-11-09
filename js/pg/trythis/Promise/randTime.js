// 테스트를 위한 임의의 시간(1초 미만)에 resolve를 실행하는 randTime 함수를 작성하시오.
// const randTime = (val) => {
//   return new Promise((resolve, reject) => {
//     const sec = Math.random() * 1000;

//     resolve(
//       setTimeout(() => {
//         console.log(val);
//       }, sec)
//     );
//   });
// };

// randTime(100).then(console.log("randTime>>", 100, Math.random() * 1000));

// [1, 2, 3, 4, 5].forEach((a) =>
//   randTime(a).then(console.log("randTime>>", a, Math.random() * 1000))
// );

// console.log를 어떻게 처리해야할지 모르겠음
// 그리고 뭔가 아닌거같음

const randTime = (val) =>
  new Promise((resolve) => {
    const delay = Math.random() * 1000;
    console.log("randTime>>", val, delay);
    setTimeout(() => {
      resolve(val);
    }, delay);
  });

randTime(100).then(console.log);

[1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));
