// Dog function
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog("Gabby", "Lab", "chocolate", "female");

// toString 재정의
Dog.prototype.toString = function dogToString() {
  var ret =
    "Dog " +
    this.name +
    " is a " +
    this.sex +
    " " +
    this.color +
    " " +
    this.breed;
  return ret;
};

console.log("-->" + theDog);
