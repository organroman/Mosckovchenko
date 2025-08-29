// const div = document.createElement("div");
// div.insertAdjacentHTML(
//   "beforeend",
//   `<input value="click me" type="button" onClick=alert("Clicked") />`
// );

// document.body.append(div);

// const btn = document.createElement("button");
// btn.textContent = "Click me";

// btn.addEventListener("click", function () {
//   div.remove();
//   console.log("btn just was clicked");
// });

// document.body.append(btn);

const div2 = document.createElement("div");
div2.textContent = "One time click";

document.body.append(div2);

function oneTimeClick() {
  console.log("This event will shown once");
  //   div2.removeEventListener("click", oneTimeClick);
}

div2.addEventListener("click", oneTimeClick);

// div2.addEventListener("mousemove", (e) => {
//   console.log(`move: ${e.clientX}, ${e.clientY}`);
// });

div2.addEventListener("mouseover", () => {
  console.log("mouseover");
});

div2.addEventListener("mouseout", () => {
  console.log("mouseout");
});

div2.addEventListener("dblclick", () => {
  console.log("dblclick");
});
div2.addEventListener("contextmenu", () => {
  console.log("context menu");
});

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "type something..");

document.body.append(input);

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

input.addEventListener("focus", () => {
  console.log("focus");
});

input.addEventListener("blur", function () {
  console.log("blur");
});
