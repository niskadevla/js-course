import { Cart } from './cart.js'

export class Favorites extends Cart {
  constructor() {
    super('styleshop-favorites');
    console.log('Key = ',this.cartKey);
  }

  getFavorites() {
    console.log('getCart from Favorites');
    return super.getCart();
  }

  getCartItemCount() {
    return this.getCart().length;
  }

  hasItems() {
    return this.getCart().length > 0;
  }
}