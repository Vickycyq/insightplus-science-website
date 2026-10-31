const languageSiteRoot = 'https://insightplus-science.com/';
const languagePath = () => {
  if (/^https?:$/.test(location.protocol)) return location.pathname;
  const path = location.pathname.replace(/\\/g, '/');
  const categoryMatch = path.match(/\/Products\/[^/]+$/i);
  if (categoryMatch) return categoryMatch[0];
  const fileName = path.split('/').pop();
  return fileName && fileName !== 'index.html' ? `/${fileName}` : '/';
};
const canonicalLanguageUrl = () => {
  const target = new URL(languagePath(), languageSiteRoot);
  if (/^https?:$/.test(location.protocol)) {
    const current = new URL(location.href);
    target.search = current.search;
    target.hash = current.hash;
    [...target.searchParams.keys()].filter(key => key.startsWith('_x_tr_')).forEach(key => target.searchParams.delete(key));
  }
  return target;
};
document.querySelectorAll('[data-language]').forEach(option => {
  option.addEventListener('click', () => {
    const language = option.dataset.language;
    const originalUrl = canonicalLanguageUrl();
    if (language === 'en') {
      location.assign(originalUrl.href);
      return;
    }
    const translateUrl = new URL('https://translate.google.com/translate');
    translateUrl.searchParams.set('sl', 'en');
    translateUrl.searchParams.set('tl', language);
    translateUrl.searchParams.set('u', originalUrl.href);
    location.assign(translateUrl.href);
  });
});
document.querySelectorAll('.language-switcher').forEach(switcher => {
  document.addEventListener('click', event => { if (!switcher.contains(event.target)) switcher.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') switcher.open = false; });
});
