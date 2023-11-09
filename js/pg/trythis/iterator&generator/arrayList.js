// Collection 클래스를 상속받아 List 메소드들과 클래스 메소드 arrayToList, listToArray를 보유한 ArrayList 클래스를 구현하시오.
// ArrayList.listToArray({ value: 1, rest: { value: 2 } }) //⇒ [1,2]

const assert = require("assert");
class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
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
    this.#arr.length = 0;
  }

  remove() {
    this.#arr.pop();
  }

  get peek() {
    return this.#arr.at(-1);
  }

  get poll() {
    if (this.#isQueue()) {
      return this.dequeue();
      // } else if (this.pop) {
      //   return this.pop();
    } else {
      return this.#arr.pop();
    }
  }

  get isEmpty() {
    return !this.length;
  }
  get length() {
    return this.#arr?.length ?? 0;
  }

  toList() {
    return Collection.arrayToList(this.#arr);
  }

  // 아무것도 안오는 경우 오류 방지용 인자
  // [1,2] => {value : 1, rest : {value : 2, rest: undefined} }
  static arrayToList(arr = []) {
    let node;
    for (let i = arr.length - 1; i > 0; i--) {
      node = { value: arr[i], rest: node };
    }
    return node;
  }

  static listToArray(lst) {
    const arr = [];
    let node = lst;
    while (true) {
      if (!node) return arr;
      arr.push(node.value);
      node = node.rest;
    }
  }

  print(flag) {
    // console.table(this.#arr);
    // console.log(JSON.stringify(this.#arr, null, 2));
    console.log(
      `${flag ?? this.constructor.name}=${JSON.stringify(this.#arr)}`
    );
  }

  #isQueue() {
    return this.constructor.name === "Queue";
  }

  [Symbol.iterator]() {
    return this.#arr.values();
  }
}

class ArrayList extends Collection {
  get(idx) {
    return this._arr[idx];
  }
  set(val, idx) {
    this._arr[idx] = val;
  }
  add(val, idx) {
    this._arr.splice(idx ?? this.length, 0, val);
  }
  print() {
    console.log(this.toList());
  }
}

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);
alist.size; // 22, 4
// alist.indexOf(300); // 1
// alist.contains(300);
// alist.contains(301); // true, false
// alist.isEmpty;
// alist.peek; // false, 3
// alist.toArray(); // [1, 300, 22, 3]
// alist.iterator().next(); // { value: 1, done: false }
// alist.clear(); // all clear
