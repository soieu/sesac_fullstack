class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name) {
    // cf. super(...args)
    super(name); // 필수(chaining), 중복(overload) 안됨!
  }

  bark() {
    console.log("bowwow!");
  }
}
const jake = new Dog("Jake");
class Pet {
  feed(nutrient) {
    console.log(`feed to ${this.name} :`, nutrient);
  }
}

// 그냥 참조만.. 그리고 Dog에 들어가버림 ㅜ 방법 1
// jake.__proto__.feed = Pet.prototype.feed;

// 방법 2 강사님 방식
// Object.defineProperty(Pet.prototype, "feed", { enumerable: true });
// Object.assign(jake, Pet.prototype);
// Object.defineProperty(Pet.prototype, "feed", { enumerable: false });

// 방법 3
// Object.assign(jake, { feed: Pet.prototype.feed });

const petMixin = {
  likesPeople() {
    console.log(`${this.name} like you`);
  },
};
Object.assign(jake, petMixin);

// ==============test================
jake.bark(); // ?

console.log(jake.name); // super()면 Obj, super(name)이면 Jake

jake.likesPeople(); //
jake.feed("dog-food");

// 왜 안나올까????==> enumerable이 false여서 !!! ==? false 해놓는게 좋긴 조음
console.log(Pet.prototype);
console.log(Object.getOwnPropertyDescriptors(prototype)); // 얘로 하면 보임 아니면 enumerable true로 바꿔서 보든가
