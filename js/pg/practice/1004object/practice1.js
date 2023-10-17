/**
 * for-in문을 사용하여 배열의 인덱스를 출력하시오.
 * for-in문을 사용하여 배열의 원소를 출력하시오.
 */
const arr = [100, 200, 300, 400, 500, 600, 700];

console.log("1. for-in문을 사용하여 배열의 인덱스를 출력하시오.");
for (index in arr) {
  console.log(index);
}
console.log("2. for-in문을 사용하여 배열의 원소를 출력하시오.");
for (index in arr) {
  console.log(arr[index]);
}

/**
 * for-in문을 사용하여 프로퍼티 이름을 출력하시오.
 * for-in문을 사용하여 프로퍼티 값을 출력하시오.
 * for-of문을 사용하여 프로퍼티 값을 출력하시오.
 * level 프로퍼티가 열거되지 않도록 설정하시오. // Object.defineProperty
 * role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
 */
const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };

// for-in문을 사용하여 프로퍼티 이름을 출력하시오.
// for-in문을 사용하여 프로퍼티 값을 출력하시오.
console.log("for-in문을 사용해 프로퍼티 이름, 값 출력");
for (property in obj) {
  console.log(property + " : " + obj[property]);
}

//for-of문을 사용하여 프로퍼티 값을 출력하시오.
console.log("for-of문을 사용하여 프로퍼티 값을 출력");
for (property of Object.values(obj)) {
  console.log(property);
}

//level 프로퍼티가 열거되지 않도록 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "level", {
  enumerable: false,
});

//role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "role", {
  writable: false,
});
