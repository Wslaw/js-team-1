// THIS
// 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);

//   },
// };
// product.showPrice();

//------------------------------------------------------------------------------------

// 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();

//-------------------------------------------------------------------------------------

// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));

//-------------------------------------------------------------------------------------

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта

// const user = {
//     name: "Mike",
//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFail() {
//        console.log(`${this.name} failed to log in`);
//     },
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//-----------------------------------------------------------------------------------------------

// Класи

//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві <name> <age> років і в нього <posts> публікацій.`

// class User {
//     constructor({userName, age, numbersOfPost}) {
//         this.userName = userName;
//         this.age = age;
//         this.numbersOfPost = numbersOfPost;
//     }

//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     }
// }

// const user = new User({ userName: 'Mike', age: 18, numbersOfPost: 150 });
// console.log(user);
// console.log(user.getInfo());
// !=======================================
//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get getClientData() {
//         return {
//             clientLogin: this.#login,
//             clientEmail: this.#email,
//         };
//     }
//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const client = new Client("Roman", "roman@gmail.com");
// console.log(client);
// console.log(client.getClientData);
// client.changeEmail = "romeo345@gmail.com";
// console.log(client.getClientData.clientEmail);

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

// class Notes {
//     static Priority = {
//         HIGHT: "hight",
//         MIDDLE: "middle",
//         LOW: "low",
//     };
//     constructor() {
//         this.items = [];
//     }
//     addNote(note) {
//         this.items.push(note);
//     }
//     removeNote(noteText) {
//         // const index = this.items.findIndex(
//         //     (item) => item.text === noteText
//         // );
//         // if (index === -1) return alert("Not found");
//         // this.items.splice(index, 1);
//         this.items = this.items.filter(
//             (item) => item.text !== noteText
//         );
//     }
//     updatePriority(noteText, newPriority) {
//         // const index = this.items.findIndex(
//         //     (item) => item.text === noteText
//         // );
//         // if (index === -1) return alert("Not found");
//         // this.items[index].priority = newPriority;
//         const item = this.items.find(
//             (item) => item.text === noteText
//         );
//         if (!item) return alert("Not found");
//         item.priority = newPriority;
//     }
// }

// const notes = new Notes();
// notes.addNote({
//     text: "Hello",
//     priority: Notes.Priority.LOW,
// });
// notes.addNote({
//     text: "Bye",
//     priority: Notes.Priority.MIDDLE,
// });
// notes.addNote({
//     text: "Red",
//     priority: Notes.Priority.HIGHT,
// });
// notes.removeNote("By");
// notes.updatePriority("By", Notes.Priority.LOW);
// console.log(notes);
//----------------------------------------------------------------------------------------------

// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

// class Worker {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
            
//     }
//     getSalary() {
//     console.log(`Worker ${this.name} has salary ${this.salary} dollars`);
// }

    
// };

// class TopLevelWorker extends Worker {
//     constructor(name, age, salary, position) {
//         super(name, age, salary);
//         this.position = position;
//     }
//     getPosition() {
//         console.log(`${this.name} works as ${this.position}`);
//     }
// };

// const red = new TopLevelWorker("Ivan", 25, 2500, "manager");
// console.log(red);

// red.getSalary();



//--------------------------------------------------------------------------------
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.