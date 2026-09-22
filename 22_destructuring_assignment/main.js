/*
let user = {
  name: 'Alex',
  age: 25,
};

// let name = user.name;
// let age = user.age;


let {name, age} = user;

console.log(name);
console.log(age);
*/

/*
let fruits = ['Apple', 'Banna', 'Orange'];
let [first, second, third] = fruits;

let first = fruits[0];
let second = fruits[1];

 */
/*
let fruits = ['Apple', 'Banna', 'Orange'];
let [first, , third] = fruits;

console.log(first);
console.log(third);

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr] ;
*/

/*
let numbers = [10, 20, 30, 40, 50];

let [a, b, ...otherNumbers] = numbers;
console.log(a)
console.log(b)
console.log(otherNumbers);

 */

/*
let [name = 'Unknown', age = 18] = ['Alex'];
if (age === undefined) {
  age = 18
}
console.log(name);
console.log(age);
*/

/*
let user = {
  name: 'Alex',
  age: 18,
  city: 'London'
};

let {age, name, city} = user;

console.log(name);
console.log(age);
console.log(city);

 */

/*
let user = {
  name: 'Alex',
  age: 18,
  city: 'London'
};

let { name: userName } = user;
// let userName = user.name;
console.log(userName);
console.log(name);

 */

/*
let user = {
  name: 'Alex',
};

let {name, age = 18} = user;

console.log(name);
console.log(age);

 */

/*
let user = {
  name: 'Alex',
};

let {name: userName, age: userAge = 18} = user;
// let userName = user.name

console.log(userName);
console.log(userAge);

 */

/*
let fulname = 'Alex Smith';

let [firstName, lastName] = fulname.split(' ');

console.log(firstName);
console.log(lastName);

 */

// let a = 10;
// let b = 20;
//
//
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

const employees = {
  'Den': 1000, // property - key : value
  'Max': 2000,
  'Vlad': 3000,
};

const doubleSalaries = Object.entries(employees).map(([key, value]) => [key, value * 2]);
console.log(doubleSalaries);

let numbers = [10, 20, 30];
let [a, b] = numbers;
console.log(numbers);




function createUser({ name, age = 18, city = 'Paris' }) {
  console.log(`Имя: ${name}`);
  console.log(`Возраст: ${age}`);
  console.log(`Город: ${city}`);
}

createUser({
  name: 'Alex',
  age: 25
});

/*
ДЗ Переименование
Есть объект:
let product = {
    title: "Laptop",
    price: 3000,
    category: "Electronics"
};

С помощью деструктуризации создай переменные с другими именами:
productName // "Laptop"
productPrice // 3000

category получать не нужно.
 */