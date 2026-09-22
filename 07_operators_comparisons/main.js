console.log(5 * 2);
console.log(-5)
console.log( 3 % 2);
console.log(2 ** 3);
console.log(2 ** (1/2));
console.log(Math.sqrt(4))

console.log('Hi' + ' Hello' + ' World');
console.log(4 + 1 + '2') // 52

console.log(5 - '2');
console.log(+'2' + +'3') // 5
const value = 2 + 3;
console.log(value);

let n = 1;
// n = n + 1;
n += 1;
console.log(n); // 2
n++;
console.log(n) // 3
n--;
console.log(n) // 2

let i = 0;
console.log(i++); // вывод на экран 0 но  i = 1
console.log(i);
console.log(++i); // i = 2 и выводится тоже 2
console.log(i); // 2

let a  = 2;
// a = a * a
a *= a;
console.log(a)

const b = (2 + 1, 5 + 1);
console.log(b);

// Операторы сравнения
const age = 14;
console.log(age > 18); // false

console.log('z' > 'a');
console.log('01' == 1)
console.log(false == 0);
console.log(null == undefined);
console.log(null == null);

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0); // 0 больше или равен 0

console.log(NaN === NaN);

console.log(true === 1)

/*
ДЗ
7a
Что выведет код? Не запускай его, сначала посчитай вручную:

let a = 10;
let b = 3;
let result = a % b + a / b;
console.log(result);

Вопрос: какой будет результат и почему?

7b
Определи, где будет true, а где false:

console.log(5 > 3);
console.log(10 == "10");
console.log(10 === "10");
console.log(7 != "7");
console.log(7 !== "7");
console.log("ананас" > "яблоко");

Дополнительно: объясни разницу между == и ===.
 */