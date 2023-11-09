const myFetch = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  );

myFetch().then((user) => {
  console.log("user>>>", user);
});
