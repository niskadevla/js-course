let message = "Hello, World!";
message = 123.44

console.log(typeof message);

console.log(1 / 0)
console.log(typeof Infinity)

console.log(NaN ** 0);


console.log(typeof 5454353535354n)

console.log('2 + 2')
console.log(2 + 2)

let str = "double quotes";
let str2 = 'single quotes';
const name = 'Alex';
let templateStr = `My name is ${name}`;
console.log(templateStr);
console.log(`My age ${1 + 13}`)
console.log(typeof 'Строка');

const isLess = 2 < 4;
console.log(isLess)
console.log(typeof isLess)

console.log(typeof null) // object

let city;
console.log(typeof city);

console.log(typeof Symbol('id'));

console.log(typeof Math);

console.log(typeof alert);


/*
ДЗ
5a Что выведется?
Не запускай код. Попробуй определить результат каждого console.log:

let a = "10";
let b = 5;
let c = true;
let d = null;
let e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

Вопрос: что будет выведено в консоль в каждой из пяти строк?

5b Шаблонные строки
let name = "Alex";
let age = 14;
let isStudent = true;


console.log(`Имя: ${name}`);
console.log(`Возраст через 5 лет: ${age + 5}`);
console.log(`Студент: ${isStudent}`);

Задание: напиши, что выведет каждая строка.

 */