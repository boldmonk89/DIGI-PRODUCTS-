import './style.css';

// Base path helper for GitHub Pages
const basePath = window.location.pathname.includes('DIGI-PRODUCTS-') ? '/DIGI-PRODUCTS-/' : '/';

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
      checkbox.style.background = 'transparent';
    }
  });
});

// Product Data
const products = [
  {
    id: 1,
    name: "4000+ n8n Workflow Bundle",
    price: "₹ 499",
    oldPrice: "₹ 2,999",
    img: "prod6.png",
    category: "Automation"
  },
  {
    id: 2,
    name: "AI Mastery Prompts Pack",
    price: "₹ 299",
    oldPrice: "₹ 1,499",
    img: "prod2.png",
    category: "AI"
  },
  {
    id: 3,
    name: "25,000+ Viral Reels Bundle",
    price: "₹ 399",
    oldPrice: "₹ 1,999",
    img: "prod1.png",
    category: "Content"
  },
  {
    id: 4,
    name: "Faceless Instagram Kit",
    price: "₹ 449",
    oldPrice: "₹ 2,499",
    img: "prod3.png",
    category: "Social"
  }
];

// Populate Product Grid
const productGrid = document.getElementById('product-grid');
if (productGrid) {
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${basePath}products/${prod.img}" alt="${prod.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x225/f8f9fa/ff6b00?text=${prod.name}'">
      <div class="category" style="color: var(--primary-orange); font-size: 0.8rem; font-weight: 700; margin-bottom: 8px;">${prod.category}</div>
      <h3>${prod.name}</h3>
      <div class="product-price">${prod.price} <span style="font-size: 1rem; text-decoration: line-through; color: var(--text-gray); margin-left: 10px;">${prod.oldPrice}</span></div>
      <button class="buy-btn" data-id="${prod.id}">BUY NOW</button>
    `;
    productGrid.appendChild(card);
  });
}

// Global Interaction
document.querySelectorAll('.cta-button, .buy-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
  });
});
