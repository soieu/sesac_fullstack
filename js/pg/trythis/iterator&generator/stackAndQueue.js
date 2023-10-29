// 이전 챕터에서 작성한 Stack과 Queue 클래스를 iterator로 작성하시오. (iterable한 클래스로 작성)
const assert = require("assert");
class Stack {
  #arr; // 외부에서 접근 불가!
  constructor(...args) {
    this.#arr = args;
  }
  push(value) {
    this.#arr.push(value);
  }
  pop() {
    return this.#arr.pop();
  }
  toArray() {
    return this.#arr;
  }
  [Symbol.iterator]() {
    let idx = 0;

    return {
      next: () => {
        idx++;
        return { value: this.#arr[idx++], done: idx > this.#arr.length };
      },
    };
  }
}

class Queue {
  #arr;
  constructor(args = []) {
    this.#arr = args;
  }
  enqueue(value) {
    this.#arr.push(value);
  }
  dequeue() {
    return this.#arr.unshift();
  }
  toArray() {
    return this.#arr;
  }
  [Symbol.iterator]() {
    let idx = 0;
    const max = this.#arr.length;

    return {
      next: () => {
        return { value: this.#arr[idx++], done: !(idx <= max - 1) };
      },
    };
  }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
stack.push(4); // 추가하기

console.log([...stack]); // Bad
for (const s of stack) console.log(s);
// for (const q of queue) console.log(q);
const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
// const itQueue = queue.iterator();
// console.log(itQueue.next());

// Stack and Queue
