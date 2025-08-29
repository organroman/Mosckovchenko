/**
 * При наведенні на блок 1 робити
 * блок 2 зеленим кольором
 * А при наведенні на блок 2 робити
 * блок 1 червоним кольором
 *
 */
const block1 = document.querySelector("#block-1");
const block2 = document.querySelector("#block-2");

block1.addEventListener("mouseover", function () {
  block2.style.backgroundColor = "green";
});
block1.addEventListener("mouseout", function () {
  block2.style.backgroundColor = "white";
});

block2.addEventListener("mouseover", function () {
  block1.style.backgroundColor = "red";
});
block2.addEventListener("mouseout", function () {
  block1.style.backgroundColor = "white";
});
