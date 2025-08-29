/**
 * Початкове значення кнопки повинно дорівнювати 0
 * При натисканні на кнопку збільшувати це значення на 1
 *
 */

const button = document.querySelector(".counter");                                                                      
let counter = 0;
button.innerText = counter

button.addEventListener("click", function(){
    counter++;
    console.log("🚀 ~ counter:", counter)
    button.innerText = counter
})