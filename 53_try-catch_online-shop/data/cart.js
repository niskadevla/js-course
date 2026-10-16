const STORAGE_KEY = 'styleshop-cart';

export class Cart {
  #cartKey;

  constructor(key = STORAGE_KEY) {
    this.#cartKey = key;
  }

  storeCart(cart) {
    localStorage.setItem(this.#cartKey, JSON.stringify(cart));
  }

  getCart() {
    const storedCart = localStorage.getItem(this.#cartKey);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  getCartItemCount() {
    return this.getCart().reduce((total, item) => {
      return total + item.quantity;
    }, 0)
  }
}
