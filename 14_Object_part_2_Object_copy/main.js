/*
let a = 5;
let b = a;
a = 23;
console.log(b);
console.log(a);

 */

/*
let obj1 = {v: 32};
let obj2 = obj1;
console.log(obj1.v)
console.log(obj2.v)
obj1.v = 0;
console.log(obj1.v)
console.log(obj2.v)

 */
/*
let a = 5;
let b = 5;
console.log(a === b);

 */
/*
let o1 = {a: 5};
let o2 = {a: 5};
console.log(o1 === o2);
let o3 = o1;
console.log(o3 === o1)
*/
let user = {name: 'John', age: 34};
let clonedUser = {};
/*
for (let key in user) {
  clonedUser[key] = user[key];

  let value = user.name // 'John'
  // clonedUser.name = value 'John'

}
clonedUser.name = 'Den';
console.log(user.name)
console.log(clonedUser === user);
*/
/*
clonedUser = Object.assign({},user);
user.age = 10;
console.log(clonedUser.age)
 */
/*
clonedUser = {...user};
user.name = 'Vlad';
console.log(clonedUser.name)

 */

// user = {name: 'John', age: 34, address: {city: 'London'}};
/*
clonedUser = {...user};
clonedUser.address.city = 'Paris';
console.log(user.address.city)
console.log(clonedUser.address.city)

 */
/*
clonedUser = structuredClone(user);
clonedUser.address.city = 'Paris';
console.log(user.address.city)
console.log(clonedUser.address.city)

 */

user = {name: 'John', age: 34, foo: alert, address: {city: 'London'}};
clonedUser = structuredClone(user);
clonedUser.address.city = 'Paris';
console.log(user.address.city)
console.log(clonedUser.address.city);

/*
ДЗ
14a Копирование по ссылке
Что выведет код и почему?

let user = {
  name: "Alex",
  age: 20
};
let admin = user;

admin.name = "Bob";
admin.age = 25;

console.log(user);
console.log(admin);
console.log(user === admin);

Дополнительное задание: измени код так, чтобы admin был независимой копией user.
 */