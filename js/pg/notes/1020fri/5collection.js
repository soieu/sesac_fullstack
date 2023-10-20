// Stack and Queue

const assert = require("assert");
//=====================Stack=====================
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
}
const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
assert.deepStrictEqual(stack.toArray(), []);

//=====================Queue=====================
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
}

const queue = new Queue();
queue.enqueue(3); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
