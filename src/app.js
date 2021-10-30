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

let generateExcuse = () => {
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

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

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
