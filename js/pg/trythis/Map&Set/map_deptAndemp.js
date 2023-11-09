const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

/* first try
const deptMap = new Map();
for (const val of depts.entries()) {
  deptMap.set(val[1].id, val[1]);
}
const empMap = new Map();
for (const val of emps.entries()) {
  empMap.set(val[1].id, val[1]);
}

// 어려움....
const empDept = new Map();
for (const val of emps.entries()) {
  console.log(val);
  empDept.set(val, deptMap.get(val[1].dept));
}
*/

// 이렇게 짜면 없어보임 ㅋ.ㅋ -> 명령형으로 짬.... 선언형으로 작성하면 더 좋음
//const deptMap = new Map();
// for (const dept of depts) {
//   deptMap.set(dept.id, dept);
// }

// 매우 예쁨
const deptMap = new Map(depts.map((dept) => [dept.id, dept]));
const empMap = new Map(emps.map((emp) => [emp.id, emp]));

//중요 !! 꼭 이핸
const empDept = new Map(
  emps.map((emp) => {
    const { dept } = emp;
    delete emp.dept;
    return [emp, deptMap.get(dept)];
  })
);

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
const devTeaams = [...empDept.entries()] // empDept를 [key, value]의 배열로 만들어서
  //.filter(([key, dept]) => dept.id === 2)
  .filter(([, dept]) => dept.id === 2) // key를 emp, value를 dept에 넣어서 dept.id === 2인 값들만 filter한다
  .map(([emp]) => emp.name); // filter된 것들의 emp.name만 출력한다.
console.log(devTeaams);
