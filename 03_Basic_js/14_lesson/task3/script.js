/**
 * При натисканні shift та "+"" одночасно збільшувати
 * шрифт сторінки на 1px
 * а при shift та "-" - зменшувати на 1px
 *
 * Максимальний розмір шрифту - 30px, мінімальний - 10px
 *
 */

let size = 16;
window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === `+` && e.shiftKey) {
    console.log(e.key);
    if (size < 30) {
      size++;
      document.body.style.fontSize = `${size}px`;
    }
  } else if (e.key === `_` && e.shiftKey) {
    if (size > 10) {
      size--;
      document.body.style.fontSize = `${size}px`;
    }
  }
});
