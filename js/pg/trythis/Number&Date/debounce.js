/*
0.1초에 한번씩 rand를 총 20회 호출하였을 때, 다음의 각 상황에서 총 몇 번 호출되는지 증명하시오.
단순 호출 시  ⇒ 총 20회 실행!
1초 Debounce 호출 시   ⇒ 1회
1초 Throttle 호출 시   ⇒ 총 2초 동안 ⇒ 2회 실행!(1초에 한번씩)
*/
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    // 이미 실행되고 시간이 다 지나지 않아 timer가 존재하면 초기화
    if (timer) clearTimeout(timer);
    // 실행 안되었으면 셋
    timer = setTimeout(callback, delay, ...args);
  };
};
const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

let cnt = 0;
const intl = setInterval(() => {
  console.log(rand(1, 10));
  if (++cnt >= 20) {
    clearInterval(intl);
  }
});
