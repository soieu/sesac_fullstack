class User {
  constructor(name) {
    this.name = name;
  }
  set name(nm) {
    this.name = nm; // 오류난다 !! accessor의 이름과 변수 이름이 동일하면 안됨 !
  }
  get name() {
    return this.name;
  }
}

const hong = new User("hong");
console.log(hong.name);
