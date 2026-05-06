import './style.css'

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Vault Carousel Population
const vaultTrack = document.querySelector('.carousel-track');
const vaultData = [
  { title: "10,000+ Viral Reels", category: "REELS" },
  { title: "1,000+ Master Ebooks", category: "EBOOKS" },
  { title: "Ultimate Templates", category: "TEMPLATES" },
  { title: "Kids Drawing Masterclass", category: "KIDS" },
  { title: "Content Creation Mastery", category: "STRATEGY" },
  { title: "Passive Income Blueprint", category: "MARKETING" },
];

if (vaultTrack) {
  vaultData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vault-card';
    card.innerHTML = `
      <div class="vault-card-overlay">
        <div class="badge">${item.category}</div>
        <h4>${item.title}</h4>
      </div>
    `;
    vaultTrack.appendChild(card);
  });
}

// CTA Button Smooth Scroll (if needed) or simple click effect
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('CTA Clicked - Redirecting to checkout...');
    // window.location.href = '#pricing'; // Example
  });
});

console.log('The Vault Landing Page Initialized.');
