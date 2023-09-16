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

