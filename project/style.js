/**
 * ==========================================
 * PRODUCT DATA STORAGE (ADMIN PANEL SOURCE)
 * ==========================================
 * Update or scale the product collection array objects here.
 */
const products = [
    {
        id: 1,
        name: "Premium Orange Juice",
        price: 5.00,
        image: "https://i.pinimg.com/736x/14/fb/f5/14fbf589a2f366f1c3c38a217bf04876.jpg",
        category: "Drink",
        description: "100% freshly cold-pressed organic orange juice sourced straight from California orchards. No added sugars or preservatives."
    },
    {
        id: 2,
        name: "Wireless ANC Headphones",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
        category: "Electronics",
        description: "Immersive high-fidelity audio system equipped with Active Noise Cancellation tech and an extended 40-hour battery cycle charge."
    },
    {
        id: 3,
        name: "Organic Arabica Coffee",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
        category: "Drink",
        description: "Single-origin whole arabica coffee beans displaying dynamic notes of dark chocolate and roasted hazelnut undertones."
    },
    {
        id: 4,
        name: "Minimalist Smart Watch",
        price: 199.00,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        category: "Electronics",
        description: "Sleek biometric tracker tracking steps, heart metrics, sleep analytics, and instantaneous notification streaming capabilities."
    },
    {
        id: 5,
        name: "Stainless Hydro Flask",
        price: 34.00,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
        category: "Lifestyle",
        description: "Double-walled vacuum insulated water bottle built to sustain cold beverages freezing cold for up to 24 straight hours."
    },
    {
        id: 6,
        name: "Ergonomic Leather Journal",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=400&q=80",
        category: "Lifestyle",
        description: "Genuine top-grain hand-stitched leather diary bounding 200 pages of premium bleedproof recycled artisan parchment sheets."
    }
];

// Active State Global Memory Stores
let cart = JSON.parse(localStorage.getItem('STORE_CART_DATA')) || [];
let currentCategory = "all";
let searchQuery = "";

// Element Selectors References
const productGrid = document.getElementById('product-grid');
const categoryFiltersContainer = document.getElementById('category-filters');
const navCategoryDropdown = document.getElementById('nav-category-dropdown');
const searchInput = document.getElementById('search-input');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountBadge = document.getElementById('cart-count');
const cartTotalPriceEl = document.getElementById('cart-total-price');

/**
 * INIT APP STORE ENGINE
 */
document.addEventListener("DOMContentLoaded", () => {
    generateCategoryMenus();
    renderProducts();
    updateCartUI();

    // Attach Live Input Real-time Filter Listening
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });
});

/**
 * GENERATES DYNAMIC NAV DROPDOWN AND SUB-FILTERS
 */
function generateCategoryMenus() {
    const categories = ['all', ...new Set(products.map(p => p.category))];
    
    // Reset contents
    categoryFiltersContainer.innerHTML = '';
    navCategoryDropdown.innerHTML = '';

    categories.forEach(cat => {
        const readableName = cat.charAt(0).toUpperCase() + cat.slice(1);

        // 1. Injected to Navbar Dropdown Menu Layout
        const dropdownLi = document.createElement('li');
        dropdownLi.innerHTML = `<a class="dropdown-item ${cat === 'all' ? 'active' : ''}" href="#products" data-cat="${cat}">${readableName}</a>`;
        dropdownLi.querySelector('a').addEventListener('click', (e) => handleCategorySelection(cat));
        navCategoryDropdown.appendChild(dropdownLi);

        // 2. Injected to Section Inline Target Buttons
        const pillBtn = document.createElement('button');
        pillBtn.className = `btn btn-sm px-4 py-2 rounded-pill fw-semibold border-0 ${cat === 'all' ? 'btn-primary shadow-sm' : 'btn-white shadow-sm text-secondary'}`;
        pillBtn.textContent = readableName;
        pillBtn.setAttribute('data-cat-btn', cat);
        pillBtn.addEventListener('click', () => handleCategorySelection(cat));
        categoryFiltersContainer.appendChild(pillBtn);
    });
}

/**
 * CENTRAL CONTROL PIPELINE FOR FILTER SYNCING
 */
function handleCategorySelection(selectedCategory) {
    currentCategory = selectedCategory;

    // Sync Dropdown Active Highlights
    document.querySelectorAll('#nav-category-dropdown .dropdown-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-cat') === selectedCategory);
    });

    // Sync Inline Sub-Pill Highlights
    document.querySelectorAll('#category-filters button').forEach(btn => {
        if (btn.getAttribute('data-cat-btn') === selectedCategory) {
            btn.className = "btn btn-sm px-4 py-2 rounded-pill fw-semibold border-0 btn-primary shadow-sm";
        } else {
            btn.className = "btn btn-sm px-4 py-2 rounded-pill fw-semibold border-0 btn-white shadow-sm text-secondary";
        }
    });

    renderProducts();
}

/**
 * RENDERS DYNAMIC PRODUCT GRID WITH MODERN HOVER EFFECTS
 */
function renderProducts() {
    productGrid.innerHTML = '';

    const filtered = products.filter(product => {
        const matchesCategory = (currentCategory === 'all' || product.category === currentCategory);
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                              product.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search text-muted display-4 opacity-30"></i>
                <p class="text-muted mt-3">We couldn't find matches for your selection.</p>
            </div>`;
        return;
    }

    filtered.forEach(product => {
        const cardCol = document.createElement('div');
        cardCol.className = 'col animate-fade';
        cardCol.innerHTML = `
            <div class="card h-100 border-0 product-card shadow-sm p-2">
                <div class="card-img-container" onclick="openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="card-body d-flex flex-column p-3 pt-2">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-secondary-subtle text-secondary rounded-pill px-2.5 py-1 small fw-medium">${product.category}</span>
                        <span class="text-dark fw-bold fs-5">$${product.price.toFixed(2)}</span>
                    </div>
                    <h5 class="card-title text-dark fs-6 fw-bold mb-2 text-truncate" onclick="openProductModal(${product.id})" style="cursor:pointer;">${product.name}</h5>
                    <p class="card-text text-muted small flex-grow-1 mb-3 text-truncate-2" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${product.description}</p>
                    <button class="btn btn-outline-primary btn-sm rounded-pill py-2 fw-semibold w-100 mt-auto" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-1"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(cardCol);
    });
}

/**
 * CART CONTROLLER PERSISTENCE LOGIC
 */
function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const targetProduct = products.find(p => p.id === productId);
        cart.push({ ...targetProduct, quantity: 1 });
    }
    saveAndSyncCart();
}

function updateQuantity(productId, change) {
    const targetItem = cart.find(item => item.id === productId);
    if (!targetItem) return;

    targetItem.quantity += change;
    if (targetItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    saveAndSyncCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveAndSyncCart();
}

function saveAndSyncCart() {
    localStorage.setItem('STORE_CART_DATA', JSON.stringify(cart));
    updateCartUI();
}

/**
 * RE-RENDERS COMPACT SHOPPING DRAWER ENTRIES
 */
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalItemCount = 0;
    let computedTotalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5 text-muted my-auto">
                <i class="bi bi-basket3 display-3 opacity-20 text-primary"></i>
                <p class="mt-3 small fw-medium">Your shopping bag is completely empty.</p>
            </div>`;
    } else {
        cart.forEach(item => {
            totalItemCount += item.quantity;
            computedTotalPrice += (item.price * item.quantity);

            const row = document.createElement('div');
            row.className = 'd-flex align-items-center justify-content-between border-bottom py-3';
            row.innerHTML = `
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div style="max-width: 140px;">
                        <h6 class="mb-0 text-truncate small fw-bold text-dark">${item.name}</h6>
                        <small class="text-primary fw-bold">$${item.price.toFixed(2)}</small>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <div class="btn-group border rounded-pill bg-light p-0.5">
                        <button class="btn btn-sm qty-control-btn border-0 rounded-circle text-muted" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="px-2 small align-self-center fw-bold text-dark">${item.quantity}</span>
                        <button class="btn btn-sm qty-control-btn border-0 rounded-circle text-muted" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="btn btn-link text-danger p-0 ms-1 shadow-none" onclick="removeFromCart(${item.id})">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(row);
        });
    }

    cartCountBadge.textContent = totalItemCount;
    cartTotalPriceEl.textContent = `$${computedTotalPrice.toFixed(2)}`;
}

/**
 * TRIGGERS MODAL POPUP MODIFIER DESIGNS
 */
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modal-product-body');
    modalBody.innerHTML = `
        <div class="row align-items-center g-4">
            <div class="col-md-5 text-center">
                <div class="bg-light p-4 rounded-4 d-flex align-items-center justify-content-center" style="height: 280px;">
                    <img src="${product.image}" class="img-fluid" style="max-height: 100%; object-fit: contain;" alt="${product.name}">
                </div>
            </div>
            <div class="col-md-7">
                <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-1.5 small fw-semibold mb-2">${product.category}</span>
                <h3 class="fw-bold text-dark mb-1">${product.name}</h3>
                <h2 class="text-primary fw-extrabold mb-3">$${product.price.toFixed(2)}</h2>
                <p class="text-muted small leading-relaxed mb-4">${product.description}</p>
                <button class="btn btn-primary w-100 py-3 rounded-pill d-flex justify-content-center align-items-center gap-2 fw-bold shadow" onclick="addToCart(${product.id}); dismissModal();">
                    <i class="bi bi-bag-plus-fill"></i> Add Product To Shopping Bag
                </button>
            </div>
        </div>
    `;

    const modalElement = new bootstrap.Modal(document.getElementById('productModal'));
    modalElement.show();
}

function dismissModal() {
    const existingModalEl = document.getElementById('productModal');
    const modalInstance = bootstrap.Modal.getInstance(existingModalEl);
    if(modalInstance) modalInstance.hide();
}