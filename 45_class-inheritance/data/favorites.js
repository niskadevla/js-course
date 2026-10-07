import { Cart } from './cart.js'
console.log('Favorites');

export class Favorites extends Cart {
  constructor() {
    super('styleshop-favorites');
    console.log('Key = ',this.cartKey);
  }

  getCart() {
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

const favorites = new Favorites();

// favorites.storeCart([1,2,10]);
//
console.log(favorites.getCart());
// console.log(favorites);

console.log(favorites.getCartItemCount())

console.log(favorites.hasItems());