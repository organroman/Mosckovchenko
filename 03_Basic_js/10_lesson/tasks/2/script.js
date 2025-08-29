/**
 * Задание 1.
 *
 * Получить элемент с классом .remove.
 * Удалить его из разметки.
 *
 * Получить элемент с классом .bigger.
 * Заменить ему CSS-класс .bigger на CSS-класс .active.
 *
 * Условия:
 * - Вторую часть задания решить в двух вариантах: в одну строку и в две строки.
 */

const elemRem = document.querySelector(".remove")
elemRem.remove()
const biggerEl = document.querySelector(".bigger")
// bigger.classList.replace("bigger","active")
biggerEl.classList.remove("bigger");
biggerEl.classList.add("active");
