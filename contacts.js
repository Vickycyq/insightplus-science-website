const companySocials = [
  { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/insightplus-tech/' },
  { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/share/1CEJfxdAh8/?mibextid=wwXIfr' },
  { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/insightplus_science?exln=aDlxMXBjZGE4eDh5&utm_source=qr' }
];

const socialIcons = {
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.7H2.1V22h3.1V8.7ZM3.65 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM22 14.4c0-4-2.1-5.9-4.9-5.9a4.2 4.2 0 0 0-3.8 2.1V8.7h-3V22h3.1v-6.6c0-1.8.3-3.6 2.6-3.6s2.4 2.1 2.4 3.7V22H22v-7.6Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9.1h3.1l.5-3.6h-3.6V7c0-1 .3-1.7 1.8-1.7h1.9V2.1c-.3 0-1.5-.1-2.9-.1-2.9 0-4.9 1.8-4.9 5v2.3H6.4v3.6h3.2V22h4.1Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.7" r=".8" class="icon-dot"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.3 4H5.5l12.3 15.9Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.9a3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z"/></svg>'
};

document.querySelector('#company-social-links').innerHTML = companySocials.map(item => `<a class="company-social-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Open INSIGHTPLUS SCIENCE on ${item.label}" title="${item.label}">${socialIcons[item.platform] || '↗'}<span>${item.label}</span></a>`).join('');
