export class Cart {
  _cartKey;

  get cartKey() {
    return this._cartKey;
  }

  set cartKey(cartKey) {
    this._cartKey = cartKey;
  }

  constructor(key = 'styleshop-cart') {
    this._cartKey = key;
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