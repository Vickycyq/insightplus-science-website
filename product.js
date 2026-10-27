const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const productId = new URLSearchParams(location.search).get('id');
const product = productCatalog.find(item => item.id === productId);
const root = document.querySelector('#product-detail');
const specificationMarkup = product?.specGroups
  ? product.specGroups.map(group => `<section class="spec-group"><h3>${escapeHTML(group.title)}</h3><div class="spec-table-wrap"><table class="spec-table spec-group-table${group.headers.length <= 2 ? ' spec-group-table-compact' : ''}"><thead><tr>${group.headers.map(header => `<th scope="col">${escapeHTML(header)}</th>`).join('')}</tr></thead><tbody>${group.rows.map(row => `<tr>${row.map(value => `<td>${escapeHTML(value)}</td>`).join('')}</tr>`).join('')}</tbody>${group.footer?.length ? `<tfoot>${group.footer.map(note => `<tr><td colspan="${group.headers.length}">${escapeHTML(note)}</td></tr>`).join('')}</tfoot>` : ''}</table></div></section>`).join('')
  : product ? `<table class="spec-table"><tbody>${product.specs.map(([label,value]) => `<tr><th scope="row">${escapeHTML(label)}</th><td>${escapeHTML(value)}</td></tr>`).join('')}</tbody></table>` : '';
const detailImageMarkup = product?.gallery?.length
  ? `<div class="detail-image-wrap detail-image-gallery">${product.gallery.map((image, index) => `<div class="detail-image-item"><img src="${escapeHTML(image)}" alt="${escapeHTML(product.name)} image ${index + 1}" /></div>`).join('')}</div>`
  : product ? `<div class="detail-image-wrap"><div class="detail-image-item"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" /></div></div>` : '';

if (!product) {
  document.title = 'Product Not Found | INSIGHTPLUS SCIENCE';
  root.innerHTML = `<section class="detail-not-found"><p class="eyebrow">PRODUCT CATALOG</p><h1>We couldn’t find that product.</h1><p>Browse the product catalog to explore available laboratory solutions.</p><a class="button button-primary" href="products.html">Browse Products <span>→</span></a></section>`;
} else {
  document.title = `${product.name} | INSIGHTPLUS SCIENCE`;
  root.innerHTML = `<div class="detail-crumb"><a href="index.html">Home</a><span>›</span><a href="products.html">Products</a><span>›</span>${escapeHTML(product.name)}</div><section class="product-detail-layout">${detailImageMarkup}<div class="detail-copy"><p class="detail-category">${escapeHTML(product.category)}</p><h1>${escapeHTML(product.name)}</h1><p class="detail-intro">${escapeHTML(product.description)}</p><h2 class="spec-title">Product Specifications</h2>${specificationMarkup}<a class="button button-primary detail-quote" href="contacts.html">Get a Quote <span>→</span></a><p class="detail-note">Product configuration and specifications can be discussed with our team to suit your project requirements.</p></div></section>`;
  root.querySelectorAll('.detail-image-item').forEach(item => {
    item.addEventListener('mousemove', event => {
      const bounds = item.getBoundingClientRect();
      item.style.setProperty('--zoom-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      item.style.setProperty('--zoom-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
    });
  });
}
const menu = document.querySelector('.menu-toggle');
if (menu) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('open', !open); });
