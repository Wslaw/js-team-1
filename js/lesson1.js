// for (let i = 6; i > 3; i--) {}
// console.log(i);

// ---------------------------------

// Що буде виведено в консоль ?
// let b = 20;

// if (true) {
//   console.log(b);
//   b = 10;
// }

// ----------------------------------

// Який результат буде виведено в консоль?
// console.log(typeof typeof 1);

// ----------------------------------

// Що відобразиться в консолі:
// console.log(Number(undefined));

// -----------------------------------

// console.log("10" - 8 + true);
// console.log(5 + 5 + "5");

// ---------------------------------

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const num = prompt("Enter number");
// let hours = Math.floor(num / 60);
// let minutes = num % 60;
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

// ---------------------------------

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 10;
// const min = 3;

// let total = 0
// for (let i = max; i >= min; i -= 1) {
//     console.log(i)
//     if (i % 2 === 0){
//         total +=i
//     }
// }
// console.log(total)

// function numberTotal(max, min) {
//     let total = 0
//
//     for (let i = max; i >= min; i -= 1) {
//         console.log(i)
//
//         if (i % 2 === 0) {
//             total += i
//         }
//     }
//
//     return total
// }
//  console.log(numberTotal(10, 3))
// -----------------------------------------------------------------------------------------------------

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt('Enter number from 1 to 4');
// let result = '';

// switch (num) {
//     case '1':
//         result = 'зима'
//         break;

//      case '2':
//         result = 'весна'
//         break;

//      case '3':
//         result = 'літо'
//         break;

//      case '4':
//         result = 'осінь'
//         break;

//     default:
//         result = 'Enter number from 1 to 4';
// }

// alert(result);

// function chekNumber(num) {
//     let result = '';

// switch (num) {
//     case '1':
//         result = 'зима'
//         break;

//      case '2':
//         result = 'весна'
//         break;

//      case '3':
//         result = 'літо'
//         break;

//      case '4':
//         result = 'осінь'
//         break;

//     default:
//         result = 'Enter number from 1 to 4';
//     }
//     return result;
// }
// console.log(chekNumber('2'));

// ==========================================================
// Переверни рядок у зворотньому порядку
// const string = "Hello";

// const string = "Hello";
// let newString = "";
// for (let index = string.length-1; index >= 0; index -= 1) {
//     const element = string[index];
//     console.log(element);
//     // newString = newString + element;
//     newString += element;

// }
// console.log(newString);

// ===============================================
// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// // styles[1] = "Класика";
// const index = styles.indexOf("Блюз");
// // styles[index] = "Класика";
// styles.splice(index, 1, "Класика");
// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");
// console.log(styles);

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);

// ===================================================
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const login = prompt("Enter your login");
//     if (array.includes(login)) {
//         alert("Доступ дозволено");
//     } else {
//         alert("Користувач не знайден");
//     }
// }

// checkLogin(logins);
// ==============================================

// ========================Hom work===========================
//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// ====================2=====================

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// ==========================3======================
//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];
