/* Homepage content is kept here so copy, images, labels and links are easy to replace. */
const media = {
  lab: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e7f5?auto=format&fit=crop&w=1500&q=85',
  bench: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=82',
  hood: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=82',
  cabinet: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=82',
  instruments: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=82',
  research: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=82',
  university: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82',
  pharma: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=82',
  medical: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=82',
  industrial: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=82',
  design: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=700&q=82',
  manufacturing: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=82',
  testing: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e7f5?auto=format&fit=crop&w=700&q=82',
  quality: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=700&q=82',
  packaging: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=82',
  steel: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=82',
  processConsultation: 'assets/process-01-consultation.jpg',
  processSourcing: 'assets/process-02-sourcing.jpg',
  processCustomization: 'assets/process-03-customization.jpg',
  processConfirmation: 'assets/process-04-confirmation.jpg',
  processQuality: 'assets/process-05-quality.jpg',
  processDelivery: 'assets/process-06-delivery.jpg'
};
// Homepage category cards use category records only; individual products belong to the catalog page.
const products = productCatalog.filter(product => product.type === 'category');
const industries = [
  ['Research Laboratories','Accelerating Scientific Discovery',media.research,'⚗'],['Universities','Supporting Education and Innovation',media.university,'⌂'],['Pharmaceutical Laboratories','Ensuring a Safer and Healthier World',media.pharma,'◉'],['Medical Testing Laboratories','Reliable Testing for Better Care',media.medical,'▤'],['Industrial R&D Centers','Empowering Innovation and Growth',media.industrial,'▧']
];
const benefits = [['⚒','OEM/ODM Service','Flexible customization\nto meet your needs'],['⬡','Strict Quality Control','From materials to final products'],['♧','Professional Engineering Support','From design to installation'],['◎','Global Export Experience','Serving 20+ countries worldwide'],['♧','Custom Design Solutions','Tailored to your laboratory space']];
const capabilities = [
  ['01','Requirement Consultation','We learn about your application, product specifications, quantities, and delivery requirements.',media.processConsultation],
  ['02','Product Sourcing','We identify suitable products through our supplier network and provide options for your review.',media.processSourcing],
  ['03','Customization Coordination','For custom requirements, we coordinate with suppliers on specifications, materials, labeling, and packaging.',media.processCustomization],
  ['04','Sample & Specification Confirmation','We arrange samples or product details for your evaluation and confirm the agreed specifications before ordering.',media.processConfirmation],
  ['05','Quality & Order Coordination','We follow up with suppliers and verify product and order details against the confirmed requirements.',media.processQuality],
  ['06','Packaging & Delivery','We coordinate packaging, documentation, and shipment to support reliable delivery to your destination.',media.processDelivery]
];
const certs = [
  { image:'assets/iso-13485.webp', alt:'ISO 13485 Quality Management System', copy:'ISO 13485' },
  { image:'assets/fda-logo.webp', alt:'FDA', copy:'FDA' },
  { mark:'CE', copy:'CE Certification' }
];
const arrow = '<span class="card-arrow">↗</span>';
document.querySelector('#product-grid').innerHTML = products.map(product=>`<a class="product-card" href="products.html"><img src="${product.image}" alt="${product.name}"/><div class="card-copy"><strong>${product.name}</strong><span>${product.shortDescription}</span></div>${arrow}</a>`).join('');
document.querySelector('#industry-grid').innerHTML = industries.map(([title,copy,img,icon])=>`<a class="industry-card" href="#contact" style="--card-image:url('${img}')"><span class="industry-icon">${icon}</span><span class="industry-copy"><b>${title}</b><small>${copy}</small></span></a>`).join('');
document.querySelector('#benefit-grid').innerHTML = benefits.map(([icon,title,copy])=>`<div class="benefit"><span class="benefit-icon">${icon}</span><span><b>${title}</b><small>${copy.replace('\n','<br>')}</small></span></div>`).join('');
document.querySelector('#capability-grid').innerHTML = capabilities.map(([num,title,copy,img])=>`<a class="capability-card" href="#contact"><div class="capability-image"><img src="${img}" alt="${title}"/><b>${num}</b></div><strong>${title}</strong><small>${copy.replace('\n','<br>')}</small>${arrow}</a>`).join('');
document.querySelector('#cert-grid').innerHTML = certs.map(cert=>`<div class="cert">${cert.image ? `<img src="${cert.image}" alt="${cert.alt}"/>` : `<strong>${cert.mark}</strong>`}<span>${cert.copy}</span></div>`).join('');
const menu=document.querySelector('.menu-toggle'); menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));document.querySelector('.main-nav').classList.toggle('open',!open)});
