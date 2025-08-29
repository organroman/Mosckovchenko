// Требуется написать функцию, выводящую на екран числа от 1 до n, где n — это целое число,
// которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function fizzbuzz(n) {
  let container = document.querySelector("#fizzbuzz-output");
  
  for (let index = 1; index <= n; index++) {
    let div = document.createElement("div");

    if (index % 3 === 0 && index % 5 === 0) {
      div.innerText = "fizzbuzz";
      div.innerText = "fizzbuzz";
    } else if (index % 3 === 0) {
      div.innerText = "fizz";
      div.className = "fizz";
    } else if (index % 5 === 0) {
      div.innerText = "buzz";
      div.className = "buzz";
    } else div.innerText = index;

    container.append(div);
  }
}
fizzbuzz(22);
 