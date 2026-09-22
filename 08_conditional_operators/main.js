let password = 12345;

if (password !== 123) console.log('Вам доступ запрещен');

if (password !== 12345) {
  console.log('Вам доступ запрещен');
  console.log('Вам доступ запрещен');
  console.log('Вам доступ запрещен');
}

if (2) {
  console.log('Hello')
}

let age = 19;
/*
if (age < 18) {
  console.log('Доступ запрещен')
} else {
  console.log('Доступ разрешен')
}
*/
/*
age = 19;
if (age < 18) {
  console.log('Доступ запрещен')
} else if(age === 100) {
  console.log('Вы уверены?')
} else if(age > 100) {
  console.log('Вы уверены? не может быть')
} else {
  console.log('Доступ разрешен')
}
*/
let message = '';
age = 14;
/*
message = age < 18 ? 'Доступ запрещен' : 'Доступ разрешен';
console.log(message);
age < 18 ? console.log('Доступ запрещен') : 'Доступ разрешен';
*/
// if (age < 18) {
//   console.log('Доступ запрещен')
// } else if(age > 100) {
//   console.log('Вы уверены? не может быть')
// } else {
//   console.log('Доступ разрешен')
// }

age = 100;
age < 18
  ? console.log('Доступ запрещен')
  : (age > 100)
    ? console.log('Вы уверены? не может быть')
    : console.log('Доступ разрешен')

const num = '1';
/*
if (num === 1) {
  console.log('Small')
} else if (num === 2) {
  console.log('Win')
} else {
  console.log('Large')
}
 */

switch (num) {
  case 1: // '1' === 1
    console.log('Small');
    break;
  case 2:
    console.log('Win');
    break;
  default:
    console.log('Large')
}

/*
ДЗ
8a if...else — самое большое число
Есть три числа:
let a = 15;
let b = 8;
let c = 15;

Напиши программу с помощью if...else, которая определяет наибольшее число.
Например:
Наибольшее число: 15
Дополнительно: если несколько чисел одинаковые и
являются максимальными — это тоже должно корректно работать.

8b switch — день недели
Создай переменную:
let day = 3;
Используя switch, выведи:
1 → Понедельник
2 → Вторник
3 → Среда
4 → Четверг
5 → Пятница
6 → Суббота
7 → Воскресенье

Если введено другое число: Неизвестный день
 */