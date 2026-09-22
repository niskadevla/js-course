const employees = {
  'Den': 1000, // property - key : value
  'Max': 2000,
  'Vlad': 3000,
};
/*
Object.keys(employees);
Object.values(employees);
Object.entries(employees);

const salaries = Object.values(employees);
console.log(salaries);

let sum = 0;
for (let salary of salaries) {
  sum = sum + salary;
  // sum = 0 + 1000;
  // sum = 1000 + 2000;
  // sum = 3000 + 3000;
}
console.log(sum);

 */

const names = Object.keys(employees);
console.log(names);

names.forEach(name => console.log(name));
// function forEach(cb) {
// cb('Den')
// }

// console.log(Object.entries(employees));

const doublePrices = Object.entries(employees).map(employee => {
  // console.log(employee);
  const key = employee[0];
  const value = employee[1];
  console.log([key, value * 2]);
  return [key, value * 2];
});

console.log(doublePrices);

console.log(Object.fromEntries(doublePrices));


/*
ДЗ
21a найти пользователя старше 18
let users = {
    Alex: 25,
    John: 17,
    Maria: 30,
    Peter: 16,
    Anna: 22
};

Выведи имена всех пользователей, которым 18 лет или больше:
Alex
Maria
Anna

21b найти самый дорогой товар
let products = {
    phone: 800,
    laptop: 1200,
    tablet: 500,
    headphones: 150
};

Найди самую большую цену.

Ожидаемый результат:
1200
 */




