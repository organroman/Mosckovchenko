/**
 * Рахувати кількість натискань на пробіл, ентер,
 * та Backspace клавіші
 * Відображати результат на сторінці
 *
 * ADVANCED: створити функцію, яка приймає тільки
 * назву клавіші, натискання якої потрібно рахувати,
 * а сам лічильник знаходиться в замиканні цієї функції
 * (https://learn.javascript.ru/closure)
 * id елемента, куди відображати результат має назву
 * "KEY-counter"
 *
 * Наприклад виклик функції
 * createCounter('Enter');
 * реалізовує логіку підрахунку натискання клавіші Enter
 * та відображає результат в enter-counter блок
 *
 */

let counterEnter = 0;
let counterSpace = 0;
let counterBackspace = 0;
window.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const enterCounterElement = document.getElementById("enter-counter");
    counterEnter = counterEnter + 1;
    enterCounterElement.innerText = counterEnter;
  } else if (e.code == "Space") {
    const spaceCounterElement = document.getElementById("space-counter");
    counterSpace = counterSpace + 1;
    spaceCounterElement.innerText = counterSpace;
  } else if (e.code == "Backspace") {
    const backspaceCounterElement =
      document.getElementById("backspace-counter");
    counterBackspace = counterBackspace + 1;
    backspaceCounterElement.innerText = counterBackspace;
  }
});
