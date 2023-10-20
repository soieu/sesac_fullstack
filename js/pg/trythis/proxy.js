class Emp {
  firstName;
  lastName;
}

const hong = new Proxy(new Emp(), {
  set(target, prop, value) {
    console.log("proxy.set>>", target, prop, value);
    if (prop === "fullName") {
      const [f, l] = value.split(" ");
      target.firstName = f;
      target.lastName = l.toUpperCase();
      target.fullName = f + " " + l.toUpperCase();
    }
  },
});

hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
