export class Cart {
  _cartKey = 'styleshop-cart';
  static storageKey = 'styleshop-cart';

  get cartKey() {
    return this._cartKey;
  }

  set cartKey(cartKey) {
    this._cartKey = cartKey;
  }

  constructor(key = this._cartKey) {
    this._cartKey = key;
  }

  static createCart(cartKey = this.storageKey) {
    return new Cart(cartKey);
  }

  storeCart(cart) {
    localStorage.setItem(this._cartKey, JSON.stringify(cart));
  }

  getCart() {
    const storedCart = localStorage.getItem(this._cartKey);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  getCartItemCount() {
    return this.getCart().reduce((total, item) => {
      return total + item.quantity;
    }, 0)
  }
}
