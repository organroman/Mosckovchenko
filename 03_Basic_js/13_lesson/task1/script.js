/**
 * Задание 1.
 *
 * Написать скрипт, который создаст элемент button с текстом «Войти».
 *
 * При клике по кнопке выводить alert с сообщением: «Добро пожаловать!».
 *
 *
 * * При наведении на кнопку  указателем мыши, выводить alert с сообщением:
 * «При клике по кнопке вы войдёте в систему.».
 *
 * Сообщение должно выводиться один раз.
 */

const button = document.createElement("button");
button.textContent = "Увійти";
function clickHandler() {
  alert("Вітаємо");
}
document.body.append(button);
button.addEventListener("click", clickHandler);

function mouseOverHandler() {
  alert("Щоб увійти в систему тапніть по кнопці");
}
button.addEventListener("mouseover", mouseOverHandler, { once: true });

