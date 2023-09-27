var x = 10;
function f() {
  console.log(f, new.target, new.target?.name);
  //console.log(this);
  const x = 5;
  const obj = {
    id: 1,
    f: function () {
      console.log("id=", this.id, x);
    }, // 이해안가 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
  };
  obj.f();
  return obj.f;
}

f();
new f(); // constructor를 가지고 있음...? 무슨의미지

const rf = f();
rf();
