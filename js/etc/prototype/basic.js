function student(name, major) {
  this.name = name;
  this.major = major;
  this.sayHello = function () {
    console.log(
      "안녕하세요? 제 이름은" + name + "입니다. 전공은 " + major + "입니다."
    );
  };
}

student.prototype.age = 20;

const freshman1 = new student("홍길동", "기계공학");

console.log(student.age);
console.log(freshman1.age);
console.log(freshman1);
