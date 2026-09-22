/*
const category = 'Tops';
const name = 'Classic T-Shirt';
const description = '100% organic cotton with a regular fit. Soft, breathable, and perfect for everyday wear.';

// const product = new Object();
const product = {
  category: 'Tops',
  name: 'Classic T-Shirt',
  description: '100% organic cotton with a regular fit. Soft, breathable, and perfect for everyday wear.',
};

console.log(product.description);
product.color = 'White';
console.log(product);

delete product.category;
console.log(product.category);
console.log(product.fefefedfew);

console.log('category' in product);
 */
/*
const user = {
  name: 'Влад',
  age: 18,
  isAdmin: true,
  address: {
    city: 'New York',
    street: 'Henry Ford',
    apartment: 34,
  },
  'my favorite music': 'Classic'
}

console.log(user['my favorite music']);

let myKey = prompt('What key do you want to add?');
let myValue = prompt('What value do you want to add?', '');
user[myKey] = myValue; // user.myHobbie = 'Dance'
console.log(user);
 */

let obj = {
  NaN: 4534453,
  48: 'Poland',
  null: null,
  true: true,
  [2 + 3]: 5353454
};

console.log(obj);

for (let prop in obj) {
  // prop = 5;
  // prop = 48
  console.log(prop, ' : ',obj[prop]); // obj[prop] => obj.'5'; obj.48; obj.NaN
}


/*
ДЗ
13a Создай объект:
let user = {
  name: "Alex",
  age: 20,
  city: "London"
};

Сделай следующее:
Выведи имя пользователя.
Измени age на 21.
Добавь свойство isStudent со значением true.
Удали свойство city.
Проверь с помощью in, существует ли свойство city.
Выведи все свойства и их значения через for...in.

Ожидаемый результат примерно такой:
Alex
false
name: Alex
age: 21
isStudent: true

13b Корзина покупок
Есть объект:
let cart = {
  apple: 5,
  banana: 3,
  orange: 7
};

Напиши код, который:
Выводит количество яблок.
Увеличивает количество бананов на 2.
Добавляет новый товар milk со значением 1.
Удаляет orange.
С помощью for...in выводит все товары и их количество.
Посчитает общее количество всех товаров в корзине.

В конце должно получиться:
apple: 5
banana: 5
milk: 1

Всего товаров: 11

Подсказка: для последнего пункта заведи переменную sum = 0 и в цикле прибавляй cart[key].
 */
