/**
//  * При натисканні на enter в полі вводу
//  * додавати його значення, якщо воно не пусте,
//  * до списку задач та очищувати поле вводу.
 *
//  * також біля задачі мають бути дві кнопки - "Done" і  "Remove".
//  * по кліку на Done - закреслюваьт текст задачі
//  * по кліку на Remove - видаляти задачу
 *
//  * Использовать делегирование событий при клике на кнопку removeButton и idDoneButton
 *
 *
//  *  3) Если в поле ввода введено более 40 символов - не разрешать вводить символы
 *
//  * При натисканні Ctrl + D на сторінці видаляти останню додану задачу
 *
 * Додати можливість очищувати весь список
 * Запустити очищення можна двома способами:
 * - при кліці на кнопку Clear all
 * - при натисканні на Alt + Shift + Backspace
 *
 * При очищенні необхідно запитувати у користувача підтвердження
 * (показувати модальне вікно з вибором Ok / Cancel)
 * Якщо користувач підвердить видалення, то очищувати список,
 * інакше нічого не робити зі списком
 *
 */

const inputElement = document.querySelector("#new-task");
const taskList = document.querySelector(".tasks-list");
const clearLL = document.querySelector("#clear");

inputElement.addEventListener("keyup", (e) => {
  if (inputElement.value.length > 40) {
    inputElement.value = inputElement.value.slice(0, 40);
    return;
  }
  if (e.code === "Enter" && inputElement.value !== ``) {
    const newTask = document.createElement("li");
    newTask.innerHTML = `<span>${inputElement.value}</span> 
    <button class="done">Done</button>
    <button class="remove">Remove</button>`;
    taskList.append(newTask);
    inputElement.value = ``;
  }
});
taskList.addEventListener("click", (e) => {
  const task = e.target.closest("li");
  if (e.target.classList.contains("done")) {
    const taskName = task.querySelector("span");
    taskName.classList.add("isDone");
  } else if (e.target.classList.contains("remove")) {
    task.remove();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.code === "KeyD") {
    const lastTask = document.querySelector(" li:last-child");
    if (lastTask) {
      lastTask.remove();
    }
  }
});

function clearAll() {
  taskList.innerHTML = ``;
}

function sure() {
  const resault = confirm("Точно видалити всі задачі");
  console.log("🚀 ~ confirm ~ resault:");

  if (resault) {
    clearAll();
  }
}

clearLL.addEventListener("click", sure);

window.addEventListener("keydown", (e) => {
  if (e.altKey && e.shiftKey && e.key === "Backspace") {
    sure();
  }
});
