/*  ## Завдання 1
Написати функцію filterBy(), яка прийматиме в себе 2 аргументи. 
    Перший аргумент - масив, який міститиме в собі будь-які дані,
    другий аргумент - тип даних.
Функція має повернути новий масив, який міститиме в собі всі дані,
    які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом.
Тобто, якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string',
    то функція поверне масив [23, null].
*/

// const arrExample = ["hello", "world", 23, "23", null];

// function filterBy(arr, dataType) {
//   return arr.filter((item) => typeof item !== dataType);
// }

// console.log(filterBy(arrExample, "number"));

/* ## Завдання 2

Створити об'єкт студент «студент» і проаналізувати його табель.

#### Технічні вимоги:
- Створити порожній об'єкт `student`, з полями `name` і `lastName`.
- Запитати у користувача ім'я та прізвище студента, отримані значення записати у відповідні поля об'єкта.
- У циклі запитувати в користувача назву предмета й оцінку з нього. 
    Якщо користувач натисне Cancel при n-запитуванні про назву предмета, закінчити цикл. 
    Записати оцінки з усіх предметів у властивість студента `tabel`.
- Порахувати кількість поганих (менше 4) оцінок з предметів. 
    Якщо таких немає, вивести повідомлення `Студент переведений на наступний курс`.
- Порахувати середній бал із предметів. 
    Якщо він більший за 7 - вивести повідомлення `Студенту призначено стипендію`.

*/

// const student = { name: "", lastname: "", tabel: {} };

// const nameInput = prompt("Введіть імя");
// student.name = nameInput;

// const lastnameInput = prompt("Введіть Прізвище");
// student.lastname = lastnameInput;

// let subject = prompt("Введіть назву предмета");
// student.tabel[subject] = +prompt("Введіть оцінку");

// while (subject !== null) {
//   subject = prompt("Введіть назву предмета");
//   if (subject !== null) {
//     student.tabel[subject] = +prompt("Введіть оцінку");
//   }
// }

// function getBadGrades() {
//   let badGrade = 0;
//   for (let key in student.tabel) {
//     if (student.tabel[key] <= 4) {
//       //   badGrade = badGrade + 1;
//       badGrade++;
//     }
//   }
//   if (badGrade === 0) {
//     console.log("Студент переведений на наступний курс");
//   } else console.log(`У студента ${badGrade} оцінок менше 4 балів`);
// }
// getBadGrades();

// let total = 0;
// for (let key in student.tabel) {
//  total = total + student.tabel[key]
// }

// let average = total / Object.keys(student.tabel).length
// console.log(`Середня оцінка ${average}`);

// if (average >= 7) {
//     console.log("Студенту призначена стипендія")
// }

// console.log(student);

/* ## Завдання 3

Реалізувати функцію для створення об'єкта «користувач».

#### Технічні вимоги:
- Написати функцію `createNewUser()`, яка буде створювати і повертати об'єкт `newUser`.
- Під час виклику функція має запитати у того, хто викликає, ім'я та прізвище.
- Використовуючи дані, введені користувачем, створити об'єкт `newUser` із властивостями `firstName` і `lastName`.
- Додати в об'єкт `newUser` метод `getLogin()`, який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, 
    усе в нижньому регістрі (наприклад, `Ivan Kravchenko → ikravchenko`).
- Створити користувача за допомогою функції `createNewUser()`. Викликати в користувача функцію `getLogin()`. 
    Вивести в консоль результат виконання функції.
*/

/*## Завдання 4 

Доповнити функцію `createNewUser()` методами підрахунку віку користувача та його паролем. 

#### Технічні вимоги:
- доповніть функцію `createNewUser()` таким функціоналом:
   1. Під час виклику функція має запитати в того, хто викликає, дату народження (текст у форматі `dd.mm.yyyy`) 
        і зберегти її в полі `birthday`.
   2. Створити метод `getAge()` який буде повертати скільки користувачеві років.
   3. Створити метод `getPassword()`, який повертатиме першу літеру імені користувача у верхньому регістрі, 
   з'єднану з прізвищем (у нижньому регістрі) і роком народження. 
   (наприклад, `Ivan Kravchenko 13.03.1992 → Ikravchenko1992`).
- Вивести в консоль результат роботи функції `createNewUser()`, 
    а також функцій `getAge()` і `getPassword()` створеного об'єкта.
*/

"YYYY-MM-DD", "1990-01-20";

// income = "20.01.2000", split => ["20", "01", "2000"] => reverse => ["2000", "01", "20"] => "2000-01-20"

function createNewUser() {
  const nameInput = prompt("Введіть імя");
  const lastNameInput = prompt("Введіть прізвище");
  const userBirthInput = prompt(
    "Введіть дату народження у форматі `dd.mm.yyyy`"
  );
  const userBirthday = new Date(userBirthInput.split(".").reverse().join("-"));
  console.log("🚀 ~ userBirthday:", userBirthday);

  const newUser = {
    firstName: nameInput,
    surName: lastNameInput,
    birthday: userBirthday,
    getLogin: function () {
      return (
        this.firstName.charAt(0).toLowerCase() + this.surName.toLowerCase()
      );
    },
    getAge: function () {
      const todayDate = new Date();
      return Math.floor(
        (todayDate.getTime() - this.birthday.getTime()) /
          (1000 * 3600 * 24 * 365)
      );
    },
    getPassword: function () {
        return  (this.firstName.charAt(0).toUpperCase() + this.surName.toLowerCase() + this.birthday.getFullYear()
      );
    }
  };
  return newUser;
}

const ivan = createNewUser();

console.log("newUser Object", ivan);
console.log("newUser login", ivan.getLogin());
console.log("newUser Age", ivan.getAge());
console.log("newUser password", ivan.getPassword());
