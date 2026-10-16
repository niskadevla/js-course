/*
console.log('Загружаем страницу...');

setTimeout(() => {
  console.log('Страница готова!');
}, 2000);

console.log('Продолжаем выполнение кода');

 */

/*
console.log('Загружаем страницу...');

setTimeout((text) => {
  console.log(text);
}, 2000, 'Страница готова!!!');

console.log('Продолжаем выполнение кода');

 */

/*
console.log('Загружаем страницу...');

const showMessage = (text) => {
  console.log(text);
}

setTimeout(showMessage, 2000, 'Страница готова!!!');

console.log('Продолжаем выполнение кода');

 */

// const timerId = setTimeout(function() {
//   console.log('Hello')
// }, 1000);
//
// console.log(timerId);
//
// clearTimeout(timerId);

// setInterval(function() {
//   console.log('Hello ')
// }, 1000)

/*
let seconds = 0;

const timerId = setInterval(() => {
  seconds++;

  console.log(`Прошло секунд: ${seconds}`);

  if (seconds === 5) {
    clearInterval(timerId);
    console.log('Счётчик остановлен');
  }
}, 1000);

 */

/*
console.log('Start')

setTimeout(() => {
  console.log('Timer')
}, 0);

console.log('Finish');

 */

/*
setTimeout(function () {
  alert('Hello');

  setTimeout(function () {
    alert('Second')
  }, 1000)
}, 1000);

 */

// setInterval(function() {
//   alert('Hello')
// }, 1000)

/*
Домашнее задание
54.a Что выведет код?
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

console.log('C');

54.b Сколько раз выполнится колбэк?
let timerId = setInterval(() => {
  console.log('Hi');
  clearInterval(timerId);
}, 1000);


 */

