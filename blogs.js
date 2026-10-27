const BLOG_STORAGE_KEY = 'labtexBlogsV1';
const defaultBlogImage = 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e7f5?auto=format&fit=crop&w=1000&q=82';
const pipetteTipsGuideTitle = "How to Choose the Right Pipette Tips: A Complete Buyer's Guide for Lab Liquid Handling";
const pipetteTipsGuideCover = 'assets/universal-pipette-tips.png';
const defaultBlogPosts = [{
  id: 'pipette-tips-buyers-guide',
  title: pipetteTipsGuideTitle,
  category: 'Knowledge',
  date: '2026-10-27',
  author: 'INSIGHTPLUS SCIENCE Team',
  cover: pipetteTipsGuideCover,
  excerpt: 'Choose pipette tips with confidence by matching volume, fit, filter type, sterility, and packaging to your liquid handling workflow.',
  published: true,
  content: `
    <p>Pipette tips are a small consumable with a direct effect on liquid handling. The right choice depends on the pipette, the target volume, the sample, contamination risk, and how your team works. Use this guide to compare the practical options before ordering.</p>
    <h2>1. Match the tip to the pipette and volume</h2>
    <p>Start with the pipette model and its operating range. A tip should seat securely, seal consistently, and eject smoothly. “Universal” tips are designed for use with multiple pipette brands, but fit can vary by model. Confirm compatibility with the exact pipette in your lab before placing a large order.</p>
    <p>Choose a tip capacity suited to the volume you dispense. Using a smaller appropriate capacity can help make low-volume work easier to control. For larger transfers, select a tip designed for the required volume and check that it reaches the vessel without touching the sides or bottom.</p>
    <h2>2. Decide whether you need a filter</h2>
    <p>Non-filtered tips are a practical option for routine transfers where aerosol carryover is not a primary concern. Filtered tips include a barrier intended to reduce aerosols and liquid from entering the pipette shaft. They are commonly selected for PCR, nucleic acid work, sensitive assays, and workflows where carryover risk matters.</p>
    <p>A filter does not replace good pipetting practice. Use a fresh tip for each sample, follow the assay’s contamination controls, and verify that the filter and tip specification are suitable for your protocol.</p>
    <h2>3. Check length and access</h2>
    <p>Standard tips suit most tubes and plates. Extended-length tips can help reach into deep tubes, narrow vessels, or containers with tall rims while keeping the pipette body farther from the vessel. Confirm both the tip length and the opening dimensions required by your workflow.</p>
    <h2>4. Choose sterile or non-sterile packaging</h2>
    <p>For routine work, bulk bags can be convenient and space-efficient. Racked tips are easier to handle in plate-based or repetitive workflows and can be loaded into compatible multichannel pipettes. Sterile, individually sealed or boxed options can support workflows that require sterile consumables. Check the product label and documentation for the exact cleanliness claims required by your assay, such as RNase-free, DNase-free, or pyrogen-free.</p>
    <h2>5. Compare the available configurations</h2>
    <p>The INSIGHTPLUS SCIENCE universal tip range includes polypropylene tips in these options. Filter material is polyethylene (PE).</p>
    <ul>
      <li><strong>Non-filtered, standard:</strong> 10 μL, 200 or 1,000 per bag; 200 μL and 300 μL, 200 or 1,000 per bag; 1,000 μL, 100 or 500 per bag; 5 mL, 20 or 300 per bag; 10 mL, 5 or 100 per bag.</li>
      <li><strong>Non-filtered, sterile:</strong> 1 mL, 96 per box or 1,000 per bag; 5 mL and 10 mL, 24 per box or 100 per bag.</li>
      <li><strong>Filtered:</strong> 10 μL and 200 μL, 96 per box or 1,000 per bag; 1 mL, 100 per box or 500 per bag; 5 mL, 28 per box or 150 per bag.</li>
      <li><strong>Filtered, extended length:</strong> 10 μL and 200 μL, 96 per box or 1,000 per bag; 1 mL, 96 per box or 500 per bag.</li>
      <li><strong>Filtered, sterile:</strong> 10 μL, 200 μL, 300 μL, and 1 mL, 96 per box or 1,000 per bag; 5 mL and 10 mL, 24 per box or 100 per bag.</li>
    </ul>
    <h2>6. Verify fit before scaling up</h2>
    <p>Before standardizing a tip across a lab, test representative pipettes from the models in use. Check attachment, seal, ejection, aspiration, dispensing, and access to your vessels. If your work depends on accuracy or low carryover, evaluate the tips in the actual assay workflow and retain the lot documentation.</p>
    <h2>Quick selection checklist</h2>
    <ul>
      <li>Which pipette model and volume range will you use?</li>
      <li>Do you need a filtered barrier for aerosol control?</li>
      <li>Would an extended-length tip improve vessel access?</li>
      <li>Does the protocol require sterile tips or specific cleanliness claims?</li>
      <li>Is bulk, bag, or rack/box packaging the best fit for your workflow?</li>
      <li>Have you checked compatibility with the exact pipette models?</li>
    </ul>
    <p>INSIGHTPLUS SCIENCE offers universal pipette tips compatible with a range of pipette brands, including Eppendorf, Thermo Fisher Scientific, BRAND, Gilson, Sartorius (formerly Biohit), Rainin, and DLAB. Compatibility can vary by pipette model, so contact our team if you need help confirming a specific fit.</p>
  `
}];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function blogCover(post) {
  return post.title === pipetteTipsGuideTitle ? pipetteTipsGuideCover : (post.cover || defaultBlogImage);
}

function getBlogPosts() {
  let posts = [];
  try { const saved = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '[]'); posts = Array.isArray(saved) ? saved : []; }
  catch { posts = []; }
  const defaultIds = new Set(defaultBlogPosts.map(post => post.id));
  const defaultTitles = new Set(defaultBlogPosts.map(post => post.title.toLowerCase()));
  const savedById = new Map(posts.filter(post => defaultIds.has(post.id)).map(post => [post.id, post]));
  const sharedPosts = defaultBlogPosts.map(post => ({...post, ...savedById.get(post.id)}));
  return [...sharedPosts, ...posts.filter(post => !defaultIds.has(post.id) && !defaultTitles.has(String(post.title || '').toLowerCase()))];
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
  const readAction = post.id === 'pipette-tips-buyers-guide'
    ? '<a class="read-article" href="how-to-choose-the-right-pipette-tips.html">Read article <span>→</span></a>'
    : `<button class="read-article" data-open-article="${escapeHTML(post.id)}">Read article <span>→</span></button>`;
  return `<article class="blog-card"><div class="blog-cover" style="background-image:url(&quot;${escapeHTML(cover)}&quot;)"><span class="blog-cover-label">${escapeHTML(post.category)}</span></div><div class="blog-card-body"><div class="blog-meta"><span>${formatDate(post.date)}</span><span>·</span><span>${escapeHTML(post.author || 'INSIGHTPLUS SCIENCE Team')}</span></div><h3>${escapeHTML(post.title)}</h3><p>${escapeHTML(post.excerpt)}</p>${readAction}</div></article>`;
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
