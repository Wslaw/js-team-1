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

const num = prompt('Enter number from 1 to 4');
let result = '';

switch (num) {
    case '1':
        result = 'зима'
        break;
    
     case '2':
        result = 'весна'
        break;
    
     case '3':
        result = 'літо'
        break;

     case '4':
        result = 'осінь'
        break;

    default:
        result = 'Enter number from 1 to 4';
}

alert(result);

function chekNumber(num) {
    let result = '';

switch (num) {
    case '1':
        result = 'зима'
        break;
    
     case '2':
        result = 'весна'
        break;
    
     case '3':
        result = 'літо'
        break;

     case '4':
        result = 'осінь'
        break;

    default:
        result = 'Enter number from 1 to 4';
    }
    return result;
}
console.log(chekNumber('2'));