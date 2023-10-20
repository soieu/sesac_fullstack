const obj = { id: 1, name: "Hong" };
console.log(obj.toString);
Object.getPrototypeOf(obj) === Object.prototype;
class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  constructor(name) {
    this.name = name || super.name;
  }
}
const dog = new Animal("Dog");
console.log("ok=", Object.keys(obj));
console.log("ak=", Object.keys(dog));
for (let k in dog) console.log("k=", k);
console.log("oh=", obj.hasOwnProperty("id")); // `'id' in obj`와 동일
console.log("dh=", dog.hasOwnProperty("id"));
