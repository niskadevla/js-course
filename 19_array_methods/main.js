let list = ['Вынести мусор', 'Купить хлеб', 'Сходить к бабушке', 'Сделать уроки'];
// list.splice(1);
// console.log(list);

// list.splice(2, 1);
// console.log(list);
//
// console.log(list.splice(2, 1));
// list.splice(-1, 0, 'Do something',  'Do something 2');
// console.log(list);
// console.log(list.slice(1));
// console.log(list);
// console.warn(list.slice(2,3));

// let arr = [1,4,0,5];
// console.log(arr.includes(4));
// console.log(arr.includes(4, 2));
//
// let arr = [3,1,2,15,2];
// arr.sort();
// console.log(arr);
//
// function compare(a, b)  {
//   return a - b;
// }
//
// arr.sort(compare);
// /*
// compare(3, 1)
//  */
//
// console.log(arr);
// /*
//  if (a > b) return 1
//  if (a == b) return 0
//  if (a < b) return -1
//   */
//
// arr.sort((a,b) => a - b);

let arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);

let str = 'jeans,jacket, hoodie';
let products = str.split(','); //[jeans,jacket]
console.log(products);

for (let product of products) {
  console.log(`Ваш продукт ${product.trim()}`);
}

console.log(products.join(';'))

/*
ДЗ
19a мини Todo List
Есть:
let todos = [
  'Выучить JavaScript',
  'Сделать домашку',
  'Погулять',
  'Посмотреть YouTube'
];

Пользователь закончил выполнять задачу 'Сделать домашку'.

Найди её индекс.
Удали её из списка.
Выведи обновлённый список.

Подсказка: для поиска индекса можно использовать indexOf().

19b
Дан массив:
let numbers = [5, 12, 3, 20, 8, 1];

Создай новый массив, в котором будут первые 3 числа исходного массива, но отсортированные по возрастанию.
Исходный массив менять нельзя.

Ожидаемый результат:
[3, 5, 12]

19c строка → массив → изменение → строка
Есть:
let str = 'apple,banana,orange,kiwi';

Сделай программу, которая:
Превращает строку в массив.
Удаляет 'banana'.
Добавляет 'mango' на её место.
Превращает массив обратно в строку, используя ;.

Результат:
apple;mango;orange;kiwi
 */

