/*
let str = 'Home';
console.log(str.toUpperCase());

console.log(str.length);

console.log(str[0]);

console.log(str.at(-2));

for (let char of str) {
  console.log(char)
}

str[0] = 's';
console.log(str);

 */

/*
let product = {
  name: 'Slim Fit Jeans',
  price: 49.99,
};
console.log(product.name.toLowerCase())
if (product.name.toLowerCase().includes('jeans')) { //
  console.log(product)
}

console.log('Slim Fit Jeans'.slice(5, 8));

console.log(' Cart   ' + 's');
console.log(' Cart   '.trim() + 's');
*/

let price = 24.989;
console.log(price)
console.log(price.toFixed(2));

price = 24.955;
console.log(price.toFixed(2));

console.log((0.1 + 0.2) === 0.3 );
// alert(0.1 + 0.2);

console.log(Number(price.toFixed(2)) + 34);

console.log(Math.round(price * 100) / 100);


/*
ДЗ
17a Сделать красивое имя
Дана строка:
let name = "  ivan  ";

Получить:
Ivan

То есть нужно:
убрать пробелы по краям;
первую букву сделать заглавной;
остальные буквы оставить строчными.

17b Скрыть часть номера телефона
Дана строка:
let phone = "+48123456789";

Выведи:
+48******789

Используй slice()

17c
Дана строка:
let text = "JavaScript is awesome!";

Напиши программу, которая выводит:
Длина: 23
Первый символ: J
Последний символ: !
Есть слово JavaScript: true
Верхний регистр: JAVASCRIPT IS AWESOME!

Здесь нужно самостоятельно подобрать несколько свойств и методов строк.
 */

