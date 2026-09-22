// let list = {
//   1: 'Вынести мусор',
//   2: 'Купить хлеб',
//   3: 'Сходить к бабушке',
// };

// const arr = new Array();
/*
const arr = [];

let list = ['Вынести мусор', 'Купить хлеб', 'Сходить к бабушке'];
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]); // undefined

list[1] = 'Сделать уборку';
console.log(list);

// alert(list);
list[3] = 'Сделать уроки';
console.log(list);

console.log(list.length);

list[100] = 'Go';
console.log(list.length);

list.length = 0;
console.log(list);

list = [];

*/

/*
let arr = [
  'qwerty',
  2,
  {},
  [12232432],
  function () {alert('Hello World!')},
];

// arr[4]();

console.log(arr[arr.length - 1]); // arr[4]

 */

let list = ['Вынести мусор', 'Купить хлеб', 'Сходить к бабушке'];
/*
list.push('do something');
console.log(list);

list.pop();
console.log(list);

list.unshift('Go home');
console.log(list);

list.shift();
console.log(list);

for (let i = 0; i < list.length; i++) { // от 0 до 3
  console.log(list[i]);
}
*/
console.log(typeof list);
list.name = 'arr';
console.log(list);

//
// for (let key in list) {
//   console.log(list[key])
// }

for (let item of list) {
  console.log(item)
}


/*
ДЗ
16a Любимый фильм 🎬
Создай массив movies с тремя названиями фильмов.

Затем:

выведи в консоль первый фильм;
выведи последний фильм;
замени второй фильм на другой;
добавь ещё один фильм в конец;
выведи весь массив.

16b Оценки ученика 📚
Дан массив:
let grades = [5, 4, 3, 5, 4];

Сделай так, чтобы программа:
Вывела количество оценок.
Вывела первую оценку.
Вывела последнюю оценку.
Заменила 3 на 4.
Добавила оценку 5 в конец.

Ожидаемый результат:
[5, 4, 4, 5, 4, 5]

16c Корзина покупок 🛒
Создай массив:
let cart = ["Хлеб", "Молоко", "Яблоки"];

Выполни следующие действия:
Добавь "Сыр" в конец.
Добавь "Масло" в начало.
Удали последний товар.
Удали первый товар.
Выведи получившийся массив и его длину.
 */
