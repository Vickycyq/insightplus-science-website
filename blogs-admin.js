const BLOG_STORAGE_KEY = 'labtexBlogsV1';
const defaultBlogImage = 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e7f5?auto=format&fit=crop&w=1000&q=82';
const $ = selector => document.querySelector(selector);
const form = $('#blog-form');
const contentEditor = $('#post-content');
let currentFilter = 'all';
let toastTimer;

function readPosts() {
  try { const data = JSON.parse(localStorage.getItem(BLOG_STORAGE_KEY) || '[]'); return Array.isArray(data) ? data : []; }
  catch { return []; }
}
function writePosts(posts) {
  try { localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts)); return true; }
  catch { showToast('Could not save in browser storage.'); return false; }
}
function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function cleanArticleHTML(html = '') {
  const template = document.createElement('template'); template.innerHTML = html;
  template.content.querySelectorAll('script,style,iframe,object,embed,form').forEach(node => node.remove());
  template.content.querySelectorAll('*').forEach(node => [...node.attributes].forEach(attr => {
    if (attr.name.toLowerCase().startsWith('on') || ((attr.name === 'href' || attr.name === 'src') && /^\s*javascript:/i.test(attr.value))) node.removeAttribute(attr.name);
  }));
  return template.innerHTML;
}
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}
function today() { const date = new Date(); return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
function postDate(value) {
  if (!value) return 'Date to be announced';
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('en',{year:'numeric',month:'short',day:'numeric'}).format(date);
}

function renderPostList() {
  const posts = readPosts();
  $('#all-total').textContent = posts.length;
  $('#news-total').textContent = posts.filter(p => p.category === 'News').length;
  $('#knowledge-total').textContent = posts.filter(p => p.category === 'Knowledge').length;
  const filtered = posts.filter(p => currentFilter === 'all' || p.category === currentFilter).sort((a,b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
  $('#saved-post-list').innerHTML = filtered.length ? filtered.map(post => `<button type="button" class="saved-post${post.id === $('#post-id').value ? ' active' : ''}" data-post-id="${escapeHTML(post.id)}"><span class="saved-post-title">${escapeHTML(post.title || 'Untitled article')}</span><span class="saved-post-meta"><span>${escapeHTML(post.category)}</span><span class="post-status${post.published ? ' live' : ''}">${post.published ? 'Published' : 'Draft'}</span></span></button>`).join('') : `<div class="sidebar-empty">${posts.length ? 'No articles in this category yet.' : 'You have no articles yet.<br>Start by creating your first post.'}</div>`;
}

function setStatus(text, saved = false) { const el = $('#save-status'); el.textContent = text; el.classList.toggle('saved', saved); }
function currentPostData() {
  const id = $('#post-id').value || (crypto.randomUUID ? crypto.randomUUID() : `post-${Date.now()}`);
  return { id, title: $('#post-title').value.trim(), category: $('#post-category').value, date: $('#post-date').value, author: $('#post-author').value.trim() || 'INSIGHTPLUS SCIENCE Team', cover: $('#post-cover').value.trim(), excerpt: $('#post-excerpt').value.trim(), content: cleanArticleHTML(contentEditor.innerHTML), published: $('#post-published').checked, updatedAt: new Date().toISOString() };
}
function updatePreview() {
  const cover = $('#post-cover').value.trim() || defaultBlogImage;
  $('#preview-cover').style.backgroundImage = `url("${cover.replace(/["\\]/g,'')}")`;
  $('#preview-category').textContent = $('#post-category').value;
  $('#preview-date').textContent = postDate($('#post-date').value);
  $('#preview-author').textContent = $('#post-author').value.trim() || 'INSIGHTPLUS SCIENCE Team';
  $('#preview-title').textContent = $('#post-title').value.trim() || 'Your article title';
  $('#preview-excerpt').textContent = $('#post-excerpt').value.trim() || 'Your short summary will appear here as an introduction to the article.';
}
function resetEditor(category = 'News') {
  form.reset(); $('#post-id').value = ''; $('#post-category').value = category; $('#post-date').value = today(); $('#post-author').value = 'INSIGHTPLUS SCIENCE Team'; $('#post-published').checked = true; contentEditor.innerHTML = '<p></p>';
  $('#editor-heading').textContent = 'Create an article'; $('#delete-post').hidden = true; setStatus('Unsaved changes'); updatePreview(); renderPostList();
}
function loadPost(id) {
  const post = readPosts().find(item => item.id === id); if (!post) return;
  $('#post-id').value = post.id; $('#post-title').value = post.title || ''; $('#post-category').value = post.category || 'News'; $('#post-date').value = post.date || ''; $('#post-author').value = post.author || ''; $('#post-cover').value = post.cover || ''; $('#post-excerpt').value = post.excerpt || ''; contentEditor.innerHTML = cleanArticleHTML(post.content || '<p></p>'); $('#post-published').checked = Boolean(post.published);
  $('#editor-heading').textContent = 'Edit article'; $('#delete-post').hidden = false; setStatus('Saved', true); updatePreview(); renderPostList();
}
function savePost(forceDraft = false) {
  if (!form.reportValidity()) return;
  const post = currentPostData(); if (forceDraft) post.published = false;
  const posts = readPosts(); const existingIndex = posts.findIndex(item => item.id === post.id);
  if (existingIndex >= 0) posts[existingIndex] = post; else posts.unshift(post);
  if (!writePosts(posts)) return;
  $('#post-id').value = post.id; $('#post-published').checked = post.published; $('#editor-heading').textContent = 'Edit article'; $('#delete-post').hidden = false;
  setStatus(`Saved at ${new Intl.DateTimeFormat('en',{hour:'numeric',minute:'2-digit'}).format(new Date())}`, true); renderPostList(); showToast(post.published ? 'Article saved and published.' : 'Draft saved.');
}

$('#new-post').addEventListener('click', () => resetEditor($('#post-category').value || 'News'));
$('#saved-post-list').addEventListener('click', event => { const button = event.target.closest('[data-post-id]'); if (button) loadPost(button.dataset.postId); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button)); renderPostList();
}));
document.querySelectorAll('#blog-form input:not([type=hidden]), #blog-form select, #blog-form textarea').forEach(control => control.addEventListener('input', () => { setStatus('Unsaved changes'); updatePreview(); }));
contentEditor.addEventListener('input', () => setStatus('Unsaved changes'));
form.addEventListener('submit', event => { event.preventDefault(); savePost(false); });
$('#save-draft').addEventListener('click', () => savePost(true));
$('#delete-post').addEventListener('click', () => {
  const id = $('#post-id').value; if (!id) return;
  const posts = readPosts().filter(item => item.id !== id);
  if (writePosts(posts)) { resetEditor($('#post-category').value); showToast('Article deleted.'); }
});
document.querySelectorAll('.rich-toolbar [data-command]').forEach(button => {
  button.addEventListener('mousedown', event => event.preventDefault());
  button.addEventListener('click', () => {
    contentEditor.focus(); const command = button.dataset.command; const value = button.dataset.value;
    document.execCommand(command, false, value ? (command === 'formatBlock' ? `<${value}>` : value) : null);
    setStatus('Unsaved changes');
  });
});
$('#add-link').addEventListener('mousedown', event => event.preventDefault());
$('#add-link').addEventListener('click', () => {
  contentEditor.focus(); const url = prompt('Enter the link address');
  if (url && /^https?:\/\//i.test(url)) document.execCommand('createLink', false, url);
  else if (url) showToast('Please use a link beginning with http:// or https://');
  setStatus('Unsaved changes');
});

const requestedCategory = new URLSearchParams(location.search).get('category');
resetEditor(requestedCategory === 'Knowledge' ? 'Knowledge' : 'News');
renderPostList(); updatePreview();
