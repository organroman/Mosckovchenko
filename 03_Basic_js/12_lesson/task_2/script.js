// Задание

// Программа будет выводить то или иное сообщение на страницу в зависимости от возраста пользователя.
// Сообщение представляет из себя html-элемент div. В нем будет сообщение (далее alert-message) и тип
// (тип алерта - это тот или иной класс для div).

// Логика:
// Спросить у пользователя его имя и возраст.
// Если число (также проверить, что там число) меньше 18, вывести на страницу
// сообщение, где alert-message - Sorry, you are not be able to visit us. Тип - 'alert-danger'
// Если больше 18 - alert-message 'Hi, ${name}.', тип 'alert-success';

const name = prompt("Введите ваше имя");
const age = prompt("Введите ваш возвраст");

const messageContainer = document.createElement("div");

if (isNaN(+age)) {
  messageContainer.textContent = "Вы ввели некоректныое число!";
  messageContainer.className = "alert-danger";
} else {
  if (+age < 18) {
    messageContainer.textContent =
      "Извините но вы слишком маленькие для этого сайта :(";
    messageContainer.className = "alert-danger";
  } else {
    messageContainer.textContent = `Привет ${name}`;
    messageContainer.className = "alert-success";
  }
}

document.body.append(messageContainer)