const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const categoryRoot = 'Products/';
const categoryList = document.querySelector('#category-list');
categoryList.innerHTML = categoryPages.map(category => `<a class="category-filter" href="${categoryRoot}${category.id}.html">${escapeHTML(category.title)}<span>→</span></a>`).join('');
document.querySelector('#catalog-title').textContent = 'Explore Our Categories';
document.querySelector('#product-count').textContent = `${categoryPages.length} categories`;
document.querySelector('#catalog-grid').innerHTML = categoryPages.map(category => {
  const image = category.image.replace(/^\.\.\//, '');
  return `<article class="catalog-card"><a class="catalog-card-image" href="${categoryRoot}${category.id}.html" aria-label="Browse ${escapeHTML(category.title)}"><img src="${escapeHTML(image)}" alt="${escapeHTML(category.title)}" /></a><div class="catalog-card-body"><h3>${escapeHTML(category.title)}</h3><p>${escapeHTML(category.subtitle)}</p><a class="catalog-card-link" href="${categoryRoot}${category.id}.html">Explore Category <span>→</span></a></div></article>`;
}).join('');
const menu = document.querySelector('.menu-toggle');
if (menu) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('open', !open); });
