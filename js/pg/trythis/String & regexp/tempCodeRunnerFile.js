assert.deepStrictEqual(isEndJaum("아지오"), false);
assert.deepStrictEqual(isEndJaum("북한강"), true);
assert.deepStrictEqual(isEndJaum("뷁"), true);
assert.deepStrictEqual(isEndJaum("강원도"), false);
assert.deepStrictEqual(isEndJaum("바라당"), true);
assert.deepStrictEqual(isEndJaum("ㅜㅜ"), false); // 여기서 문제
assert.deepStrictEqual(isEndJaum("케잌"), true);