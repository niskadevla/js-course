function updateCartBadge() {
  const badge = document.querySelector('.header__cart-count');
  if (badge) {
    badge.textContent = getCartItemCount();
  }
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}