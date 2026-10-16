/*
try {
  console.log('Начало');
  unknownFunction();
} catch (e) {
  console.error('произошла ошибка')
}
console.log('Программа продолжается');
*/

/*
try {
  console.log('Начало');
} catch (e) {
  console.error('произошла ошибка')
}
console.log('Программа продолжается');
 */

/*
try {
  console.log('Начало');
  unknownFunction();
} catch (e) {
  console.log(e.name)
  console.log(e.message)
  console.log(e.stack)

}
console.log('Программа продолжается');

 */

/*
try {
  console.log('Начало');
  // console.log(userName)
  if (
} catch (e) {
  console.log('Не найдена переменная')

}
console.log('Программа продолжается');

 */

/*
try {
  console.log('Начало');
  setTimeout(() => {
    console.log(userName);
  }, 1000)
} catch (e) {
  console.log('Не найдена переменная')

}
console.log('Программа продолжается');

 */

// try {
//   const json = '{name: "T-shirt"}';
//   const product = JSON.parse(json);
//   console.log(product);
// } catch (error) {
//   console.log('Не удалось прочитать данные');
//   console.log(error.message);
// }

/*
const json = '{"price": 24.99}';

try {
  const product = JSON.parse(json);

  if (!product.name) {
    throw new Error('У товара нет названия')
  }

  console.log(product.name);
} catch (error) {
  console.log(error.message);
}

 */

/*
const json = '{"price": 24.99}';

try {
  const product = JSON.parse(json);

  if (!product.name) {
    // throw new Error('У товара нет названия')
  }

  unkonwFunction();
} catch (error) {
  if (error.name === 'Error') {
    console.log(error.message);
  } else {
    throw error;
  }
}
*/

try {
  console.log('Starting try catch...');
  console.log(unkonwName)
} catch {

} finally {
  console.log('Finished try catch...');
}
