/*
function makePizza(callback) {
  console.log('Пицца готовиться...');
  callback?.()
}

function callCustomer() {
  console.log('📞 Пицца готова!');
}

// makePizza(callCustomer);

makePizza(() => {
  console.log('📞 Пицца готова!');
});
*/

/*
function cook(callback) {
  console.log('Еда готовиться...');
  const dish = '🍕 Пицца';
  callback(dish);
}

cook(function(dish) {
  console.log(`Ваш заказ: ${dish}`);
});
 */

setTimeout(() => {
  console.log('Прошло 2 секунды')
}, 3000);


/*
ДЗ
18a Выполнение действия
Создай функцию doSomething, которая принимает два параметра:
число;
callback-функцию.

Функция должна передать число в callback.
Например:
doSomething(10, function(number) {
    console.log(number * 2);
});
// 20

А затем попробуй использовать её с другим callback:
doSomething(10, function(number) {
    console.log(number + 5);
});
// 15

💡 Главная задача: понять, что doSomething не знает, что именно делать с числом. Это решает callback.
 */