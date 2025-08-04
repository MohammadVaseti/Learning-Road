"use strict";

// PROJECT: "Bankist" Website
const p = document.querySelectorAll("p");
console.log(p);
// can use forEach on nodelists
p.forEach((e, i, arr) => console.log(e));

// Selecting, Creating, and Deleting Elements
const header = document.querySelector("body");
console.log(header);

const message = document.createElement("p");
message.classList.add("para");
message.innerHTML = `hello <button>click</button> `;
header.prepend(message);
