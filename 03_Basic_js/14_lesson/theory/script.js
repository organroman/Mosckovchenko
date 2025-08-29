document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded (without styles and images)");
});

window.addEventListener("load", () => {
  console.log("DOM fully loaded with images and styles");
});


const input = document.querySelector("#keyboardInput");
input.addEventListener("keydown", (event) => {
  console.log(`keydown: key=${event.key}, code=${event.code}`);
});

input.addEventListener("keyup", (e) => {
  console.log(`keyup: key=${e.key}, code=${e.code}`);
});

const screen = document.querySelector("#screen");
const coord = document.createElement("p");

coord.innerText = "0px";

screen.append(coord);

window.addEventListener("scroll", () => {
  coord.innerText = `${window.scrollY} px`;
  console.log(`${window.scrollY} px`);
});
