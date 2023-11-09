//이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.

Array.prototype.uniqBy = function (prop) {
  // 객체들의 prop의 값들을 중복이 되지 않게
  return [...new Set(this.map((a) => a[prop]))];
};

const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
console.log(users.uniqBy("dept")); // [ 'HR', 'Server', 'Front', 'Sales' ]
