/**
 * Задание 1.
 *
 * Создать элемент h1 с текстом «Нажмите любую клавишу.».
 *
 * При нажатии любой клавиши клавиатуры менять текст элемента h1 на:
 * «Нажатая клавиша: ИМЯ_КЛАВИШИ».
 */

const h1 = document.createElement("h1")
h1.innerText = "Нажмите любую клавишу"
document.body.append(h1)
window.addEventListener("keydown", (e) =>{
h1.innerText = `Нажатая клавиша: ${e.key}`
})