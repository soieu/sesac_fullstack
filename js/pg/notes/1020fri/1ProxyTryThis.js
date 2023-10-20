// Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 말고, proxy 생성자 함수를 이용하여 구현하시오.

// constructor가 proxy 객체를 리턴
class Emp {
  firstName;
  lastName;
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === "fullName") {
          return `${target.firstName} ${target.lastName}`;
        } else {
          return target[prop];
        }
      },
      set(target, prop, value) {
        if (prop === "fullName") {
          const [f, l] = value.split(" ");
          target.firstName = f;
          target.lastName = l?.toUpperCase();
        } else {
          target[prop] = value;
        }
      },
    });
  }
}

const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log("fullname=", hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
