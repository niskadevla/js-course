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
  })
}

function createCartItem(item, product, index) {
  const article = document.createElement('article');
  article.className = 'cart-item';
  article.innerHTML = `
    <div class="cart-item__image-wrap">
      <img class="cart-item__image" src="images/tshirt.jpg" alt="Classic T-Shirt">
    </div>
    <div class="cart-item__info">
      <p class="cart-item__category">Tops</p>
      <h2 class="cart-item__name">Classic T-Shirt</h2>
      <p class="cart-item__description">100% organic cotton with a regular fit. Soft, breathable, and perfect for everyday wear.</p>
      <p class="cart-item__meta"><strong>Color:</strong> White</p>
      <p class="cart-item__meta"><strong>Items:</strong> 1 item</p>
      <label class="cart-item__size-label" for="size-0">Size</label>
      <select class="cart-item__size" id="size-0" data-index="0">
        <option value="S" selected="">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option>
      </select>
      <p class="cart-item__price">$24.99</p>
      <button type="button" class="btn btn--outline cart-item__remove" data-index="0">Remove</button>
    </div>
  `;

  return article;
}

document.addEventListener('DOMContentLoaded', initCartPage);