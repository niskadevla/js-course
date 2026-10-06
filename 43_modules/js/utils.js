import {getCartItemCount} from '../data/cart.js'

export function updateCartBadge() {
  const badge = document.querySelector('.header__cart-count');
  if (badge) {
    badge.textContent = getCartItemCount();
  }
}

export default function formatPrice(price) {
  return '$' + price.toFixed(2);
}