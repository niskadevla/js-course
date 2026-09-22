const PRODUCTS = [
  {
    id: '669a76c550f126d9',
    name: 'Classic T-Shirt',
    price: 24.99,
  },
  {
    id: '0b076b364a764e94',
    name: 'Slim Fit Jeans',
    price: 49.99,
  },
  {
    id: '6c3e3d57667463cb',
    name: 'Denim Jacket',
    price: 79.99,
  },
  {
    id: '5d90fdc559fcd0d9',
    name: 'Cotton Hoodie',
    price: 39.99,
  },
];
//
// PRODUCTS.forEach((item, index, array) => {
//   // console.log(' index =', index, ':', item, array);
// });
//
// /*
// function forEach(cb) {
//   cb(item, index, array)
// }
//
//  */
//
// for (let index = 0; index < PRODUCTS.length; index++) {
//   console.log(' index =', index, ':', PRODUCTS[index], PRODUCTS);
// }

/*
const myProduct = PRODUCTS.find((product) => {
  return product.id === '5d90fdc559fcd0d9';
});
console.log(myProduct);
 */


/*
const products = PRODUCTS.filter((product) => product.price < 50);
console.log(products);
 */

/*
const productNames = PRODUCTS.map((product) => product.name);
console.log(productNames);

const arr = PRODUCTS.map((product) => ({
  ...product,
  isWinterClothe: false
}));
console.log(arr);

 */

const result = PRODUCTS.reduce((accum, item, index, array) => {
  return accum + item.price;
}, 0);

/*
accum == 0; item.price == 24.99; result == 24.99
accum = 24.99; item.price == 49.99; result == 74.98;
accum = 74.98; item.price == 79.99 result == 154.97
accum = 154.97; item.price == 39.99; result ==194.96
 */
console.log(result);


/*
ДЗ
20a поиск пользователя
const users = [
    { name: 'Анна', age: 25 },
    { name: 'Иван', age: 17 },
    { name: 'Олег', age: 32 },
    { name: 'Мария', age: 21 }
];

С помощью find найди пользователя, которому 32 года.
Выведи найденного пользователя в консоль.

20b цены со скидкой
const prices = [100, 250, 500, 1000];
Создай новый массив, где каждая цена уменьшена на 20%.

Результат:
[80, 200, 400, 800]

20c Комбо-задача
const products = [
    { name: 'Телефон', price: 800 },
    { name: 'Ноутбук', price: 1500 },
    { name: 'Наушники', price: 100 },
    { name: 'Монитор', price: 400 },
    { name: 'Планшет', price: 700 }
];

Сделай следующее:
С помощью filter оставь товары дороже 500.
С помощью map получи только их цены.
С помощью reduce посчитай общую стоимость этих товаров.

Ожидаемый результат:
3000
 */


