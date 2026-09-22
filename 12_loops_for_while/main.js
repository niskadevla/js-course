/*
let i = 3;
while (i) alert(i--);
 */

/*
if (3) alert(3)
i = 2;
if (2) alert(2)
i = 1;
if (1) alert(1);
i = 0
if (0) //Exit

 */

/*
let i = 0;
do {
  console.log(i++);
} while (i < 3);
 */

/*
for (let i = 0; i < 3; i++) {
  console.log(i);
}
 */
// console.log(i);
/*
let i = 0;
if (i < 3) { // 0 < 3
alert(i); // 0
i++;
}

if (1<3) alert (1);
i = 2
if (2<3) alert(2);
i = 3
if (3<3){} // exit
 * */
/*
for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1
  if (i === 1) break;
}
*/
/*
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i)
}
 */
/*
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(' i n', i, j)
  }
}
 */

/*
ДЗ
12a Есть число:
let num = 30;

С помощью for выведи все числа от 1 до num, которые делятся на 3 без остатка.
Ожидаемый результат:

3
6
9
12
...
30

Подсказка: проверь деление с помощью %.

12b Замените for на while в предыдущей задачи
 */

for (let n = (alert('Hello'), 0); n < 3; n++) {
  console.log(n);
  n = n + 5
  console.log(n);
}