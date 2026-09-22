const cardCount = null;
console.log(cardCount || 0);
console.log(null || 5 || undefined);

let price = 101;
// Отфильтровать цену от 50 до 100

if (price >= 50 && price <= 100) { // true && false
  console.log('Good price')
}

console.log(NaN && undefined);

console.log(2 && 5 || null && 34) // 5 || null

console.log(!0);

console.log(!!10);

let user;
console.log(0 ?? 'Аноним') // null или undefined

0 && alert('Hello') && alert('Hello')

/*
9a Что выведет код?
let username = "";
let nickname = null;
let age = 0;
console.log(username || "Гость");
console.log(username ?? "Гость");
console.log(age || 18);
console.log(age ?? 18);
console.log(nickname || "Аноним");
console.log(nickname ?? "Аноним");

Напиши все 6 результатов.
Объясни, почему || и ?? по-разному работают с "" и 0.

9b Напиши программу, которая проверяет пользователя:
let age = 16;
let hasTicket = true;
let isBanned = false;

Пользователь может войти, если:
ему 16 лет или больше;
у него есть билет;
он не заблокирован.

Если всё хорошо — вывести:
Вход разрешён

Иначе:
Вход запрещён

Используй &&, ! и сравнение.
 */