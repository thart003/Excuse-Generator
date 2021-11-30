/* eslint-disable */
//import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Taylor from the console!");
};
// anonymous function
let generateExcuse = () => {
  // variables of string values in an array
  let who = [
    "my step-son",
    "the neighbors Rottweiler",
    "my little Tiger cub",
    "her sister-in-law"
  ];
  let action = ["desicrated", "annihilated", "pacified", "purged"];
  let what = [
    "the million-dollar painting",
    "a gold watch",
    "a neighbors cat",
    "the stagecoach"
  ];
  let when = [
    "half past the hour",
    "just before the buzzer",
    "between periods",
    "after closing time"
  ];
  // declare four variables that are equal to random values correlated with the different strings in each array.
  // Use length property at the end of each variable containing the arrays.
  // Multiply the length value by Math.random() and put that operation in a Math.floor() function
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  // return a random string from each array by concatenating variables with bracketed index variables (the numbers that are randomly generated using the length property and the two Math functions)

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
