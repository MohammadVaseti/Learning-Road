"use strict";

// // PROJECT: "Bankist" Website
// const p = document.querySelectorAll("p");
// console.log(p);
// // can use forEach on nodelists
// p.forEach((e, i, arr) => console.log(e));

// // Selecting, Creating, and Deleting Elements
// console.log(document);
// console.log(document.documentElement); // <html>
// console.log(document.head); // <head>
// console.log(document.body); // <body>

// const body = document.querySelector("body");
// console.log(body);

// const message = document.createElement("p");
// message.classList.add("para");
// message.innerHTML = `hello <button>click</button> `;
// body.after(message);

// // message.remove();

// // Styles, Attributes and Classes

// message.style.backgroundColor = "red";
// console.log(message.style.backgroundColor);
// // if not set
// console.log(message.style.height);

// // console.log(getComputedStyle(message).backgroundColor);

// //Implementing Smooth Scrolling
// const btn = document.querySelector(".btn");
// const sec = document.querySelector(".section");

// btn.addEventListener("click", (e) => {
//   sec.scrollIntoView({ behavior: "smooth" });
// });

// //Types of Events and Event Handlers

// const leave = () => alert("bye");
// sec.addEventListener("mouseleave", leave);

// sec.onmouseenter = function () {
//   alert("You entered the heading!");
// };
// sec.removeEventListener("mouseleave", leave);

// //Event Propagation in Practice

// // random bg color

// const randomColor = (min, max) => {
//   return Math.floor(Math.random() * max) + min;
// };

// setInterval(() => {
//   body.style.backgroundColor = `rgb(${randomColor(0, 255)},${randomColor(
//     0,
//     255
//   )},${randomColor(0, 255)})`;
// }, 1000);

// // propagation
// document.querySelector(".nav__link").addEventListener(
//   "click",
//   function (e) {
//     console.log("LINK", e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
//   },
//   true
// );

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log("CONTAINER", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log("NAV", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });
// ///////////////////////////////

// // DOM traversy

// const h1 = document.querySelector("h1");
// console.log(h1.childNodes);
// console.log(h1.parentElement);
// console.log(h1.parentNode);
// console.log(h1.closest("body"));

// a better way the intersection observer API
const element = document.querySelector(".section23");
const options = {
  root: null,
  threshhold: 0.15,
  rootMargin: "-500px",
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => (entry.target.style.fontSize = "200px"));
}, options);

observer.observe(element);
// /////////////////
