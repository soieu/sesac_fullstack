class Stack {
  constructor() {
    this.arr = [];
  }
  push(arg) {
    this.arr.push(arg);
  }
  pop() {
    return this.arr.pop();
  }
  print() {
    console.log(this.arr);
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(arg) {
    this.arr.push(arg);
  }
  print() {
    console.log(this.arr);
  }
  dequeue() {
    return this.arr.shift();
  }
}
const stack1 = new Stack(); // or new Stack([1,2]); // (1,2)
stack1.push(3); // 추가하기
stack1.push(4); // 추가하기
stack1.print();
console.log(stack1.pop()); // 마지막에 추가된 하나 꺼내기
stack1.print();

const queue1 = new Queue();
queue1.enqueue(3); // 추가하기
queue1.enqueue(4); // 추가하기
queue1.print();
console.log(queue1.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue1.print();
