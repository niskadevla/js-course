// function makePizza() {
//   return new Promise((resolve, reject) => {
//     console.log('Пицца готовиться...');
//     // resolve('Сразу готово')
//     setTimeout(() => {
//       resolve('Done');
//       reject(new Error('Пицца подгорела'));
//     }, 1000);
//   })
//
//
// }
//
// function callCustomer() {
//   console.log('📞 Пицца готова!');
// }
//
// const promise = makePizza();

// promise.then(
//   (result) => {
//     console.log(result);
//     callCustomer();
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// promise
//
//   .then((result) => {
//     console.log(result);
//     callCustomer();
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => console.log('Сделай уборку'));

function loadScript(src ) {
  return new Promise(function(resolve, reject) {
    console.log('Loading...')
    const script = document.createElement('script');

    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = error => reject(new Error(`Ошибка загрузки ${src}`));

    document.head.append(script);
  })
}

const promise = loadScript('https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js');

promise
  .then(script => console.log('Загружен' + script.src))
  .catch(error => console.log(error))

console.log(promise)

