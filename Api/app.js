"use strict";

// "https://jsonplaceholder.typicode.com/posts"
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data.id))
//   .catch((err) => console.log("err", err));

// with async

async function getUsers(params) {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}
getUsers();
