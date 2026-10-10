const STORAGE_KEY = 'styleshop-cart';

export class Cart {
  #cartKey;
  static storageKey = STORAGE_KEY;

  get cartKey() {
    return this.#cartKey;
  }

  set cartKey(cartKey) {
    this.#cartKey = cartKey;
  }

  constructor(key = STORAGE_KEY) {
    this.#cartKey = key;
  }

  #showKey() {
    return this.#cartKey;
  }

  static createCart(cartKey = STORAGE_KEY) {
    return new this(cartKey);
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
