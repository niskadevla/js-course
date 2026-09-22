'use strict'
/*
sayHello();
function sayHello() {
  console.log('Hello world!');
}
 */

/*
const sayHello = function() {
  console.log('Hello world!');
};
// sayHello();

console.log(sayHello);

let foo = sayHello;
foo();
sayHello();
 */

/*
let price = 5;

if (price > 10) {
  // let a = 5
  function checkPrice() {
    console.log('Дорого')
  }
  checkPrice();
} else {
  function checkPrice() {
    console.log('Дешево')
  }
  checkPrice();
}

// console.log(a)
checkPrice();

 */

/*
let price = 5;
let checkPrice;

if (price > 10) {
  checkPrice = function(a, b) {
    console.log('Дорого')
  }
  checkPrice();
} else {
  checkPrice = function() {
    console.log('Дешево')
  }
  checkPrice();
}


checkPrice();
 */

let sum = (a, b) => {
  console.log(a, b)
  return a + b;
}
console.log(sum(2, 3));

let double = n => n * 2;
console.log(double(2));

let sayHi = () => console.log('Hi')
sayHi()

/*
ДЗ
11a Создай функцию calculate, используя Function Expression.
Функция принимает два числа и строку с операцией:

calculate(10, 5, "+"); // 15
calculate(10, 5, "-"); // 5
calculate(10, 5, "*"); // 50

Если передана неизвестная операция, функция должна вернуть:
"Неизвестная операция"

11b Создай стрелочную функцию isAdult, которая принимает возраст и возвращает:
isAdult(20); // true
isAdult(15); // false

Человек считается взрослым, если ему 18 или больше.
Дополнительное условие: сначала напиши функцию обычным Function Expression:

let isAdult = function(age) {
    // ...
};

А затем перепиши её в стрелочную функцию:
let isAdult = age => ...;
 */