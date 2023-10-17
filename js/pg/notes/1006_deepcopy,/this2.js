const Dog = function (name) {
  //   console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };
  this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

const hong = { id: 1, name: "hong" };
const dog = Dog("Doggy");
const lucy = new Dog("Lucy");
// Dog.bark(); // ?
// lucy.bark(); // ?
lucy.bark2(); // ?
lucy.bark.call(hong);
Dog.call;
// console.log("type=", typeof dog); // ?
// console.log("type=", typeof lucy); // ?
