const CART_KEY = 'styleshop-cart';

export function storeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
  const storedCart = localStorage.getItem(CART_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
}

export function getCartItemCount() {
  return getCart().reduce((total, item) => {
    return total + item.quantity;
  }, 0)
}