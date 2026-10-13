export class Products {
  #products = [];

  getProducts() {
    return this.#products;
  }

  getProductById(productId) {
    return this.#products.find(product => product.id === productId);
  }

  async loadProducts() {
    const response = await fetch('./data/products.json');

    if (!response.ok) {
      throw new Error('Failed to load products.');
    }

    this.#products = await response.json();

    return this.#products;
  }
}

const productsManager = new Products();

const products = await productsManager.loadProducts();
console.log(products)







