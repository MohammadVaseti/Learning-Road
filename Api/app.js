"use strict";

// "https://jsonplaceholder.typicode.com/posts"
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data.id))
//   .catch((err) => console.log("err", err));

// with async

// async function getUsers(params) {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//     const data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// }
// getUsers();

// review

fetch("https://jsonplaceholder.typicode.com/posts/5")
  .then((respnse) => respnse.json())
  .then((data) => console.log(data));

async function users(params) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("err", err);
  }
}
users();
