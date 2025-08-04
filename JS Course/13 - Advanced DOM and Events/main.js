"use strict";

// PROJECT: "Bankist" Website
const p = document.querySelectorAll("p");
console.log(p);
// can use forEach on nodelists
p.forEach((e, i, arr) => console.log(e));

// Selecting, Creating, and Deleting Elements
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.head); // <head>
console.log(document.body); // <body>

const body = document.querySelector("body");
console.log(body);

const message = document.createElement("p");
message.classList.add("para");
message.innerHTML = `hello <button>click</button> `;
body.after(message);

// message.remove();
