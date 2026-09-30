console.log('Loaded main ')
function renderCatalogPage() {
  console.log('Rendered')
  const container = document.querySelector('.product-grid');
  console.log(container);

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
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}

function initCatalogPage() {
  console.log('Loaded init catalog')
  renderCatalogPage();
}

document.addEventListener('DOMContentLoaded', initCatalogPage);
