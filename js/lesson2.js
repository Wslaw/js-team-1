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
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = 'skydiving';
user.premium = false;

const arr = Object.keys(user);
for (const userKey of arr) {
    console.log(`${userKey}: ${user[userKey]}`);
}