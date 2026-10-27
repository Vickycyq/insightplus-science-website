const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const productItems = productCatalog.filter(product => product.type === 'product');
const categoryNames = [...new Set(productCatalog.filter(product => product.type === 'category').map(product => product.category))];
let selectedCategory = 'All Products';
const categoryList = document.querySelector('#category-list');
categoryList.innerHTML = ['All Products', ...categoryNames].map(category => {
  const count = category === 'All Products' ? productItems.length : productItems.filter(product => product.category === category).length;
  return `<button class="category-filter${category === selectedCategory ? ' active' : ''}" type="button" data-category="${escapeHTML(category)}">${escapeHTML(category)}<span>${count}</span></button>`;
}).join('');

function renderCatalog() {
  const products = selectedCategory === 'All Products' ? productItems : productItems.filter(product => product.category === selectedCategory);
  document.querySelector('#catalog-title').textContent = selectedCategory;
  document.querySelector('#product-count').textContent = `${products.length} ${products.length === 1 ? 'product' : 'products'}`;
  document.querySelector('#catalog-grid').innerHTML = products.length ? products.map(product => {
    const detailUrl = `product.html?id=${encodeURIComponent(product.id)}`;
    return `<article class="catalog-card"><a class="catalog-card-image" href="${detailUrl}" aria-label="View details for ${escapeHTML(product.name)}"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" /></a><div class="catalog-card-body"><span class="catalog-card-category">${escapeHTML(product.category)}</span><h3>${escapeHTML(product.name)}</h3><div class="catalog-card-actions"><a class="catalog-card-details" href="${detailUrl}">View Details</a><a class="catalog-card-quote" href="contacts.html">Get a Quote</a></div></div></article>`;
  }).join('') : '<div class="catalog-empty">No products found in this category.</div>';
}
categoryList.addEventListener('click', event => {
  const button = event.target.closest('[data-category]'); if (!button) return;
  selectedCategory = button.dataset.category;
  categoryList.querySelectorAll('.category-filter').forEach(item => item.classList.toggle('active', item === button));
  renderCatalog();
});
renderCatalog();
const menu = document.querySelector('.menu-toggle');
if (menu) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('open', !open); });
