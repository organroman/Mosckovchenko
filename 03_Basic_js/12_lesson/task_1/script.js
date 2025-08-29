// Написать ту ду лист.

// Спрашивать у пользователя пункты для добавления в список до тех пор, пока
// он не нажмет отмена. Каждый prompt это новый элемент списка.
// Все пункты вставить на страницу.
// Не забываем про семантику (список должен быть оформлен через ul или ol);
// По клику на элемент списка - удалить этот пункт.
// Подсказка
// elem.onclick = function () {
//     пишем что происходит по клику
//   };

const list = document.querySelector("#list");

let toDoList = [];
let toDoItem = prompt("Напишите пункт для списка");

while (toDoItem !== null) {
  toDoList.push(toDoItem);
  toDoItem = prompt("Напишите новый пункт для списка");
}

console.log("toDoList", toDoList);
console.log("toDoItem", toDoItem);

toDoList.map((item) => {
    console.log("item", item)
  const newItem = document.createElement("li");
  newItem.innerText = item;
  list.append(newItem);
});
