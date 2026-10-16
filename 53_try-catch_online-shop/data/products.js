let products = [];

export const getProducts = () => products;

export function getProductById(productId) {
  return products.find(product => product.id === productId);
}

export async function loadProducts() {
  try {
    const response = await fetch('./data/products.jsond');

    if (!response.ok) {
      throw new Error('Failed to load products.');
    }

    products = await response.json();

    return products;
  } catch (error) {
    alert(error.message)
  } finally {
    console.log('Finished loading products...');
  }
}
