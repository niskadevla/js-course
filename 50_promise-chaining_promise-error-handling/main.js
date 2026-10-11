/*
console.log('Start')

new Promise((resolve, reject) => {
  // resolve(1)
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  console.log(result);
  return 2;
  // return new Promise((resolve, reject) => resolve(2));
}).then(function(result) {
  console.log(result);
  return 3;
}).then(function(result) {
  console.log(result);
  return 4;
});

console.log('Finish');

 */

/*
const promise = new Promise((resolve, reject) => {
  // resolve(1)
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  console.log(result);
  return 2;
  // return new Promise((resolve, reject) => resolve(2));
})

promise.then(function(result) {
  console.log(result);
  return 3;
  // return new Promise((resolve, reject) => resolve(2));
})

 */

/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  console.log(result);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
  });
}).then(function(result) {
  console.log(result);
  return 3;
}).then(function(result) {
  console.log(result);
  return 4;
});

promise.then((result) => console.log(result));

 */

/*
function loadScript(src, callback) {
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = error => callback(error);

  document.head.append(script);
}

loadScript('js/1.js',
  (error, script) => {
    if (error) {
      console.log(new Error('Failed to load script: '))
      console.log(error);
    } else {
      console.log(dayjs().format('DD.MM.YYYY'));
      console.log(script);
      loadScript('js/2.js', (error, script) => {
        if (error) {
          console.log(new Error('Failed to load script: '))
          console.log(error);
        } else {
          console.log(dayjs().format('DD.MM.YYYY'));
          console.log(script);
          loadScript('js/2.js', )
        })
    }

  }
);
*/

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    console.log('Loading...')

    setTimeout(() => {
      const script = document.createElement('script');

      script.src = src;
      script.onload = () => resolve(script);
      script.onerror = error => reject(new Error(`Ошибка загрузки ${src}`));

      document.head.append(script);
    }, 1000)
  })
}


// loadScript('js/1.js')
// loadScript('js/2.js')
// loadScript('js/3.js')
/*
loadScript('js/1.js')
  .then(script => loadScript('js/2.js'))
  .then(script => loadScript('js/3.js'))
  .then(script => {
    one();
    two();
    three();
  })

 */

// one();
// two();
// three();

/*
const AppleDelivery = {
  deliver() {
    return {
      then(resolve, reject) {
        setTimeout(() => {
          resolve('📱 iPhone доставлен!');
        }, 2000);
      },

      cancel() {
        console.log('Доставка отменена');
      }
    };
  }
};

// Наш код
AppleDelivery.deliver()
  .then((message) => {
    console.log(message);
  });
*/

/*
loadScript('js/1.js')
  .then(script => loadScript('js/2.j'))
  .catch(error => console.log(error))
  .then(script => loadScript('js/3.js'))
  .then(script => {
    console.log('Finished');
    console.log(script)
    one();
    two();
    three2();
  })
  .catch(error => {
    console.log('Error!!!!');
    return 'From final catch'
  })
  .finally((arg) => {
    console.log('Arg', arg)
    console.warn('Clean!')
    return 'Finally'
  })
  .then(result => console.log(result))


 */

loadScript('js/12.js')
  .catch(error => {
    console.log('First error');
    throw new Error('From first catch')
  })
  .catch(error => {
    console.log('Second error!');
    return 'From final catch'
  })
  .then(result => console.log(result))
