const array = new Array(3).fill([]);
// fill은 세번 실행되는게 아닌, 한번 실행된다. -> 생성되는 배열은 힙 영역에 들어가며 세 개의 빈 배열은 같은 주소를 공유하게 된다.
console.log(array);
array[0].push("X");
console.log(array);
// [ [ 'X' ], [ 'X' ], [ 'X' ] ]
