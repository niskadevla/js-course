/*
function makePizza(callback) {
  console.log('Пицца готовиться...');
  callback();
}

function callCustomer() {
  console.log('📞 Пицца готова!');
}

makePizza(callCustomer);

function foo(item) {
  console.log('$' + item)
}
[1,3,5].forEach(foo);

 */

/*
function loadScript(src) {
  const script = document.createElement('script');

  script.src = src;

  document.head.append(script);
}

loadScript('https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js');

console.log(dayjs().format('DD.MM.YYYY'));

 */

/*
function loadScript(src, callback) {
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => callback();

  document.head.append(script);
}

loadScript(
  'https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js',
  () => {
    console.log(dayjs().format('DD.MM.YYYY'));
  }
);
*/

function loadScript(src, callback) {
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = error => callback(error);

  document.head.append(script);
}

loadScript(
  'https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.j',
  (error, script) => {
    if (error) {
      console.log(new Error('Failed to load script: '))
      console.log(error);
    } else {
      console.log(dayjs().format('DD.MM.YYYY'));
      console.log(script);
    }

  }
);
