// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement


// const list = document.createElement("ol");
// const buttonAdd = document.createElement("button");
// const buttonRemove = document.createElement("button");
// buttonAdd.textContent = "Add";
// buttonRemove.textContent = "Remove";
// const input = document.createElement("input");
// document.body.append(input, buttonAdd, buttonRemove, list);

// buttonAdd.addEventListener("click", addItem);
// buttonRemove.addEventListener("click", removeItem);

// function addItem() {
//     if (!input.value.trim()) return;
//     const item = document.createElement("li");
//     item.textContent = input.value;
//     list.append(item);
//     input.value = "";
//     // if (list.children.length % 2 === 0) {
//     //     item.style.backgroundColor = "yellow";
//     // } else {
//     //     item.style.backgroundColor = "blue";
//     // }
//     item.style.backgroundColor = list.children.length % 2 === 0 ? "yellow" : "blue";
// }

// function removeItem() {
//     if (!list.lastChild) return;
//     list.lastChild.remove();
// }

//========================2=======================================================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const input = document.querySelector("#passwordInput");
// const button = document.querySelector("#passwordButton");

// button.addEventListener("click", handler);

// function handler() {
//     if (button.textContent === "Розкрити") {
//         button.textContent = "Приховати";
//         input.style.color = "inherit";
//     } else {
//         button.textContent = "Розкрити";
//         input.style.color = "transparent";
//     }
// }
// ******************************************

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }
// const changeBox = function () {
//     box.style.cssText = forms[randomither(forms.length)];
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.position = "absolute";
//     box.style.top = `${randomither(100)}%`;
//     box.style.left = `${randomither(100)}%`;
// }


// const box = document.createElement("div");

// changeBox();
// document.body.append(box);


// box.addEventListener("click", changeBox);

// ********************************************************************


/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const btn = document.querySelector("#double");
const items = document.querySelectorAll(".listItem");

btn.addEventListener("click", doubleBtn);

function doubleBtn() {
    items.forEach(item => item.textContent *= 2);
    
}

