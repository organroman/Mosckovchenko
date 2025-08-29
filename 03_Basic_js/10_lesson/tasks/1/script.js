/**
 * Задание 1.
 *
 * Получить и вывести в консоль следующие элементы страницы:
 * - По идентификатору (id): элемент с идентификатором list;
 * - По классу — элементы с классом list-item;
 * - По тэгу — элементы с тэгом li;
 * - По CSS селектору (один элемент) — третий li из всего списка;
 * - По CSS селектору (много элементов) — все доступные элементы li.
 *
 * Вывести в консоль и объяснить свойства элемента:
 * - innerText; // textContent
 * - innerHTML;
 * - outerHTML.
 */

const list = document.getElementById("list");
console.log(list);
const listItem = document.getElementsByClassName("list-item");
console.log(listItem);
const li = document.getElementsByTagName("li");
console.log(li);
const css = document.querySelector("li:nth-child(3)");
console.log(css);
const cssAll = document.querySelectorAll("li");
console.log(cssAll);

console.log(list.innerText);
console.log(list.innerHTML);
console.log(list.outerHTML   );

/**
 * outerHTML :
 * 
 * <ul id="list">
        <li class="list-item">Item 1</li>
        <li class="list-item">Item 2</li>
        <li class="list-item">Item 3</li>
        <li class="list-item">Item 4</li>
        <li class="list-item">Item 5</li>
      </ul>
 * 

    * innerHTML :   

       <li class="list-item">Item 1</li>
        <li class="list-item">Item 2</li>
        <li class="list-item">Item 3</li>
        <li class="list-item">Item 4</li>
        <li class="list-item">Item 5</li>


  innerText || textContext 
     Item 1   
     Item 2
     Item 3
     Item 4
     Item 5
 */
