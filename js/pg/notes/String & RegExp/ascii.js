// (참고) ASCII 범위: ~ 2**7  (7bit + Parity bit = 8bit)
"A".charCodeAt(0); // 65
String.fromCharCode(65); // 'A'
"z".charCodeAt(0); // 122
String.fromCharCode(90, 122); // 'Zz'
"가".charCodeAt(0); // 44032
"가".charCodeAt(0).toString(16); // 'ac00'
"0".charCodeAt(0); // 48
"9".charCodeAt(0); // 57

/*
    위 코드와 같이
    "something char".charCodeAt(0) : something char의 ascii코드 값 반환
    String.fromCharCode(num) : num에 대응하는 ascii 문자 반환
*/

// 한글 모음 범위
[..."ㅏㅣ"].map((a) => a.charCodeAt(0)); // [ 12623, 12643 ]

// 한글 모든 모음 출력 (21개)
for (let i = 12623; i <= 12643; i++) console.log(String.fromCharCode(i));

// 한글 자음 범위
[..."ㄱㅎ"].map((a) => a.charCodeAt(0)); // [ 12593, 12622 ]

// 한글 모든 자음 출력 (30개)
for (let i = 12593; i <= 12622; i++) console.log(String.fromCharCode(i));
