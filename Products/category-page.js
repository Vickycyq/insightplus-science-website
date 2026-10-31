const htmlEscape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const categoryId = document.body.dataset.category;
const category = categoryPages.find(item => item.id === categoryId);
const sidebar = document.querySelector('#category-list');
sidebar.innerHTML = categoryPages.map(item => `<a class="category-filter${item.id === categoryId ? ' active' : ''}" href="${item.id}.html"${item.id === categoryId ? ' aria-current="page"' : ''}>${htmlEscape(item.title)}<span>→</span></a>`).join('');
if (category) {
  document.title = `${category.title} | INSIGHTPLUS SCIENCE`;
  document.querySelector('meta[name="description"]').content = category.subtitle;
  document.querySelector('#category-title').textContent = category.title;
  document.querySelector('#category-subtitle').textContent = category.subtitle;
  document.querySelector('#category-count').textContent = `${category.products.length} product types`;
  document.querySelector('#category-products').innerHTML = category.products.map(([name, description]) => `<article class="category-product"><span class="category-product-rule" aria-hidden="true"></span><h2>${htmlEscape(name)}</h2><p>${htmlEscape(description)}</p></article>`).join('');
}
const footerLinks = document.querySelector('#category-footer-links');
if (footerLinks) footerLinks.innerHTML = `<b>Products</b>${categoryPages.map(item => `<a href="${item.id}.html">${htmlEscape(item.title)}</a>`).join('')}`;
const menu = document.querySelector('.menu-toggle');
if (menu) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('open', !open); });
