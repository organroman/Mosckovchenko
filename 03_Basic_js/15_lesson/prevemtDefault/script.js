const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
});

const btn = document.querySelector("button");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(nameInput.value);
  console.log(surnameInput.value);
  console.log(event.target);
});
