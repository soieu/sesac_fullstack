const LINE2 = [
  "신도림",
  "성수",
  "신설동",
  "용두",
  "신답",
  "용답",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "공항철도",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "신천",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "뚝섬",
  "한양대",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
];

// class Subway {
//   #arr = [];

//   constructor(start, end) {
//     // start보다 end가 작으면
//     let startIdx = LINE2.findIndex((value) => value === start);
//     let endIdx = LINE2.findIndex((value) => value === end);

//     if (startIdx > endIdx) {
//       // 단방향으로 배열에 넣기
//       this.#arr = LINE2.slice(startIdx).concat(LINE2.slice(0, endIdx + 1));
//     } else {
//       this.#arr = this.#arr.concat(LINE2.slice(startIdx, endIdx + 1));
//     }
//     return this.#arr;
//   }

//   //
//   [Symbol.iterator]() {
//     let idx = 0;

//     return {
//       next: () => {
//         idx++;
//         return { value: this.#arr[idx++], done: idx > this.#arr.length };
//       },
//     };
//   }
// }

class Subway {
  #currIdx;
  #end;
  #isEnd;
  constructor(start, end) {
    this.#currIdx = LINE2.indexOf(start);
    this.#end = end;
  }

  [Symbol.iterator]() {
    return {
      // 화살표함수는 부모의 this를 받기 때문에 this 쓸 수 있다!!!
      next: () => {
        if (this.#isEnd) return { done: true };

        if (this.#currIdx === LINE2.length) this.#currIdx = 0;
        const value = LINE2[this.#currIdx++];
        this.#isEnd = value === this.#end;

        return { value, done: false };
      },
    };
  }
}
// const routes = new Subway("문래", "신림");
// const it1 = routes[Symbol.iterator]();
// console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }

// const routes2 = new Subway("구로디지털단지", "성수"); // 32개 정거장
// console.log([...routes]); // ['구로디지털단지', '신대방', ..., '성수']
// const it2 = routes2[Symbol.iterator]();
// while (true) {
//   const x = it2.next();
//   console.log(x);
//   if (x.done) break;
// }
// const route3 = new Subway("문래", "합정"); // 46개 정거장이면 통과!
// const route4 = new Subway("신도림", "을지로입구"); // 48개 정거장이면 통과!

function* route() {
  const start = yield "출발 역은?"; // yield가 있으므로 caller에게 제어권 넘김. yield뒤는 그냥 메시지!

  const end = yield "도착 역은?";

  return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const caller = route();
console.log(caller.next());
console.log(caller.next("문래"));
console.log(caller.next("신림"));
console.log(caller.next());
