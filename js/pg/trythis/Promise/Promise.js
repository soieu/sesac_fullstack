// //나만의 Promise 함수를 작성하시오.
// class
// class Promise {
//   construct(cb) {
//     cb(
//   (succ) => {
//     console.log("RESOLVE", succ);
//     this.state = "fulfill";
//     this.thenFn(succ);
//   },
//   (err) => {
//     console.log("REJECT", err);
//     this.state = "rejected";
//     this.thenFn(err);
//   }
// );
//     this.state = "pending";

//     Object.defineProperties(this, {
//       thenFn: {
//         enumerable: false,
//         writable: true,
//       },
//       catchFn: {
//         enumerable: false,
//         writable: true,
//       },
//     });
//   }

//   then(fn) {
//     this.thenFn = fn;
//     return this;
//   }

//   catch(fn) {
//     this.catchFn = fn;
//     return this;
//   }
// }

//function
function Promise(cb) {
  let thenFn = new Function();
  let catchFn = new Function();
  this.state = "pending";

  Promise.prototype.then = (fn) => {
    thenFn = fn;
    return this;
  };

  Promise.prototype.catch = (fn) => {
    catchFn = fn;
    return this;
  };

  cb(
    (succ) => {
      console.log("RESOLVE", succ);
      this.state = "fulfill";
      thenFn(succ);
    },
    (err) => {
      // console.log('REJECT', err);
      catchFn(err);
      this.state = "reject";
    }
  );
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(now);
    else reject(new Error("어디로?"));
  }, 1000);
});

p.then((res) => {
  console.log("p.then.res11>>>", res);
  return randTime(1);
})
  .then((res) => randTime(2))
  .then((res) => {
    console.log("p.then.res22>>>", res);
    return "FiNALLY";
  })
  .then(console.log("p.then.res33!!!"))
  .then((res) => res || "TTT")
  .catch((err) => console.error("err-11>>", err))
  .catch((err) => console.error("err-22>>", err))
  .finally(() => console.log("finally-11"))
  .finally(() => console.log("finally-22"));
