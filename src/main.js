import './style.css';

// FAQ Accordion Interaction
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Struggles Checkboxes Logic
document.querySelectorAll('.struggle-item').forEach(item => {
  item.addEventListener('click', () => {
    const isChecked = item.getAttribute('data-checked') === 'true';
    item.setAttribute('data-checked', !isChecked);
    
    const checkbox = item.querySelector('.checkbox');
    if (!isChecked) {
      checkbox.innerHTML = '✓';
      checkbox.style.background = 'var(--primary-orange)';
      checkbox.style.color = 'white';
      checkbox.style.display = 'flex';
      checkbox.style.alignItems = 'center';
      checkbox.style.justifyContent = 'center';
      checkbox.style.fontWeight = 'bold';
    } else {
      checkbox.innerHTML = '';
      checkbox.style.background = '#eee';
    }
  });
});

// Vault Preview Carousel Population
const vaultTrack = document.querySelector('.vault-preview .carousel-track');
const productData = [
  { name: "2500+ Cars Reel Bundle", price: "₹ 499", img: "prod1.png" },
  { name: "AI Prompts Mastery", price: "₹ 299", img: "prod2.png" },
  { name: "Faceless Page Kit", price: "₹ 599", img: "prod3.png" },
  { name: "Ultimate Ebook Library", price: "₹ 399", img: "prod4.png" },
  { name: "Resell Rights Bundle", price: "₹ 999", img: "prod5.png" },
  { name: "N8N Automation Pack", price: "₹ 799", img: "prod6.png" },
  { name: "Instagram Growth Tool", price: "₹ 499", img: "prod7.png" },
  { name: "Content Creation Lab", price: "₹ 349", img: "prod8.png" },
  { name: "Marketing Blueprint", price: "₹ 449", img: "prod9.png" },
  { name: "Viral Hook Templates", price: "₹ 199", img: "prod10.png" },
  { name: "Shadowbox Video Pack", price: "₹ 699", img: "prod11.png" },
  { name: "Premium Creator Pack", price: "₹ 899", img: "prod12.png" },
];

if (vaultTrack) {
  productData.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'vault-card';
    card.innerHTML = `
      <div class="card-image">
        <img src="/src/assets/products/${prod.img}" alt="${prod.name}">
      </div>
      <div class="card-info">
        <h3>${prod.name}</h3>
        <p class="card-price">${prod.price}</p>
        <button class="buy-small-button">GET ACCESS</button>
      </div>
    `;
    vaultTrack.appendChild(card);
  });
}

// Testimonials Population & Auto-scroll
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonials = [
  { name: "Aarav M.", text: "I wasted hours searching for reels, prompts, and templates before. Vaultora literally saved me weeks of work." },
  { name: "Rohan K.", text: "The N8N workflow templates are insanely useful. I imported them and automated tasks within minutes." },
  { name: "Dev S.", text: "I started a faceless page using the reels bundles from Vaultora and finally became consistent with posting." },
  { name: "Priyansh T.", text: "Most websites sell random low-quality files. Vaultora actually provides clean, organized, ready-to-use assets." },
  { name: "Karan V.", text: "The ChatGPT prompts bundle alone was worth it. Helped me speed up content creation and client work." },
  { name: "Yash R.", text: "Best part is everything is plug-and-play. Download, customize, and start using instantly." },
  { name: "Aditya P.", text: "I used the resell-ready bundles from Vaultora to start earning online without creating products from scratch." },
  { name: "Harsh D.", text: "The quality of the reels and creator assets is way better than most Telegram packs." },
  { name: "Nishant S.", text: "Vaultora helped me stop wasting time switching between different tools and websites." },
  { name: "Vivek J.", text: "As a beginner, I had no idea where to start. The ready-made systems and templates made everything simple." },
  { name: "Anmol K.", text: "The AI prompts and automation templates helped me complete client work much faster." }
];

if (testimonialTrack) {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];
  allTestimonials.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <p class="testimonial-text">“${t.text}”</p>
      <p class="testimonial-author">— ${t.name}</p>
    `;
    testimonialTrack.appendChild(card);
  });
}

// Global CTA Interaction
document.querySelectorAll('.cta-button, .cta-button-v2, .buy-small-button').forEach(button => {
  button.addEventListener('click', () => {
    // Scroll to pricing if not already there
    document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
  });
});
