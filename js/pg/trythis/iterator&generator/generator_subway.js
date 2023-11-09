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

class Subway {
  #currIdx;
  #end;
  #isEnd = false;
  constructor(start, end) {
    this.#currIdx = LINE2.indexOf(start);
    this.#end = end;
  }

  //   [Symbol.iterator]() {
  //     return {
  //       next: () => {
  //         if (this.#isEnd) return { done: true };

  //         if (this.#currIdx === LINE2.length) this.#currIdx = 0;
  //         const value = LINE2[this.#currIdx++];
  //         this.#isEnd = value === this.#end;

  //         return { value, done: false };
  //       },
  //     };
  //   }
  *[Symbol.iterator]() {
    // yield에서 멈추니까 yield를 반복문 안에 넣어야함....
    // length === 20인 경우 if 1-> 10 걍 하고 if 18-> 2인 경우 인덱스 0으로 바꾸는게 필요
    while (true) {
      if (this.#isEnd) {
        yield { done: true };
        break;
      }

      if (this.#currIdx === LINE2.length) this.#currIdx = 0;
      const value = LINE2[this.#currIdx++];
      this.#isEnd = value === this.#end;

      yield { value, done: false };
    }
  }
}

// const routes = new Subway('문래', '신림');
// const routes = new Subway('문래', '을지로입구');
// const routes = new Subway('구로디지털단지', '성수'); // 32
// const routes = new Subway('문래', '합정'); // 46
const routes = new Subway("신도림", "을지로입구"); // 48
const it1 = routes[Symbol.iterator]();
// console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
// console.log(it1.next()); // { value: '문래', done: false }
// console.log(it1.next()); // { value: '신림', done: false }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
// console.log(it1.next()); // { value: undefined, done: true }
let cnt = 0;
for (const s of routes) {
  console.log("curr station is", s, ++cnt);
}
