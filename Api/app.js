"use strict";

// "https://jsonplaceholder.typicode.com/posts"
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data.id))
  .catch((err) => console.log("err", err));
