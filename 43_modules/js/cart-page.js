import { formatPrice, updateCartBadge } from './utils.js';
import { getCart, storeCart } from '../data/cart.js';
import { getProductById } from '../data/products.js';

function initCartPage() {
  renderCartPage();
  updateCartBadge();
}

function renderCartPage() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (!container || !totalEl) {
    return;
  }

  const cart = getCart();
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    totalEl.textContent = formatPrice(0);
    return;
  }

  cart.forEach((item, index) => {
    const product = getProductById(item.id);
    if (!product) {
      return;
    }

    container.append(createCartItem(item, product, index));
  });

  totalEl.textContent = formatPrice(getTotalPrice(cart));

  container.querySelectorAll('.cart-item__remove').forEach(button=> {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.index)));
  });

  container.querySelectorAll('.cart-item__size').forEach(select => {
    select.addEventListener('change', () => updateCartSize(Number(select.dataset.index), select.value))
  })
}

function getTotalPrice(cart) {
  let total = 0;

  cart.forEach(item => {
    const product = getProductById(item.id);

    if (!product) {
      return;
    }

    total += product.price * item.quantity;
  });

  return total;
}

function createCartItem(item, product, index) {
  const itemsLabel = item.quantity === 1
    ? '1 item'
    : `${item.quantity} items`;
  const sizeOptions = product.sizes.map(size => {
    const selected = size === item.size ? ' selected' : '';
    return `<option value="${size}"${selected}>${size}</option>`
  }).join('');

  const article = document.createElement('article');
  article.className = 'cart-item';
  article.innerHTML = `
    <div class="cart-item__image-wrap">
      <img class="cart-item__image" src="${product.image}" alt="${product.name}">
    </div>
    <div class="cart-item__info">
      <p class="cart-item__category">${product.category}</p>
      <h2 class="cart-item__name">${product.name}</h2>
      <p class="cart-item__description">${product.description}</p>
      <p class="cart-item__meta"><strong>Color:</strong> ${product.color}</p>
      <p class="cart-item__meta"><strong>Items:</strong> ${itemsLabel}</p>
      <label class="cart-item__size-label" for="size-${index}">Size</label>
      <select class="cart-item__size" id="size-${index}" data-index="${index}">
        ${sizeOptions}
      </select>
      <p class="cart-item__price">${formatPrice(product.price * item.quantity)}</p>
      <button type="button" class="btn btn--outline cart-item__remove" data-index="${index}">Remove</button>
    </div>
  `;

  return article;
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
}

function updateCartSize(index, size) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].size = size;
    saveCart(cart);
  }
}

function saveCart(cart) {
  storeCart(cart);
  updateCartBadge();
}

document.addEventListener('DOMContentLoaded', initCartPage);