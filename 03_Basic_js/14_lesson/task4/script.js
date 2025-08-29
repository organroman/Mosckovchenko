/**
 * При натисканні на enter в полі вводу
 * додавати його значення, якщо воно не пусте,
 * до списку задач та очищувати поле вводу
 *
 * При натисканні Ctrl + D на сторінці видаляти
 * останню додану задачу
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
const inputElement = document.querySelector("#new-task")
const taskList = document.querySelector(".tasks-list")
inputElement.addEventListener("keyup", (e) => {
    if (e.code === "Enter" && inputElement.value !== ``  ) {
        const newTask= document.createElement("li")
        newTask.textContent =  inputElement.value 
        taskList.append(newTask) 
        inputElement.value = ``; 
    }
})
