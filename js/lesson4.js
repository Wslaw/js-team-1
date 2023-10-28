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

const input = document.querySelector("#passwordInput");
const button = document.querySelector("#passwordButton");

button.addEventListener("click", handler);

function handler() {
    if (button.textContent === "Розкрити") {
        button.textContent = "Приховати";
        input.style.color = "inherit";
    } else {
        button.textContent = "Розкрити";
        input.style.color = "transparent";
    }
}