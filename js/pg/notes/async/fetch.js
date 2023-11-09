const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const myFetch = (url) => fetch(url).then((user) => user.json());

// myFetch를 이용하는 코드를 작성하시오.
// myFetch(sampleUrl).then((user) => {
//   console.log("user>>>", user);
// });

async function request(url) {
  const response = await fetch(url);
  //   return await response.json(); // BAD!! Anti-Pattern!!
  return response.json();
}

try {
  console.log("aa>>", await request(sampleUrl));
} catch (err) {
  console.error(err);
}
