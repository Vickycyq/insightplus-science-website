const htmlEscape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const categoryId = document.body.dataset.category;
const category = categoryPages.find(item => item.id === categoryId);
const visibleCategoryPages = categoryPages.filter(item => item.visible !== false);
const sidebar = document.querySelector('#category-list');
sidebar.innerHTML = visibleCategoryPages.map(item => `<a class="category-filter${item.id === categoryId ? ' active' : ''}" href="${item.id}.html"${item.id === categoryId ? ' aria-current="page"' : ''}>${htmlEscape(item.title)}<span>→</span></a>`).join('');
if (category) {
  document.title = `${category.title} | INSIGHTPLUS SCIENCE`;
  document.querySelector('meta[name="description"]').content = category.subtitle;
  document.querySelector('#category-title').textContent = category.title;
  document.querySelector('#category-subtitle').textContent = category.subtitle;
  const appDescriptions = new Map(category.products.map(([name, description]) => [name, description]));
  const productListings = importedCatalogProducts.filter(product => product.category === category.title);
  const productAppOrder = [];
  for (const product of productListings) if (!productAppOrder.includes(product.application)) productAppOrder.push(product.application);
  const existingAppOrder = category.products.map(([name]) => name);
  const extraAppOrder = productAppOrder.filter(name => !appDescriptions.has(name));
  for (const name of extraAppOrder) {
    appDescriptions.set(name, {
      Spreader: 'Inoculating loops and spreaders for microbial sample transfer and even distribution on culture media.',
      'Test Tubes': 'Plastic test tubes in multiple sizes for sample handling, culture, and routine laboratory testing.',
      'Filter Paper': 'Filter media for routine liquid filtration and laboratory sample preparation.',
      'PCR Plates': 'PCR and qPCR plates for thermal cycling and high-throughput molecular workflows.',
      'Tissue Embedding Cassettes': 'Tissue processing cassettes with labeling areas and slotted or mesh openings for histology workflows.',
    }[name] || `Laboratory products for ${name.toLowerCase()} applications.`);
  }
  const appOrder = [...productAppOrder, ...existingAppOrder.filter(name => !productAppOrder.includes(name)), ...extraAppOrder.filter(name => !productAppOrder.includes(name))];
  const populatedApps = appOrder.filter(name => productListings.some(product => product.application === name));
  const emptyApps = appOrder.filter(name => !populatedApps.includes(name));
  const populatedHtml = populatedApps.map(name => {
    const products = productListings.filter(product => product.application === name);
    const productCards = products.map(product => `<a class="application-product-card" href="../product.html?id=${encodeURIComponent(product.id)}"><img src="${htmlEscape(product.image)}" alt="${htmlEscape(product.name)}" loading="lazy" /><strong>${htmlEscape(product.name)}</strong></a>`).join('');
    return `<section class="application-with-products"><span class="category-product-rule" aria-hidden="true"></span><h2>${htmlEscape(name)}</h2><p class="application-description">${htmlEscape(appDescriptions.get(name) || '')}</p><div class="application-product-grid">${productCards}</div></section>`;
  }).join('');
  const emptyHtml = emptyApps.map(name => `<article class="category-product"><span class="category-product-rule" aria-hidden="true"></span><h2>${htmlEscape(name)}</h2><p>${htmlEscape(appDescriptions.get(name) || '')}</p></article>`).join('');
  document.querySelector('#category-count').textContent = `${appOrder.length} product applications`;
  document.querySelector('#category-products').innerHTML = `${populatedHtml}${emptyHtml ? `<div class="category-product-grid category-empty-apps">${emptyHtml}</div>` : ''}`;
}
const footerLinks = document.querySelector('#category-footer-links');
if (footerLinks) footerLinks.innerHTML = `<b>Products</b>${visibleCategoryPages.map(item => `<a href="${item.id}.html">${htmlEscape(item.title)}</a>`).join('')}`;
const menu = document.querySelector('.menu-toggle');
if (menu) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('open', !open); });
