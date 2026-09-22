/*
const sayHello = function() {
  console.log('Hello');
}
const user = {
  name: 'John',
  sayHello() {
    console.log('Hello');
  }
}
sayHello();
user.sayHello();

 */

/*
const sayHello = function() {
  console.log('Hello');
}
const user = {
  name: 'John',
  sayHello,
}
sayHello();
user.sayHello();

 */

/*
let user = {
  name: 'John',
  sayHello() {
    console.log(user?.name); // null.name
  }
}
user.sayHello();
user.sayHellossffe?.();

const customer = user;
user = null;
customer.sayHello();

 */


/*
let user = {
  name: 'John',
  sayHello() {
    console.log(this.name);
  }
}

const customer = user;
user = null;
customer.sayHello();

let person = {name: 'Alex'};
let admin = {name: 'Vlad'};
function sayHello() {
  console.log(this.name);
}

person.sayHello = sayHello;
admin.sayHello = sayHello;

person.sayHello()
admin.sayHello();

 */

function sayHi() {
  console.log(this);
}
sayHi();

console.log(window);

let user = {
  name: 'John',
  sayHello: () => {
    console.log(this);
  }
}
user.sayHello();

/*
15.a Изменение свойств
Создай объект:
let calculator = {
  a: 10,
  b: 5
};

Добавь два метода:
sum() — возвращает сумму a + b
multiply() — возвращает произведение a * b

Пример:
console.log(calculator.sum());      // 15
console.log(calculator.multiply()); // 50

Условие: внутри методов используй this.a и this.b.

15.b Метод с изменением объекта
Создай объект:
let user = {
  name: "Alex",
  age: 20
};

Добавь метод birthday(), который увеличивает возраст пользователя на 1.
После:
user.birthday();
user.birthday();

console.log(user.age);
должно вывести: 22

Дополнительное условие: метод должен изменять именно свойство объекта через this.
 */
