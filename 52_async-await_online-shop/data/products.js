let products = [];

export const getProducts = () => products;

export function getProductById(productId) {
  return products.find(product => product.id === productId);
}

// export function loadProducts() {
//   return fetch('./data/products.json')
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Failed to load products.');
//       }
//
//       return res.json();
//     })
//     .then(data => {
//       products = data;
//       return products
//     })
//     .catch(err => {
//       console.log(err.message);
//     })
// }

export async function loadProducts() {
  const response = await fetch('./data/products.json');

  if (!response.ok) {
    throw new Error('Failed to load products.');
  }

  products = await response.json();

  return products;

  // .then(res => {
  //     if (!res.ok) {
  //       throw new Error('Failed to load products.');
  //     }
  //
  //     return res.json();
  //   })
  //   .then(data => {
  //     products = data;
  //     return products
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   })
}
