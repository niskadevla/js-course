import { Cart } from './cart.js';

const STORAGE_KEY = 'styleshop-favorites';

export class Favorites extends Cart {
  static storageKey = STORAGE_KEY;

  constructor() {
    super(STORAGE_KEY);
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

const favoritesManager = new Favorites();
console.log(favoritesManager);
console.dir(Favorites);
console.log(Favorites.storageKey);

console.dir(Favorites);
console.log(Favorites.createCart(Favorites.storageKey));

// console.log(favoritesManager.#cartKey);
// const cart = new Cart();
// console.log(cart.#showKey())

class User {}

const user = new User();

console.log(favoritesManager instanceof Favorites);
console.log(favoritesManager instanceof Cart);
console.log(user instanceof Cart);