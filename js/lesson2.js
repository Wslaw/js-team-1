// const a = [1, 2, 3, 4];
// const b = a.slice(0, 2);

// b.push(5);

// console.log(a);
// console.log(b);
//-------------------------------------------------------------------

// function makeAdder(x) {
//   function add(y) {
//     return x + y;
//   }
//   return add;
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

//---------------------------------------------------------------------

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = 'skydiving';
// user.premium = false;

// const arr = Object.keys(user);
// for (const userKey of arr) {
//     console.log(`${userKey}: ${user[userKey]}`);
// }

// ------------------------

//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// // let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// // for (const value of values) {
//     // sum += value;
// //
// // };
// const sum = values.reduce((sum, value) => sum + value, 0);

// console.log(sum);

// ---------------------------------

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   // let sum = 0;
//   // for (const stone of stones) {
//   //   if (stonesName === stone.name) {
//   //     sum += stone.price * stone.quantity;
//   //   }
//   // }

//   // return sum;

//   return stones.reduce(
//     (sum, stone) =>
//       stone.name === stonesName ? sum + stone.price * stone.quantity : sum,
//     0
//   );
// }

// console.log(calcTotalPrice(stones, "Сапфір"));

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат
// const calculator = {
//     read(a, b) {
//         this.value1 = a;
//         this.value2 = b;
//     },
//     sum() {
//         return !this.value1 || !this.value2
//             ? "Немає потрібних властивостей"
//             : this.value1 + this.value2;
//     },
//     mult() {
//         return !this.value1 || !this.value2
//             ? "Немає потрібних властивостей"
//             : this.value1 * this.value2;
//     },
// };
// calculator.read(4);
// console.log(calculator.sum());
// console.log(calculator.mult());
