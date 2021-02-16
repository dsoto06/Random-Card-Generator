/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let symbol = ["♣", "♦", "♥", "♠"];
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

window.onload = function() {
  let random1 = symbol[Math.floor(Math.random() * symbol.length)];
  let random2 = number[Math.floor(Math.random() * number.length)];
  let random3 = random1;

  document.querySelector("#symbol").innerHTML = random1;
  document.querySelector("#number").innerHTML = random2;
  document.querySelector("#symbol1").innerHTML = random3;
};
