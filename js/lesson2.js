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
//-------------------------------------------------------------

//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

// function letMeSeeYourName(callback) {
//     let name = prompt("Введи своє імя:");
//     if (!name) name = 'Анонім';
//     callback(name);
// }

// function greet(name) {
//     console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);

// ----------------------------
//2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товара, а також callback.
//Функція створює об'єкт товара, додавая йому унікальний
//ідентифікатор у властивість id та викликає callback
//передавая йому створений об'єкт.
//showProduct(product) - коллбек приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//   const product = { name, price, id: Math.random() };
//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("me", 456, showProduct);
// !=============================================================
// //5. Напишіть скрипт керування особистим кабінетом інтернет банка
// //Є об'єкт account в якому необхідно реалізувати
// //методи для работи з балансом та історією транзакцій

// //Типів транзакцій всього два.
// //Можна покласти або зняти гроші з рахунка
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// const account = {
//     //поточний баланс рахунка
//     balance: 0,

//     //Історія транзакцій
//     transactions: [],

//     //Метод створює і повертає об'єкт транзакцій
//     //Приймає сумму і тип транзакцій
//     createTransaction(type, amount) {
//         return {
//             type,
//             amount,
//         };
//     },

//     //Метод відповідає за додавання сумми к балансу.
//     //Приймає сумму транзакціи.
//     //Визиває createTransaction для створення об'єкта транзакціи
//     //після чого додає його в історію транзакцій
//     deposit(amount) {
//         this.balance += amount;
//         const transact = this.createTransaction(
//             Transaction.DEPOSIT,
//             amount
//         );
//         this.transactions.push({
//             ...transact,
//             id: Math.random(),
//         });
//     },
//     //Метод відповідає за зняття сумми з балансу.
//     //Приймає сумму транзакціи.
//     //Визиває createTransaction для створення об'єкта транзакціи
//     //після чого додає йогого в історю транзакцій
//     //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//     //що недостатньо коштів на рахунку
//     withdraw(amount) {
//         if (amount > this.balance) {
//             return alert("Недостатньо коштів");
//         }
//         this.balance -= amount;
//         const transact = this.createTransaction(
//             Transaction.WITHDRAW,
//             amount
//         );
//         this.transactions.push({
//             ...transact,
//             id: Math.random(),
//         });
//     },

//     //Метод повертає поточний баланс
//     getBalance() {
//         return `На вашому рахунку ${this.balance} грошей.`;
//     },
//     //Метод шукає і повертає об'єкт транзакціи по id
//     getTransactionDetails(id) {
//         const transact = this.transactions.find(
//             (element) => element.id === id
//         );
//         return transact || "транзакція не знайдена";
//     },
//     //Метод повертає кількіств коштів вказаного типу
//     //транзакціи зі всієї історії транзакцій
//     getTransactionType(type) {
//         return this.transactions
//             .filter((transact) => transact.type === type)
//             .reduce(
//                 (sum, element) => element.amount + sum,
//                 0
//             );
//     },
// };
// account.deposit(1300);
// account.withdraw(500);
// account.deposit(400);
// // console.log(account.getTransactionDetails(1));
// console.log(
//     account.getTransactionType(Transaction.DEPOSIT)
// );
// console.log(account.getBalance());

// !==============Hom work==========================
// 6. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, list, id, createdAt (id та createdAt
// генеруються відповідними методами:
//   generateId() {
//     return "#" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },);
// list() - повертає список контактів у вигляді таблиці;
// delete(name) - видаляє знайденний контакт
// updateName(oldName, newName) - змінює ім'я контакта
// filtered(category) - фільтрує список контактів відповідної категорії (друзі, робота, і т.д.)
