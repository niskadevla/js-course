function initPaymentPage() {
  updateCartBadge();
  renderPaymentPage();

  const form = document.getElementById('payment-form');
  if (form) {
    form.addEventListener('submit', handlePaymentSubmit);
  }
}

function renderPaymentPage() {
  const cart = getCart();
  const content = document.getElementById('payment-content');
  const emptyMessage = document.getElementById('payment-empty');
  const itemsContainer = document.getElementById('payment-items');
  const totalElement = document.getElementById('payment-total');

  if (!content || !emptyMessage || !itemsContainer || !totalElement) {
    return;
  }

  if (cart.length === 0) {
    content.hidden = true;
    emptyMessage.hidden = false;
    return;
  }

  content.hidden = false;
  emptyMessage.hidden = true;
  itemsContainer.innerHTML = '';

  cart.forEach(item => {
    const product = getProductById(item.productId);
    if (!product) {
      return;
    }

    const row = document.createElement('div');
    row.className = 'payment-order__item';
    row.innerHTML = `
      <span>${product.name} <small>(${item.size}, ${item.quantity})</small></span>
      <strong>${formatPrice(product.price * item.quantity)}</strong>`;
    itemsContainer.append(row);
  });

  totalElement.textContent = formatPrice(getTotalPrice(cart));
}

function handlePaymentSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity() || getCart().length === 0) {
    return;
  }

  storeCart([]);
  updateCartBadge();
  form.reset();
  document.getElementById('payment-items').innerHTML = '';
  document.getElementById('payment-total').textContent = formatPrice(0);
  document.getElementById('payment-content').hidden = true;
  document.getElementById('payment-success').hidden = false;
}

function getTotalPrice(cart) {
  let total = 0;

  cart.forEach(item => {
    const product = getProductById(item.productId);

    if (!product) {
      return;
    }

    total += product.price * item.quantity;
  });

  return total; // можно переписать на reduce
}

document.addEventListener('DOMContentLoaded', initPaymentPage);
