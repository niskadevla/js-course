const CART_KEY = 'styleshop-cart';

function storeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCart() {
  const storedCart = localStorage.getItem(CART_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
}

function getCartItemCount() {
  return getCart().reduce((total, item) => {
    return total + item.quantity;
  }, 0)
}