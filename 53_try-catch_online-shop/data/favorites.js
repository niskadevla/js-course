import { Cart } from './cart.js';

const STORAGE_KEY = 'styleshop-favorites';

export class Favorites extends Cart {
  constructor(key = STORAGE_KEY) {
    super(key);
  }

  getFavorites() {
    return super.getCart();
  }
}