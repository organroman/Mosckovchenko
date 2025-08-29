/**
 * Задание 2.
 *
 * На экране указан список товаров с указанием названия и количества на складе.
 *
 * Найти товары, которые закончились и:
 * - Изменить 0 на «закончился»;
 * - Изменить цвет текста на красный;
 * - Изменить жирность текста на 600.
 *
 * Требования:
 * - Цвет элемента изменить посредством модификации атрибута style.
 */



const store = document.querySelectorAll("li")
store.forEach((elem)=> {
    if (elem.innerText.includes (": 0")){
        elem.innerText = elem.innerText.replace("0" , "закінчився")
        elem.style.color = "red"
        elem.style.fontWeight = "600"
    }
})


