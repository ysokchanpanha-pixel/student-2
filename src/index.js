// 1. Centralized Product Storage Catalog Array
const products = [
  {
    id: "PROD-001",
    title: "Cambodia Cola 330ml x 24Can",
    khmerTitle: "កម្ពុជាកូឡា ៣៣០មល កេះ",
    description: "Refreshing authentic flavor, packed in a full case of 24 convenient cans.",
    price: 8.75,
    imgSrc: "https://camhappymart.com/storage/app/public/product/thumbnail/2025-10-22-68f8b9a2300d0.png"
  },
  {
    id: "PROD-002",
    title: "Angkor water  330ml",
    khmerTitle: "ទឹកសុទ្ធ​កម្ពុជា",
    description: "The official national water of Cambodia, offering a smooth and crisp taste profile.",
    price: 0.75,
    imgSrc: "2-2.jpg"
  },
  {
    id: "PROD-003",
    title: "White cocala 330ml",
    khmerTitle: "កូកាកូឡា",
    description: "Crafted with premium ingredients, delivering an ultra-smooth finish in every sip.",
    price: 11.50,
    imgSrc: "2024-11-09-672f188d3e162.png"
  },
  {
    id: "PROD-004",
    title: "cambodai cola 120ml",
    khmerTitle: "កម្ពុជាកូឡា 120ml",
    description: "Locally produced mineral water treated with advanced filtration for pure hydration.",
    price: 0.25,
    imgSrc: "2025-10-22-68f8b9d9728ce.webp"
  },
  {
    id: "PROD-005",
    title: "Express drink 250ml",
    khmerTitle: "អេចប្រេស 250ml",
    description: "Popular Korean formulation energizer rich in taurine and vital B vitamins.",
    price: 0.65,
    imgSrc: "1041890.png"
  },
  {
    id: "PROD-006",
    title: "Coca-Cola original taste bottle 150ml",
    khmerTitle: "កូកាកូឡា រសជាតិដើម 150ml",
    description: "A classic Asian botanical beverage, naturally sweetened to cool you down instantly.",
    price: 9.20,
    imgSrc: "1631700833UgmvBCqF.jpg"
  },
  {
    id: "PROD-007",
    title: "Cambodai beer 330ml",
    khmerTitle: "ស្រាបៀរកម្ពុជា 330ml",
    description: "The timeless, delicious flavor of real Coca-Cola enjoyed all around the globe.",
    price: 0.55,
    imgSrc: "8847100740144.jpg"
  },
  {
    id: "PROD-008",
    title: "",
    khmerTitle: "ភេសជ្ជៈ ប៉ូវកំលាំង​​​​ បាសកាស",
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
    id: "PROD-020",
    title: "NESCAFÉ Decaf Natural Jar",
    khmerTitle: "កាហ្វេ ណេសកាហ្វេ អត់ជាតិកាហ្វេអ៊ីន",
    description: "All the deep, fully-realized flavor you love from coffee, completely without caffeine.",
    price: 7.90,
    imgSrc: "https://i.pinimg.com/1200x/32/6f/33/326f33f464cc02103177799e693f932c.jpg"
  }
];

// Fallback placeholder used whenever a product image fails to load
const FALLBACK_IMG = "https://placehold.co/400x400/eef2f7/64748b?text=No+Image";

// Global state tracking variables
let activeProductPrice = 0;
let paymentTimerInterval = null;

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
          <img src="${product.imgSrc}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" class="card-img-top" alt="${product.title}" style="height: 220px; object-fit: cover;">
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

// 4. Modal Window Generation Handler Logic
function openProductDetail(productId) {
  clearInterval(paymentTimerInterval);

  const product = products.find(p => p.id === productId);
  if (!product) return;

  activeProductPrice = product.price;
  const modalBody = document.getElementById("modal-dynamic-content");

  modalBody.setAttribute("data-active-id", product.id);
  modalBody.setAttribute("data-active-title", product.title);

  // រៀបចំផ្ទៃដើម៖ ខាងឆ្វេងជា រូបភាពផលិតផល, ខាងស្តាំជា ព័ត៌មាននិងប៊ូតុងបញ្ជា
  modalBody.innerHTML = `
    <div class="col-md-6 border-end bg-light d-flex align-items-center justify-content-center p-4" id="modal-image-panel">
      <img src="${product.imgSrc}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" alt="${product.title}" class="img-fluid rounded" style="max-height: 350px; object-fit: contain;">
    </div>
    <div class="col-md-6 p-4 d-flex flex-column justify-content-between" id="modal-interactive-panel">
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
        <button class="btn btn-dark py-2 px-4 w-50 fw-bold" onclick="startQrPaymentWorkflow()">Buy now</button>
        <button class="btn btn-success py-2 px-4 w-50 fw-bold" onclick="alert('Added to Cart!')"><i class="bi bi-cart-plus me-2"></i>Add to cart</button>
      </div>
    </div>
  `;

  let modalElement = document.getElementById('productDetailModal');
  let modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (!modalInstance) {
    modalInstance = new bootstrap.Modal(modalElement);
  }
  modalInstance.show();
}

window.updateQty = function(change) {
  const qtyInput = document.getElementById("modal-qty");
  const totalDisplay = document.getElementById("modal-total-price");
  if (!qtyInput || !totalDisplay) return;

  let currentQty = parseInt(qtyInput.value) || 1;
  currentQty += change;

  if (currentQty < 1) currentQty = 1;

  qtyInput.value = currentQty;
  totalDisplay.innerText = `$${(activeProductPrice * currentQty).toFixed(2)}`;
};

// 4b. Inline QR Payment Core Engine View Rendering Mechanics
window.startQrPaymentWorkflow = function() {
  const imagePanel = document.getElementById("modal-image-panel");
  const interactivePanel = document.getElementById("modal-interactive-panel");
  const modalBody = document.getElementById("modal-dynamic-content");
  const qtyInput = document.getElementById("modal-qty");

  if (!imagePanel || !interactivePanel || !modalBody || !qtyInput) return;

  const currentQty = parseInt(qtyInput.value) || 1;
  const totalPrice = (activeProductPrice * currentQty).toFixed(2);
  const productId = modalBody.getAttribute("data-active-id");
  const productTitle = modalBody.getAttribute("data-active-title");

  // ស្វែងរកទិន្នន័យផលិតផលដើម ដើម្បីយកឈ្មោះខ្មែរ និងការពិពណ៌នា
  const product = products.find(p => p.id === productId);

  // កែប្រែផ្ទៃខាងឆ្វេង៖ បង្ហាញព័ត៌មានលម្អិតសង្ខេប រួមជាមួយរូបភាពផលិតផលនៅខាងក្រោម
  imagePanel.className = "col-md-6 border-end bg-light p-4 d-flex flex-column justify-content-between";
  imagePanel.innerHTML = `
    <div>
      <span class="badge bg-secondary mb-2">ព័ត៌មានការបញ្ជាទិញ</span>
      <h5 class="fw-bold text-dark mb-1">${product?.khmerTitle || ''}</h5>
      <h6 class="text-muted mb-3">${productTitle}</h6>
      <hr class="my-2 opacity-25">
      <div class="d-flex justify-content-between small text-muted mb-1">
        <span>ចំនួន (Quantity):</span>
        <span class="fw-bold text-dark">${currentQty} ដប/កំប៉ុង/កេះ</span>
      </div>
      <div class="d-flex justify-content-between small text-muted">
        <span>តម្លៃសរុប (Total):</span>
        <span class="fw-bold text-success">$${totalPrice}</span>
      </div>
    </div>
    <div class="text-center my-auto pt-3">
      <img src="${product?.imgSrc}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';" alt="${productTitle}" class="img-fluid rounded shadow-sm bg-white p-2" style="max-height: 180px; object-fit: contain;">
    </div>
  `;

  // បង្កើត Payload សម្រាប់ QR 
  const rawQrPayload = `KHQR-MOCKPAY|Store:MYTHGLORY|Item:${productId}|Qty:${currentQty}|Total:$${totalPrice}`;
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(rawQrPayload)}&color=003366`;

  // កែប្រែផ្ទៃខាងស្តាំ៖ បង្ហាញតែកូដ QR និងប៊ូតុងសម្រាប់បង់ប្រាក់
  interactivePanel.innerHTML = `
    <div class="text-center d-flex flex-column align-items-center justify-content-center h-100 py-2">
      <div class="mb-2">
        <span class="badge bg-danger px-3 py-2 rounded-pill fw-bold" style="font-size:0.75rem; letter-spacing:0.5px;">
          <i class="bi bi-qr-code-scan me-1"></i> KHQR / ABA PAY
        </span>
      </div>
      <p class="text-muted small text-truncate w-100 mb-2">ស្កែនកូដខាងក្រោមដើម្បីទូទាត់ប្រាក់</p>

      <div class="bg-white p-3 border rounded-3 shadow-sm mb-3" style="width:200px; height:200px;">
         <img src="${qrCodeApiUrl}" alt="Scan QR Code to finish transaction" class="img-fluid" style="width:100%; height:100%;">
      </div>

      <div class="mb-2">
        <div class="text-muted small mb-0">ទឹកប្រាក់ត្រូវទូទាត់សរុប</div>
        <h3 class="fw-bold text-dark mb-0">$${totalPrice}</h3>
      </div>

      <div class="alert alert-warning py-1 px-3 border-0 small mb-4 rounded-pill" style="font-size: 0.8rem;">
         <i class="bi bi-hourglass-split me-1"></i> កូដនេះនឹងហួសកំណត់ក្នុង៖ <span id="payment-timer" class="fw-bold">03:00</span>
      </div>

      <div class="w-100 d-flex gap-2">
        <button class="btn btn-outline-danger w-50 py-2 btn-sm fw-semibold" onclick="abortQrPayment('${productId}')">
          <i class="bi bi-x-circle me-1"></i> បោះបង់ (Cancel)
        </button>
        <button class="btn btn-primary w-50 py-2 btn-sm fw-bold" onclick="confirmMockPayment()">
          <i class="bi bi-check2-circle me-1"></i> ខ្ញុំបានបង់ប្រាក់រួច
        </button>
      </div>
    </div>
  `;

  beginPaymentCountdownClock(180, productId);
};

function beginPaymentCountdownClock(secondsLeft, productId) {
  clearInterval(paymentTimerInterval);
  let timeRemaining = secondsLeft;
  const timerDisplay = document.getElementById("payment-timer");

  paymentTimerInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(paymentTimerInterval);
      alert("រយៈពេលទូទាត់ប្រាក់បានអស់កំណត់។ សូមព្យាយាមម្តងទៀត។");
      abortQrPayment(productId);
      return;
    }
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
    const seconds = (timeRemaining % 60).toString().padStart(2, '0');
    if (timerDisplay) {
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }
  }, 1000);
}

window.abortQrPayment = function(productId) {
  clearInterval(paymentTimerInterval);
  openProductDetail(productId);
};

window.confirmMockPayment = function() {
  clearInterval(paymentTimerInterval);
  alert("🎉 ជោគជ័យ! ប្រព័ន្ធបានទទួលការទូទាត់របស់អ្នករួចរាល់។ ការកម្ម៉ង់ត្រូវបានរក្សាទុក។");

  const modalElement = document.getElementById('productDetailModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
};

// 5. Hooks Setup Initializations Event Routing Pipelines
window.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  const searchBar = document.getElementById("product-search");
  if (searchBar) {
    searchBar.addEventListener("input", handleSearch);
  }

  const modalElement = document.getElementById('productDetailModal');
  if (modalElement) {
    modalElement.addEventListener('hidden.bs.modal', () => {
      clearInterval(paymentTimerInterval);
    });
  }
});