// 공통: clear(), toArray(), print(), remove(), isEmtpy, peek, poll, length
// peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
class Collection {
  #arr; // 외부에서 접근 불가! 자식들에게만 상송
  constructor(...args) {
    this.#arr = args;
  }
  toArray() {
    return this.#arr;
  }

  get _arr() {
    return this.#arr;
  }
  set _arr(values) {
    return (this.#arr = values);
  }
  clear() {
    this.#arr = [];
  }
}
class Stack extends Collection {
  constructor(...args) {
    super(args);
  }
  push(value) {
    this._arr.push(value);
  }
  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  constructor(...args) {
    super(args);
  }
  enqueue(value) {
    this._arr.push(value);
  }
  dequeue() {
    return this._arr.unshift();
  }
}

// ex1) Stack
const stack = new Stack(); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
// ex2) Queue
const queue = new Queue();
queue.enqueue(3); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log(stack.peek, queue.peek); // 마지막(다음에 나올) 원소
queue.print(); // 출력해보기
const arr = queue.toArray().map((a) => console.log(a));
if (!stack.isEmpty) stack.clear();
if (queue.length) queue.clear();
