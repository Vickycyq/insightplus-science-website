document.querySelectorAll('.mega-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.nav-mega');
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});
document.addEventListener('click', event => {
  document.querySelectorAll('.nav-mega.open').forEach(item => {
    if (!item.contains(event.target)) {
      item.classList.remove('open');
      item.querySelector('.mega-toggle')?.setAttribute('aria-expanded', 'false');
    }
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') document.querySelectorAll('.nav-mega.open').forEach(item => {
    item.classList.remove('open');
    item.querySelector('.mega-toggle')?.setAttribute('aria-expanded', 'false');
  });
});
