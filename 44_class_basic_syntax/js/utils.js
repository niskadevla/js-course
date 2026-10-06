import { Cart } from '../data/cart.js'

const cartManager = new Cart('styleshop-favorite');

export function updateCartBadge() {
  const badge = document.querySelector('.header__cart-count');
  if (badge) {
    badge.textContent = cartManager.getCartItemCount();
  }
}

export default function formatPrice(price) {
  return '$' + price.toFixed(2);
}