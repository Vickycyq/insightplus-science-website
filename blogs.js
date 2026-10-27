const BLOG_STORAGE_KEY = 'labtexBlogsV1';
const defaultBlogImage = 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e7f5?auto=format&fit=crop&w=1000&q=82';
const pipetteTipsGuideTitle = "How to Choose the Right Pipette Tips: A Complete Buyer's Guide for Lab Liquid Handling";
const pipetteTipsGuideCover = 'assets/universal-pipette-tips.png';
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function blogCover(post) {
  return post.title === pipetteTipsGuideTitle ? pipetteTipsGuideCover : (post.cover || defaultBlogImage);
}

function getBlogPosts() {
  try { const posts = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '[]'); return Array.isArray(posts) ? posts : []; }
  catch { return []; }
}

function cleanArticleHTML(html = '') {
  const template = document.createElement('template');
  template.innerHTML = html;
  template.content.querySelectorAll('script,style,iframe,object,embed,form').forEach(node => node.remove());
  template.content.querySelectorAll('*').forEach(node => {
    [...node.attributes].forEach(attr => {
      const name = attr.name.toLowerCase();
      if (name.startsWith('on') || (name === 'href' || name === 'src') && /^\s*javascript:/i.test(attr.value)) node.removeAttribute(attr.name);
    });
  });
  return template.innerHTML;
}

function formatDate(value) {
  if (!value) return 'Date to be announced';
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? escapeHTML(value) : new Intl.DateTimeFormat('en', { year:'numeric', month:'short', day:'numeric' }).format(date);
}

function articleCard(post) {
  const cover = blogCover(post);
  return `<article class="blog-card"><div class="blog-cover" style="background-image:url(&quot;${escapeHTML(cover)}&quot;)"><span class="blog-cover-label">${escapeHTML(post.category)}</span></div><div class="blog-card-body"><div class="blog-meta"><span>${formatDate(post.date)}</span><span>·</span><span>${escapeHTML(post.author || 'INSIGHTPLUS SCIENCE Team')}</span></div><h3>${escapeHTML(post.title)}</h3><p>${escapeHTML(post.excerpt)}</p><button class="read-article" data-open-article="${escapeHTML(post.id)}">Read article <span>→</span></button></div></article>`;
}

function renderBlogs() {
  const posts = getBlogPosts().filter(post => post.published);
  ['News','Knowledge'].forEach(category => {
    const categoryPosts = posts.filter(post => post.category === category).sort((a,b) => (b.date || '').localeCompare(a.date || ''));
    const key = category.toLowerCase();
    document.querySelector(`#${key}-count`).textContent = `${categoryPosts.length} ${categoryPosts.length === 1 ? 'article' : 'articles'}`;
    document.querySelector(`#${key}-grid`).innerHTML = categoryPosts.length ? categoryPosts.map(articleCard).join('') : `<div class="blog-empty"><span class="blog-empty-icon">${category === 'News' ? '◷' : '✦'}</span><strong>${category === 'News' ? 'News is on the way' : 'Knowledge articles are on the way'}</strong><p>New ${category.toLowerCase()} articles will appear here when published.</p><a href="blogs-admin.html?category=${category}">Create a ${category} article →</a></div>`;
  });
}

const dialog = document.querySelector('#article-dialog');
document.addEventListener('click', event => {
  const button = event.target.closest('[data-open-article]');
  if (button) {
    const post = getBlogPosts().find(item => item.id === button.dataset.openArticle && item.published);
    if (!post) return;
    document.querySelector('#article-detail').innerHTML = `<div class="article-detail-cover" style="background-image:url(&quot;${escapeHTML(blogCover(post))}&quot;)"></div><div class="article-detail-content"><div class="blog-meta"><span>${escapeHTML(post.category)}</span><span>·</span><span>${formatDate(post.date)}</span><span>·</span><span>${escapeHTML(post.author || 'INSIGHTPLUS SCIENCE Team')}</span></div><h1>${escapeHTML(post.title)}</h1><p class="article-excerpt">${escapeHTML(post.excerpt)}</p><div class="article-rich-content">${cleanArticleHTML(post.content)}</div></div>`;
    dialog.showModal();
  }
  if (event.target.closest('.dialog-close')) dialog.close();
});
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
renderBlogs();

const menu = document.querySelector('.menu-toggle');
if (menu) menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); document.querySelector('.main-nav').classList.toggle('open', !open); });
