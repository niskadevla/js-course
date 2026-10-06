import { PRODUCTS, getProductById } from "../data/products.js";
import { updateCartBadge } from "./utils.js";
// import { updateCartBadge as updateCart } from "./utils.js";
import formatPrice from "./utils.js";
import * as Cart from "../data/cart.js";

function renderCatalogPage() {
  const container = document.querySelector('.product-grid');

  if (!container) {
    return;
  }

  container.innerHTML = PRODUCTS.map(product => {
    return `
      <article class="product-card">
        <div class="product-card__image-wrap">
          <img class="product-card__image" src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-card__body">
          <p class="product-card__category">${product.category}</p>
          <h2>${product.name}</h2>
          <p class="price">${formatPrice(product.price)}</p>
          <p class="product-card__color">Color: ${product.color}</p>
          <button type="button" class="btn" data-product-id="${product.id}">Add to cart</button>
        </div>
      </article>
    `;
  }).join('');

  container.addEventListener('click', handleCatalogProductClick)
}

function handleCatalogProductClick(event) {
  const button = event.target.closest('[data-product-id]');
  if (!button) {
    return;
  }

  addToCart(button.dataset.productId);
  animateAddedToCart(button)
}

function addToCart(productId) {
  const product = getProductById(productId);

  if (!product) {
    return;
  }

  const cart = Cart.getCart();
  const existing = cart.find(product => product.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: productId,
      size: product.sizes[0],
      quantity: 1,
    });
  }

  saveCart(cart);
}

function saveCart(cart) {
  Cart.storeCart(cart);
  updateCartBadge();
}

function animateAddedToCart(button) {
  button.textContent = 'Added!';
  setTimeout(() => {
    button.textContent = 'Add to cart'
  }, 1000)
}

function initCatalogPage() {
  renderCatalogPage();
  updateCartBadge();
}

document.addEventListener('DOMContentLoaded', initCatalogPage);
