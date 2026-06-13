// 1. Centralized Product Storage Catalog Array
// 1. Centralized Product Storage Catalog Array
const products = [
  {
    id: "PROD-001",
    title: "Cambodia Cola 330ml x 24Can",
    khmerTitle: "កម្ពុជាកូឡា ៣៣០មល កេះ",
    description: "Refreshing authentic flavor, packed in a full case of 24 convenient cans.",
    price: 8.75,
    imgSrc: "image_f9ce4a.png" 
  },
  {
    id: "PROD-002",
    title: "Angkor Beer Premium Can 330ml",
    khmerTitle: "ស្រាបៀរ អង្គរ កំប៉ុង ៣៣០មល",
    description: "The official national beer of Cambodia, offering a smooth and crisp taste profile.",
    price: 0.75,
    imgSrc: "2-2.jpg"
  },
  {
    id: "PROD-003",
    title: "Hanuman Premium Lager Case",
    khmerTitle: "ស្រាបៀរ ហនុមាន ឆ្ងាញ់ពិសា កេះ",
    description: "Crafted with premium ingredients, delivering an ultra-smooth finish in every sip.",
    price: 11.50,
    imgSrc: "2024-11-09-672f188d3e162.png"
  },
  {
    id: "PROD-004",
    title: "Vital Premium Water 500ml",
    khmerTitle: "ទឹកបរិសុទ្ធ វីតាល់ ៥០០មល",
    description: "Locally produced mineral water treated with advanced filtration for pure hydration.",
    price: 0.25,
    imgSrc: "2025-10-22-68f8b9d9728ce.webp"
  },
  {
    id: "PROD-005",
    title: "Bacchus Energy Drink 250ml",
    khmerTitle: "ភេសជ្ជៈប៉ូវកម្លាំង បាកុស ២៥០មល",
    description: "Popular Korean formulation energizer rich in taurine and vital B vitamins.",
    price: 0.65,
    imgSrc: "1041890.png"
  },
  {
    id: "PROD-006",
    title: "Yeo's Chrysanthemum Tea Case",
    khmerTitle: "ភេសជ្ជៈតែផ្កាស្បៃរឿង យ៉ូស កេះ",
    description: "A classic Asian botanical beverage, naturally sweetened to cool you down instantly.",
    price: 9.20,
    imgSrc: "1631700833UgmvBCqF.jpg"
  },
  {
    id: "PROD-007",
    title: "Coca-Cola Original Taste Can",
    khmerTitle: "ភេសជ្ជៈ កូកាកូឡា រសជាតិដើម",
    description: "The timeless, delicious flavor of real Coca-Cola enjoyed all around the globe.",
    price: 0.55,
    imgSrc: "8847100740144.jpg"
  },
  {
    id: "PROD-008",
    title: "Sting Energy Strawberry 330ml",
    khmerTitle: "ភេសជ្ជៈ ស្ទីង រសជាតិស្ត្រប៊ឺរី",
    description: "An electrifying burst of strawberry flavor combined with a powerful energy blend.",
    price: 0.60,
    imgSrc: "18806011010064-500x500.jpg"
  },
  {
    id: "PROD-009",
    title: "Oishi Green Tea Honey Lemon",
    khmerTitle: "តែបៃតង អូអ៊ីស៊ី ទឹកឃ្មុំក្រូចឆ្មា",
    description: "Organic brewed green tea leaves mixed perfectly with sweet honey and sour lemon.",
    price: 0.70,
    imgSrc: "item_F136974_4570.jpg"
  },
  {
    id: "PROD-010",
    title: "Sarsi Root Beer Soda 330ml",
    khmerTitle: "ភេសជ្ជៈ សាស៊ី រសជាតិសាស៊ី",
    description: "Distinctive and nostalgic herbal sarsaparilla flavor with a fizzy kick.",
    price: 0.50,
    imgSrc: "2025-12-29-6952574fd1e89.webp"
  },
  {
    id: "PROD-011",
    title: "NESCAFÉ Dark Roast Classic Jar",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ ដបធំពិសេស",
    description: "Rich, bold instant coffee — bonus jar included for unbeatable everyday value.",
    price: 8.90,
    imgSrc: "NESCAF-CL-SICO-Instant-Coffee-Dark-Roast-1-Jar-8-1-Oz-Bonus-Jar-1-7-OZ_70819110-22e1-4f82-ab4c-4c1fb90c9333.670bcbd5f1317cfa2878b5ea8f284434.avif"
  },
  {
    id: "PROD-012",
    title: "Pokka Melon Milk Drink 240ml",
    khmerTitle: "ភេសជ្ជៈទឹកដោះគោរសជាតិឪឡឹក ប៉ុកកា",
    description: "A silky, smooth beverage pairing real fruit juice aroma with rich, creamy milk.",
    price: 0.85,
    imgSrc: "1606906242TxMRnddl.jpg"
  },
  {
    id: "PROD-013",
    title: "NESCAFÉ 3-in-1 Rich Mix Bag",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ ៣ក្នុង១ កញ្ចប់",
    description: "The ideal blend of premium coffee, creamer, and sugar in quick single-serve sticks.",
    price: 4.50,
    imgSrc: "https://i.pinimg.com/1200x/7f/a6/a9/7fa6a91c08a43e5890830e3d17ece72e.jpg"
  },
  {
    id: "PROD-014",
    title: "NESCAFÉ Gold Espresso Smooth",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ ហ្គោល អេសប្រេសសូ",
    description: "Golden roasted Arabica beans delivering a velvety layer of authentic crema texture.",
    price: 6.20,
    imgSrc: "https://i.pinimg.com/736x/39/10/30/3910305ca577a91262c0e7e32a7f84fb.jpg"
  },
  {
    id: "PROD-015",
    title: "NESCAFÉ Ice Black Coffee Can",
    khmerTitle: "កាហ្វេខ្មៅត្រជាក់ ណេសកាហ្វេ កំប៉ុង",
    description: "A low-calorie, crisp black coffee drink formulated to give a quick, refreshing wake-up.",
    price: 0.90,
    imgSrc: "https://i.pinimg.com/736x/47/5c/7c/475c7cff6a02cd630797dcacf7df112e.jpg"
  },
  {
    id: "PROD-016",
    title: "NESCAFÉ Latte Creamy Pack",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ ឡាតេ ឈ្ងុយឆ្ងាញ់",
    description: "An extra-milky premium blend carefully crafted for espresso coffee lovers.",
    price: 4.80,
    imgSrc: "https://i.pinimg.com/1200x/62/f1/3c/62f13c82bcd7d05bb6877f48dfe8f445.jpg"
  },
  {
    id: "PROD-017",
    title: "NESCAFÉ Cappuccino Frothy Mix",
    khmerTitle: "កាហ្វេ កាពូឈីណូ ណេសកាហ្វេ ប្រអប់",
    description: "Indulgent coffee treat topped with a thick, luxurious layer of dairy froth.",
    price: 5.10,
    imgSrc: "https://i.pinimg.com/736x/a5/0e/63/a50e6346dc4b887487de2cd7bb48ea8c.jpg"
  },
  {
    id: "PROD-018",
    title: "NESCAFÉ Americano Zero Sugar",
    khmerTitle: "កាហ្វេ អាមេរីកាណូ អត់ស្ករ កំប៉ុង",
    description: "Pure, uncompromising iced black coffee without any sugar additions for clean energy.",
    price: 0.95,
    imgSrc: "https://i.pinimg.com/1200x/a3/5e/2a/a35e2a652da73ce4bf917e1eed0fe2b4.jpg"
  },
  {
    id: "PROD-019",
    title: "NESCAFÉ Mocha Caramel Twin",
    khmerTitle: "កាហ្វេ ម៉ូកា ការ៉ាមែល ឈ្ងុយពិសេស",
    description: "A harmonious marriage of decadent chocolate, sweet caramel, and bold coffee flavors.",
    price: 5.50,
    imgSrc: "https://i.pinimg.com/736x/a3/2c/be/a32cbe0fbf478ad276f189643ff96009.jpg"
  },
  {
    id: "PROD-020", // Fixed duplicate ID bug from original code
    title: "NESCAFÉ Decaf Natural Jar",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ អត់ជាតិកាហ្វេអ៊ីន",
    description: "All the deep, fully-realized flavor you love from coffee, completely without caffeine.",
    price: 7.90,
    imgSrc: "https://i.pinimg.com/1200x/32/6f/33/326f33f464cc02103177799e693f932c.jpg"
  }
];

// Global state tracking variable for quantity computation logic inside modern popups
let activeProductPrice = 0;

// 2. DOM Rendering Engine Logic Loop Execution
function renderProducts(filteredProducts = products) {
  const container = document.getElementById("product-container");
  if (!container) return;

  if (filteredProducts.length === 0) {
    container.innerHTML = `<div class="col-12 text-center text-muted my-5">រកមិនឃើញផលិតផលទេ (No products found)</div>`;
    return;
  }

  container.innerHTML = filteredProducts.map(product => {
    const displayHeading = product.khmerTitle 
      ? `<span class="d-block text-secondary small text-truncate mb-1" style="font-size: 0.85rem;">${product.khmerTitle}</span>${product.title}`
      : product.title;

    return `
      <div class="col" style="cursor: pointer;" onclick="openProductDetail('${product.id}')">
        <div class="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
          <img src="${product.imgSrc}" class="card-img-top" alt="${product.title}" style="height: 220px; object-fit: cover;">
          <div class="card-body d-flex flex-column justify-content-between p-3">
            <div>
              <h6 class="card-title fw-bold text-dark lh-sm mb-2" style="font-size: 0.95rem; min-height: 2.4rem;">${displayHeading}</h6>
              <p class="card-text text-muted small mb-3" style="font-size: 0.8rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${product.description}
              </p>
            </div>
            <div class="mt-auto d-flex align-items-center justify-content-between pt-2 border-top">
              <span class="card-price fw-bold text-success fs-5">$${product.price.toFixed(2)}</span>
              <button class="btn btn-sm btn-outline-primary px-2 py-1" style="font-size: 0.75rem;"><i class="bi bi-eye me-1"></i>Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. Live Search Engine Filter Mechanism
function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim();
  
  const filtered = products.filter(product => {
    return product.title.toLowerCase().includes(query) || 
           (product.khmerTitle && product.khmerTitle.toLowerCase().includes(query)) ||
           product.description.toLowerCase().includes(query);
  });
  
  renderProducts(filtered);
}

// 4. Modal Window Generation Handler Logic (As requested in image template breakdown)
function openProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  activeProductPrice = product.price;
  const modalBody = document.getElementById("modal-dynamic-content");
  
  modalBody.innerHTML = `
    <div class="col-md-6 border-end bg-light d-flex align-items-center justify-content-center p-4">
      <img src="${product.imgSrc}" alt="${product.title}" class="img-fluid rounded" style="max-height: 350px; object-fit: contain;">
    </div>
    <div class="col-md-6 p-4 d-flex flex-column justify-content-between">
      <div>
        <span class="text-muted small fw-semibold">ID: ${product.id}</span>
        <h4 class="fw-bold text-dark mt-1 mb-0">${product.khmerTitle || ''}</h4>
        <h5 class="text-muted mb-3">${product.title}</h5>
        
        <div class="d-flex align-items-center mb-3">
          <div class="text-warning me-2">
            <i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
          </div>
          <span class="text-muted small">(0 Reviews | 0 Orders)</span>
        </div>
        
        <h3 class="fw-bold text-success mb-4">$${product.price.toFixed(2)}</h3>
        <p class="text-muted small mb-4">${product.description}</p>
        
        <div class="d-flex align-items-center mb-4">
          <span class="me-3 fw-medium">Quantity:</span>
          <div class="input-group border rounded" style="width: 130px;">
            <button class="btn btn-link text-decoration-none text-dark border-0 px-2" type="button" onclick="updateQty(-1)">-</button>
            <input type="text" id="modal-qty" class="form-control text-center border-0 p-1 bg-white fw-bold" value="1" readonly>
            <button class="btn btn-link text-decoration-none text-dark border-0 px-2" type="button" onclick="updateQty(1)">+</button>
          </div>
        </div>

        <div class="mb-4">
          <span class="text-muted">Total Price:</span> 
          <span class="fw-bold text-dark fs-5 ms-1" id="modal-total-price">$${product.price.toFixed(2)}</span>
          <span class="text-muted small ms-1">(Tax incl.)</span>
        </div>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-dark py-2 px-4 w-50 fw-bold" onclick="alert('Order Proceeded!')">Buy now</button>
        <button class="btn btn-success py-2 px-4 w-50 fw-bold" onclick="alert('Added to Cart!')"><i class="bi bi-cart-plus me-2"></i>Add to cart</button>
      </div>
    </div>
  `;

  // Explicitly initialize Bootstrap modal framework view container object instances
  const targetModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
  targetModal.show();
}

// Helper utility mutation math calculations function toggler logic
window.updateQty = function(change) {
  const qtyInput = document.getElementById("modal-qty");
  const totalDisplay = document.getElementById("modal-total-price");
  if (!qtyInput || !totalDisplay) return;

  let currentQty = parseInt(qtyInput.value) || 1;
  currentQty += change;

  if (currentQty < 1) currentQty = 1; // Bound constraint checks logic boundary values minimum limits
  
  qtyInput.value = currentQty;
  totalDisplay.innerText = `$${(activeProductPrice * currentQty).toFixed(2)}`;
};

// 5. Hooks Setup Initializations Event Routing Pipelines
window.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  const searchBar = document.getElementById("product-search");
  if (searchBar) {
    searchBar.addEventListener("input", handleSearch);
  }
});