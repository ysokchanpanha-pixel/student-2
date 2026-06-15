/**
 * ==========================================================================
 * MYTHGLORY — Core Client E-Commerce State Engine Model Framework Logic
 * Software Engineering Specification: ES6 Standard Architecture Implementation
 * ==========================================================================
 */

// -------------------------------------------------------------------------
// 1. COMPREHENSIVE SEED DATA DATA matrix PROFILE INDEX LISTING DIRECTORY
// -------------------------------------------------------------------------
const PRODUCT_CATALOG_DATA_SEED = [
  { id: "PROD-001", name: "Nebula Black Cold Extraction", category: "coffee", priceUSD: 6.50, rating: 4.9, stock: 14, classGradient: "label-gradient-coffee", icon: "bi-cup-hot", shortDesc: "Triple-filtered dark craft organic extraction matured under low thermal parameters for 24 hours.", specJson: '{"Origin":"Ethiopia","Profile":"Dark Roast","Acidity":"Ultra Low","Volume":"350ml"}' },
  { id: "PROD-002", name: "Wild Emerald Matcha Concentrate", category: "tea", priceUSD: 5.75, rating: 4.8, stock: 4, classGradient: "label-gradient-tea", icon: "bi-moisture", shortDesc: "Ceremonial grade pure stone-ground green tea leaves whipped with organic sweet agave nectar fluid matrix.", specJson: '{"Grade":"Ceremonial A","Source":"Uji, Japan","Sweetener":"Agave","Volume":"250ml"}' },
  { id: "PROD-003", name: "Blood Orange Ginger Elixir", category: "juice", priceUSD: 4.90, rating: 4.6, stock: 22, classGradient: "label-gradient-juice", icon: "bi-droplet-half", shortDesc: "Cold-pressed Sicilian citrus flesh run through secondary micro-milled raw ginger root integration tubes.", specJson: '{"Extraction":"Hydraulic Press","Sugar":"Zero Added","BioActive":"High","Volume":"400ml"}' },
  { id: "PROD-004", name: "Quantum Velvet Cocoa Brew", category: "coffee", priceUSD: 7.20, rating: 5.0, stock: 0, classGradient: "label-gradient-coffee", icon: "bi-cup-straw", shortDesc: "Rich fluid fusion combining single-estate Venezuelan dark chocolate cream with premium Arabica bean formulas.", specJson: '{"Cocoa Density":"85%","Roast Profile":"Medium","Dairy":"Oatmilk Substituted","Volume":"300ml"}' },
  { id: "PROD-005", name: "Amethyst Berry Isotonic Base", category: "energy", priceUSD: 6.00, rating: 4.7, stock: 18, classGradient: "label-gradient-energy", icon: "bi-lightning-charge", shortDesc: "High performance clean cellular hydration extract fueled by fermented wild arctic mountain berries.", specJson: '{"Electrolytes":"Magnesium/Potassium","Sugar Source":"Fruit Matrix","Ph Level":"7.4","Volume":"500ml"}' },
  { id: "PROD-006", name: "Titanium Matte Botanical Flask", category: "merch", priceUSD: 34.00, rating: 4.9, stock: 8, classGradient: "label-gradient-merch", icon: "bi-shield-shaded", shortDesc: "Double-walled vacuum sealed thermal fluid isolation containment vessel stamped with signature brand mark seal.", specJson: '{"Material":"Medical Grade Titanium","Thermal Rating":"24hr Cold / 12hr Hot","Weight":"180g","Capacity":"600ml"}' }
];

const SYSTEM_CURRENCY_CONVERSION_MULTIPLIER = 4100.0; // Fixed Conversion Rule Factor: 1 USD = 4100 KHR

// -------------------------------------------------------------------------
// 2. STATE MANAGER CONTAINER NODE MODULE RUNTIME ARCHITECTURE SPECIFICATION
// -------------------------------------------------------------------------
let AppState = {
  catalog: [],
  cart: [],
  wishlist: [],
  currency: "USD",
  activeCategory: "all",
  searchQuery: "",
  sortBy: "default",
  userSession: null
};

// -------------------------------------------------------------------------
// 3. INTERNAL ENGINE LIFECYCLE CONTROLLER SUBSYSTEM PIPELINES CONFIGURATION
// -------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initializeSystemStorageState();
  bindEventInterceptorsPipeline();
  startHeroSlideshowEngine();
  renderApplicationDOMContext();
  
  // Suppress Loading Screen Elements Layer Display Frame Dynamic Hook Vector Array Link Anchor
  setTimeout(() => {
    const loader = document.getElementById("pageLoader");
    if(loader) loader.classList.add("hidden");
  }, 350);
});

/**
 * Sync AppState variables with client local storage arrays or fallback values.
 */
function initializeSystemStorageState() {
  AppState.catalog = [...PRODUCT_CATALOG_DATA_SEED];
  
  // Pull structured storage data records from local standard definitions blocks
  const storedCurrency = localStorage.getItem("myth_currency");
  if (storedCurrency) AppState.currency = storedCurrency;

  const storedCart = localStorage.getItem("myth_cart");
  if (storedCart) AppState.cart = JSON.parse(storedCart);

  const storedWishlist = localStorage.getItem("myth_wishlist");
  if (storedWishlist) AppState.wishlist = JSON.parse(storedWishlist);

  const storedSession = localStorage.getItem("myth_session");
  if (storedSession) AppState.userSession = JSON.parse(storedSession);

  // Assert basic placeholder credentials structure in system store mapping
  if(!localStorage.getItem("myth_users_db")) {
    const defaultUserDb = [{ email: "admin@mythglory.com", password: "Password123", name: "Grand Apothecary Administrator" }];
    localStorage.setItem("myth_users_db", JSON.stringify(defaultUserDb));
  }

  logAuditTrail("System Storage State Sync Complete", AppState);
}

/**
 * Attach global tracking intercepts to interaction controls.
 */
function bindEventInterceptorsPipeline() {
  // Input queries interception hooks for filtering components
  const globalSearch = document.getElementById("globalNavSearchInput");
  const toolbarSearch = document.getElementById("inlineToolbarSearchField");
  const sortSelect = document.getElementById("catalogSortSelectorDeck");

  if(globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if(toolbarSearch) toolbarSearch.value = e.target.value;
      renderCatalogGridDisplayNode();
    });
  }

  if(toolbarSearch) {
    toolbarSearch.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if(globalSearch) globalSearch.value = e.target.value;
      renderCatalogGridDisplayNode();
    });
  }

  if(sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      renderCatalogGridDisplayNode();
    });
  }

  // Intercept category element chips selectors matrix layout loop arrays click events
  document.querySelectorAll("#categoryHorizontalChipsStripRow .filter-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      document.querySelectorAll("#categoryHorizontalChipsStripRow .filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      AppState.activeCategory = chip.getAttribute("data-category-target");
      renderCatalogGridDisplayNode();
    });
  });

  // Intercept direct currency mutation triggers
  document.querySelectorAll(".currency-select-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".currency-select-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetCurrency = btn.getAttribute("data-currency");
      mutateSystemCurrencyDisplayProfile(targetCurrency);
    });
  });

  // Bind core UI utilities hooks indicators tracking actions
  const themeToggle = document.getElementById("themeToggleBtn");
  if(themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const targetTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", targetTheme);
      themeToggle.innerHTML = targetTheme === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    });
  }

  const clearFiltersBtn = document.getElementById("clearActiveFiltersActionBtn");
  if(clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      AppState.searchQuery = "";
      AppState.activeCategory = "all";
      AppState.sortBy = "default";
      if(globalSearch) globalSearch.value = "";
      if(toolbarSearch) toolbarSearch.value = "";
      if(sortSelect) sortSelect.value = "default";
      document.querySelectorAll("#categoryHorizontalChipsStripRow .filter-chip").forEach(c => {
        c.classList.remove("active");
        if(c.getAttribute("data-category-target") === "all") c.classList.add("active");
      });
      renderCatalogGridDisplayNode();
    });
  }

  // Bind scroll tracker response interface parameters context rules logic anchor
  const backToTopBtn = document.getElementById("globalBackToTopTriggerBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      if(backToTopBtn) backToTopBtn.classList.add("show");
    } else {
      if(backToTopBtn) backToTopBtn.classList.remove("show");
    }
  });
  if(backToTopBtn) {
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

/**
 * Runs the continuous parallax auto-advance background image engine loop.
 */
function startHeroSlideshowEngine() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot-indicator");
  let currentIndex = 0;

  if(slides.length === 0) return;

  const advanceSlideLoop = (targetIndex = -1) => {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    
    if(targetIndex === -1) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = targetIndex;
    }

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  };

  let intervalHandle = setInterval(advanceSlideLoop, 5000);

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(intervalHandle);
      const targetIdx = parseInt(dot.getAttribute("data-slide-target"), 10);
      advanceSlideLoop(targetIdx);
      intervalHandle = setInterval(advanceSlideLoop, 5000);
    });
  });
}

// -------------------------------------------------------------------------
// 4. DATA PRESENTATION FORMATTING ENGINES (MATH TRANSFORM ROUTINES)
// -------------------------------------------------------------------------
/**
 * Dynamic calculation helper converting baseline parameters to local strings.
 */
function formatCurrencyValue(amountUSD) {
  if (AppState.currency === "KHR") {
    const numericKHR = Math.round(amountUSD * SYSTEM_CURRENCY_CONVERSION_MULTIPLIER);
    return `${numericKHR.toLocaleString("en-US")} ៛`;
  }
  return `$${amountUSD.toFixed(2)}`;
}

// -------------------------------------------------------------------------
// 5. DOM RE-RENDERING HUD LAYER INTERFACES DIRECTORY CONTROLLERS INDEX
// -------------------------------------------------------------------------
/**
 * Master interface router. Calls rendering functions to update the UI layout tree.
 */
function renderApplicationDOMContext() {
  document.getElementById("currentCurrencyDisplay").innerText = AppState.currency;
  renderCatalogGridDisplayNode();
  renderCartSheetDrawerNode();
  renderWishlistSheetDrawerNode();
  renderAuthStatusControlElements();
}

/**
 * Dynamic Catalog Rendering Subassembly Engine. Filters and maps state items into product cards.
 */
function renderCatalogGridDisplayNode() {
  const gridNode = document.getElementById("globalProductCardContainerGridInjectionNode");
  if(!gridNode) return;

  // 1. Process filtering operations
  let filteredCatalog = AppState.catalog.filter(item => {
    const matchesCategory = AppState.activeCategory === "all" || item.category === AppState.activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) || 
                          item.shortDesc.toLowerCase().includes(AppState.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Process sorting computations
  if (AppState.sortBy === "price-asc") {
    filteredCatalog.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (AppState.sortBy === "price-desc") {
    filteredCatalog.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (AppState.sortBy === "rating-desc") {
    filteredCatalog.sort((a, b) => b.rating - a.rating);
  }

  // Update layout status elements tracking text indices
  document.getElementById("displayedCatalogCountTextLabel").innerText = filteredCatalog.length;
  const filterResetContainer = document.getElementById("activeFilterNotificationResetContainer");
  if(AppState.searchQuery !== "" || AppState.activeCategory !== "all" || AppState.sortBy !== "default") {
    if(filterResetContainer) filterResetContainer.classList.remove("d-none");
  } else {
    if(filterResetContainer) filterResetContainer.classList.add("d-none");
  }

  if(filteredCatalog.length === 0) {
    gridNode.innerHTML = `
      <div class="col-12 empty-state my-5 py-5 w-100 text-center">
        <i class="bi bi-shield-exclamation text-muted display-4 mb-3"></i>
        <h5 class="font-display fw-bold text-dark">No Matching Formulations Found</h5>
        <p class="small text-muted">Adjust your parameters or clear terms to view remaining available records inventory.</p>
      </div>
    `;
    return;
  }

  // 3. Render items into structural layout nodes elements string loops
  gridNode.innerHTML = filteredCatalog.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id) ? "active" : "";
    const heartIconClass = AppState.wishlist.includes(product.id) ? "bi-heart-fill text-white" : "bi-heart";
    
    // Process operational stock inventory thresholds parameters indicators context strings rules text tags
    let stockDisplayHtml = `<span class="stock-line in"><span class="dot"></span>In Stock (${product.stock})</span>`;
    let primaryActionBtnHtml = `<button class="btn btn-gold font-display py-2" onclick="appendProductToCartBucket('${product.id}')"><i class="bi bi-bag-plus me-1"></i>Add</button>`;
    let badgeHtml = "";

    if (product.stock === 0) {
      stockDisplayHtml = `<span class="stock-line out"><span class="dot"></span>Depleted Out</span>`;
      primaryActionBtnHtml = `<button class="btn btn-secondary py-2" disabled>Depleted</button>`;
      badgeHtml = `<span class="badge-myth badge-out">Depleted</span>`;
    } else if (product.stock <= 5) {
      stockDisplayHtml = `<span class="stock-line low"><span class="dot"></span>Critical Level (${product.stock})</span>`;
    }

    if (product.rating === 5.0) {
      badgeHtml += `<span class="badge-myth badge-best">Master Blend</span>`;
    }

    return `
      <div class="col">
        <div class="product-card">
          ${badgeHtml}
          <button class="wishlist-toggle ${isWishlisted}" onclick="toggleWishlistTargetState('${product.id}')" title="Track Product Parameter">
            <i class="bi ${heartIconClass}"></i>
          </button>
          
          <div class="product-visual ${product.classGradient}">
            <div class="corner tl"></div><div class="corner tr"></div>
            <div class="corner bl"></div><div class="corner br"></div>
            <i class="bi ${product.icon} visual-icon"></i>
          </div>

          <div class="product-body">
            <span class="product-cat-eyebrow">${product.category}</span>
            <h6 class="product-name">${product.name}</h6>
            <p class="product-desc-short">${product.shortDesc}</p>
            
            <div class="product-rating">
              <span class="stars">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}</span>
              <span>(${product.rating})</span>
            </div>

            <div class="product-price-row">
              <span class="price-usd">${formatCurrencyValue(product.priceUSD)}</span>
              ${AppState.currency === "USD" ? `<span class="price-khr">~ ${formatCurrencyValue(product.priceUSD * 0 + (product.priceUSD * SYSTEM_CURRENCY_CONVERSION_MULTIPLIER / SYSTEM_CURRENCY_CONVERSION_MULTIPLIER))} via KHR conversion</span>` : ""}
            </div>

            ${stockDisplayHtml}

            <div class="product-actions mt-2">
              ${primaryActionBtnHtml}
              <button class="btn btn-ghost-myth btn-icon-only" onclick="launchProductInspectionPanel('${product.id}')" title="Inspect Full Formulas Documentation Specs">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Render Cart Sheet Items Interface Controller Grid Element Subassembly Loop Stream Node.
 */
function renderCartSheetDrawerNode() {
  const cartHook = document.getElementById("cartOffcanvasDataStreamingContentHook");
  const badgeCount = document.getElementById("cartBadgeCount");
  if(!cartHook) return;

  // Calculate global items stack density counters index metrics parameters
  const itemsDensityCount = AppState.cart.reduce((total, entry) => total + entry.quantity, 0);
  if(badgeCount) badgeCount.innerText = itemsDensityCount;

  if (AppState.cart.length === 0) {
    cartHook.innerHTML = `
      <div class="empty-state my-auto">
        <i class="bi bi-bag-x text-muted display-4"></i>
        <h6 class="font-display fw-bold text-dark mt-3">Your Basket is Empty</h6>
        <p class="small text-muted">Browse our collection to add premium beverage formulas to your current active session storage basket.</p>
      </div>
    `;
    return;
  }

  // Compute operational running currency sums metrics parameters
  let cartSubtotalUSD = 0;
  
  let cartItemsHtmlList = AppState.cart.map(entry => {
    const productItem = AppState.catalog.find(p => p.id === entry.productId);
    if(!productItem) return "";
    
    const itemTotalUSD = productItem.priceUSD * entry.quantity;
    cartSubtotalUSD += itemTotalUSD;

    return `
      <div class="cart-item">
        <div class="cart-item-visual ${productItem.classGradient}">
          <i class="bi ${productItem.icon}"></i>
        </div>
        <div class="cart-item-info">
          <span class="cart-item-cat">${productItem.category}</span>
          <h6>${productItem.name}</h6>
          <div class="cart-item-controls">
            <div class="qty-selector">
              <button onclick="mutateCartItemQuantityQuantity('${productItem.id}', -1)">-</button>
              <input type="text" value="${entry.quantity}" readonly>
              <button onclick="mutateCartItemQuantityQuantity('${productItem.id}', 1)">+</button>
            </div>
            <span class="fw-bold small text-dark">${formatCurrencyValue(itemTotalUSD)}</span>
            <button class="cart-remove-btn ms-2" onclick="purgeProductFromCartBucket('${productItem.id}')" title="Purge Record Row"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  cartHook.innerHTML = `
    <div class="flex-grow-1 overflow-y-auto pe-1">
      ${cartItemsHtmlList}
    </div>
    <div class="offcanvas-footer mt-auto rounded border-0">
      <div class="cart-summary-row">
        <span>Basket Subtotal</span>
        <span>${formatCurrencyValue(cartSubtotalUSD)}</span>
      </div>
      <div class="cart-summary-row">
        <span>Estimated Freight Delivery Logistics Tariff</span>
        <span class="text-success font-display small fw-bold">COMPLIMENTARY SEAL</span>
      </div>
      <div class="cart-summary-row total">
        <span class="font-display fw-bold">Aggregate Final Amount Due</span>
        <div class="text-end">
          <span class="d-block text-primary fs-5 fw-bold">${formatCurrencyValue(cartSubtotalUSD)}</span>
        </div>
      </div>
      <button class="btn btn-gold w-100 font-display py-2.5 mt-3 rounded shadow-sm fs-6" onclick="executeCartCheckoutPipeline()">
        <i class="bi bi-shield-check me-2"></i>Execute Purchase Seal Order
      </button>
    </div>
  `;
}

/**
 * Render Wishlist Sheet Panel Side Module Selector Context List Components Frame Overlay Drawer Node Subassembly Frame Grid template.
 */
function renderWishlistSheetDrawerNode() {
  const wishlistHook = document.getElementById("wishlistOffcanvasDataStreamingContentHook");
  const badgeCount = document.getElementById("wishlistBadgeCount");
  if(!wishlistHook) return;

  if(badgeCount) badgeCount.innerText = AppState.wishlist.length;

  if (AppState.wishlist.length === 0) {
    wishlistHook.innerHTML = `
      <div class="empty-state my-auto">
        <i class="bi bi-heart text-muted display-4"></i>
        <h6 class="font-display fw-bold text-dark mt-3">No Monitored Formulations</h6>
        <p class="small text-muted">Click the heart layout anchor node items icons on standard product visuals cards to monitor item indices profiles here.</p>
      </div>
    `;
    return;
  }

  wishlistHook.innerHTML = AppState.wishlist.map(id => {
    const productItem = AppState.catalog.find(p => p.id === id);
    if(!productItem) return "";

    return `
      <div class="cart-item align-items-center">
        <div class="cart-item-visual ${productItem.classGradient}">
          <i class="bi ${productItem.icon}"></i>
        </div>
        <div class="cart-item-info">
          <span class="cart-item-cat">${productItem.category}</span>
          <h6 class="m-0">${productItem.name}</h6>
          <span class="text-muted small fw-bold">${formatCurrencyValue(productItem.priceUSD)}</span>
        </div>
        <div class="d-flex gap-1">
          <button class="btn btn-sm btn-gold p-2 rounded-circle" onclick="appendProductToCartBucket('${productItem.id}')" title="Transfer Item To Active Basket Box Node Context"><i class="bi bi-bag-plus"></i></button>
          <button class="btn btn-sm btn-light p-2 rounded-circle border text-danger" onclick="toggleWishlistTargetState('${productItem.id}')" title="Drop Tracking"><i class="bi bi-heart-break"></i></button>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Authenticated Client Session Presentation Display Matrix Element Node Router Module Wrapper layout array.
 */
function renderAuthStatusControlElements() {
  const container = document.getElementById("authNavbarWrapper");
  if(!container) return;

  if (AppState.userSession) {
    container.innerHTML = `
      <div class="dropdown">
        <button class="btn btn-ghost-myth rounded-pill px-3 py-1.5 dropdown-toggle d-flex align-items-center gap-1.5 text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-person-circle fs-6 text-primary"></i>
          <span class="small fw-semibold max-w-100ch d-inline-block text-truncate">${AppState.userSession.name.split(" ")[0]}</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 p-2 mt-2">
          <li class="px-3 py-2 border-bottom mb-1">
            <span class="d-block small text-muted">Active Node Access Identity</span>
            <strong class="d-block small text-dark text-truncate">${AppState.userSession.email}</strong>
          </li>
          <li><button class="dropdown-item text-danger rounded" onclick="executeAccountSignOutPipeline()"><i class="bi bi-box-arrow-right me-2"></i>Close Identity Session</button></li>
        </ul>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="btn btn-ghost-myth rounded-pill px-3 py-1.5 small text-nowrap d-none d-sm-inline-block" onclick="launchAuthGatewayPortal('login')">Login</button>
      <button class="btn btn-gold rounded-pill px-3 py-1.5 small text-nowrap" onclick="launchAuthGatewayPortal('signup')">Sign Up</button>
    `;
  }
}

// -------------------------------------------------------------------------
// 6. OPERATIONAL PLATFORM INTERACTION BACKEND MUTATIONS ACTIONS PIPELINES
// -------------------------------------------------------------------------
/**
 * Mutate Active System Working Currency Parameter Engine Handler Function.
 */
function mutateSystemCurrencyDisplayProfile(currencyToken) {
  AppState.currency = currencyToken;
  localStorage.setItem("myth_currency", currencyToken);
  logAuditTrail("Currency Transformation Execution Complete Pipeline Profile Intercept", { targetCurrency: currencyToken });
  renderApplicationDOMContext();
  displaySystemToastNotification(`Currency tracking profile updated to ${currencyToken} globally.`, "info");
}

/**
 * Append Selected Catalog Product Key ID Reference to Storage Basket Container.
 */
function appendProductToCartBucket(productId, targetedQuantity = 1) {
  const catalogProduct = AppState.catalog.find(p => p.id === productId);
  if (!catalogProduct || catalogProduct.stock === 0) {
    displaySystemToastNotification("Requested inventory selection parameter is currently unavailable.", "error");
    return;
  }

  const existingBasketIndex = AppState.cart.findIndex(entry => entry.productId === productId);
  
  if (existingBasketIndex > -1) {
    const projectedQuantity = AppState.cart[existingBasketIndex].quantity + targetedQuantity;
    if (projectedQuantity > catalogProduct.stock) {
      displaySystemToastNotification(`Requested aggregate count exceeds maximum stock clearance limits (${catalogProduct.stock}).`, "error");
      return;
    }
    AppState.cart[existingBasketIndex].quantity = projectedQuantity;
  } else {
    if (targetedQuantity > catalogProduct.stock) {
      displaySystemToastNotification(`Requested baseline unit selection exceeds stock count limits.`, "error");
      return;
    }
    AppState.cart.push({ productId: productId, quantity: targetedQuantity });
  }

  localStorage.setItem("myth_cart", JSON.stringify(AppState.cart));
  logAuditTrail("Cart Storage Element Appended Parameter Matrix Drop", { appendId: productId, qty: targetedQuantity });
  renderCartSheetDrawerNode();
  displaySystemToastNotification(`Appended "${catalogProduct.name}" to your active basket bucket store.`, "success");
}

/**
 * Increment or decrement item counts directly within the shopping cart drawer interface overlay canvas.
 */
function mutateCartItemQuantityQuantity(productId, directionalDelta) {
  const targetIndex = AppState.cart.findIndex(e => e.productId === productId);
  if (targetIndex === -1) return;

  const catalogProduct = AppState.catalog.find(p => p.id === productId);
  const projectedQuantity = AppState.cart[targetIndex].quantity + directionalDelta;

  if (projectedQuantity <= 0) {
    purgeProductFromCartBucket(productId);
    return;
  }

  if (catalogProduct && projectedQuantity > catalogProduct.stock) {
    displaySystemToastNotification(`Requested allocation tier breaks current inventory limitations boundary ceiling (${catalogProduct.stock}).`, "error");
    return;
  }

  AppState.cart[targetIndex].quantity = projectedQuantity;
  localStorage.setItem("myth_cart", JSON.stringify(AppState.cart));
  renderCartSheetDrawerNode();
}

/**
 * Completely purge a product row entry from the basket bucket store container matrix object.
 */
function purgeProductFromCartBucket(productId) {
  AppState.cart = AppState.cart.filter(entry => entry.productId !== productId);
  localStorage.setItem("myth_cart", JSON.stringify(AppState.cart));
  logAuditTrail("Cart Purge Operation Executed Target Object Reference", { purgedId: productId });
  renderCartSheetDrawerNode();
  displaySystemToastNotification("Item listing dropped from tracking basket store matrix mapping data index location row.", "info");
}

/**
 * Toggle the inclusion of an application item identifier inside user wishlist array trackers.
 */
function toggleWishlistTargetState(productId) {
  const wishlistIndex = AppState.wishlist.indexOf(productId);
  if (wishlistIndex > -1) {
    AppState.wishlist.splice(wishlistIndex, 1);
    displaySystemToastNotification("Product tracking criteria disconnected from active reference list dashboard index context.", "info");
  } else {
    AppState.wishlist.push(productId);
    displaySystemToastNotification("Product dynamic parameters mirrored over internal wishlist tracking deck monitor matrix context.", "success");
  }
  localStorage.setItem("myth_wishlist", JSON.stringify(AppState.wishlist));
  logAuditTrail("Wishlist Configuration Profile Toggle Action Executed Intercept Data Node", { updatedWishlist: AppState.wishlist });
  renderCatalogGridDisplayNode();
  renderWishlistSheetDrawerNode();
}

// -------------------------------------------------------------------------
// 7. INSPECTION MODAL SYSTEM PIPELINES INTERFACES HUB DECK LAYOUT MATRIX
// -------------------------------------------------------------------------
/**
 * Dynamic content generation script framework mapping properties context onto core component nodes inside the catalog dashboard overlay modal view structure sheet.
 */
function launchProductInspectionPanel(productId) {
  const targetProduct = AppState.catalog.find(p => p.id === productId);
  if(!targetProduct) return;

  const contentHook = document.getElementById("dynamicInspectionModalContentInjectionHook");
  if(!contentHook) return;

  // Extract structured meta JSON context elements
  const metricsSpecs = JSON.parse(targetProduct.specJson || '{}');
  const specRowsHtml = Object.keys(metricsSpecs).map(key => `
    <tr>
      <td>${key}</td>
      <td>${metricsSpecs[key]}</td>
    </tr>
  `).join("");

  let footerPurchaseActionsGridHtml = `
    <div class="d-flex align-items-center gap-3 w-100 flex-wrap">
      <div class="qty-selector">
        <button onclick="adjustModalInspectionCounterInline(-1, ${targetProduct.stock})">-</button>
        <input type="text" id="modalActiveInspectionQuantityField" value="1" readonly>
        <button onclick="adjustModalInspectionCounterInline(1, ${targetProduct.stock})">+</button>
      </div>
      <button class="btn btn-outline-dark flex-grow-1 font-display py-2.5" onclick="executeModalContextAddToCartAction('${targetProduct.id}')"><i class="bi bi-bag-plus me-2"></i>Add To Basket</button>
      <button class="btn btn-gold flex-grow-1 font-display py-2.5 fw-bold" onclick="executeModalContextBuyNowInstantAction('${targetProduct.id}')"><i class="bi bi-lightning-charge-fill me-1"></i>Instant Checkout Now</button>
    </div>
  `;

  if(targetProduct.stock === 0) {
    footerPurchaseActionsGridHtml = `
      <div class="w-100 text-center py-2 bg-light rounded text-muted fw-bold">
        <i class="bi bi-exclamation-octagon me-2 text-danger"></i>Requested Inventory Formula is Currently Depleted Out of Stock
      </div>
    `;
  }

  contentHook.innerHTML = `
    <div class="row g-0">
      <div class="col-md-5 p-4 d-flex flex-column align-items-center justify-content-center text-center ${targetProduct.classGradient} position-relative text-white">
        <div class="corner tl" style="border-color:#fff !important;"></div><div class="corner tr" style="border-color:#fff !important;"></div>
        <div class="corner bl" style="border-color:#fff !important;"></div><div class="corner br" style="border-color:#fff !important;"></div>
        <i class="bi-shield-shaded position-absolute top-0 start-0 m-3 opacity-25 fs-4"></i>
        <i class="bi ${targetProduct.icon} visual-icon display-1"></i>
        <h4 class="font-display fw-bold text-white mt-3 mb-1 tracking-wider">${targetProduct.name}</h4>
        <span class="badge bg-white text-dark small text-uppercase tracking-widest fw-bold mt-1 px-3 py-1 rounded-pill">${targetProduct.category}</span>
      </div>
      <div class="col-md-7 p-4 bg-white d-flex flex-column">
        <div class="d-flex align-items-start justify-content-between mb-2">
          <div>
            <span class="eyebrow small text-warning d-block mb-1">Apothecary Formulation Log</span>
            <h3 class="font-display fw-bold text-dark mb-0">${targetProduct.name}</h3>
          </div>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close View Panel Frame Container Element Layer Object Layout Component Assembly Hook Target Anchor"></button>
        </div>
        <div class="product-rating mb-3">
          <span class="stars text-warning">${"★".repeat(Math.floor(targetProduct.rating))}${"☆".repeat(5 - Math.floor(targetProduct.rating))}</span>
          <span class="text-muted small">(${targetProduct.rating} verification audit tier notes)</span>
        </div>
        
        <p class="small text-secondary mb-4 leading-relaxed">${targetProduct.shortDesc} This advanced luxury beverage vector is subject to dynamic conversion properties matching standard client operational storage data registries parameters perfectly.</p>
        
        <h6 class="font-display small fw-bold text-dark border-bottom pb-1 mb-2">Structural Chemistry Technical Specs Matrix</h6>
        <table class="spec-table mb-4">
          <tbody>
            ${specRowsHtml}
            <tr>
              <td>Current Clearance Allocation Available</td>
              <td class="fw-bold ${targetProduct.stock > 0 ? "text-success" : "text-danger"}">${targetProduct.stock > 0 ? `In Stock (${targetProduct.stock} unit arrays)` : "Depleted Out"}</td>
            </tr>
          </tbody>
        </table>

        <div class="mt-auto pt-3 border-top">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted small fw-medium">Unit Cost Parameter Metric</span>
            <h4 class="text-primary font-display fw-bold m-0" id="modalInspectionRunningTotalLabelPriceDisplay" data-base-unit-usd="${targetProduct.priceUSD}">${formatCurrencyValue(targetProduct.priceUSD)}</h4>
          </div>
          ${footerPurchaseActionsGridHtml}
        </div>
      </div>
    </div>
  `;

  // Explicit initialization trigger for the dynamic inspection modal sheet interface view layer container frame node object component instance
  const modalObj = new bootstrap.Modal(document.getElementById("productInspectionModalHub"));
  modalObj.show();
}

/**
 * Handle quantity increment values safely within the limits bounding bounds inside modal view frames.
 */
function adjustModalInspectionCounterInline(stepDelta, operationalStockLimit) {
  const inputField = document.getElementById("modalActiveInspectionQuantityField");
  const priceDisplay = document.getElementById("modalInspectionRunningTotalLabelPriceDisplay");
  if(!inputField || !priceDisplay) return;

  let currentCount = parseInt(inputField.value, 10);
  let projectedCount = currentCount + stepDelta;

  if (projectedCount < 1) projectedCount = 1;
  if (projectedCount > operationalStockLimit) {
    displaySystemToastNotification(`Requested baseline item configuration limit reaches stock ceiling threshold boundaries allocation (${operationalStockLimit}).`, "error");
    projectedCount = operationalStockLimit;
  }

  inputField.value = projectedCount;
  
  const baselineUSD = parseFloat(priceDisplay.getAttribute("data-base-unit-usd"));
  const computedAggregateUSD = baselineUSD * projectedCount;
  priceDisplay.innerText = formatCurrencyValue(computedAggregateUSD);
}

/**
 * Bridge modal inputs into adding products to the shopping basket.
 */
function executeModalContextAddToCartAction(productId) {
  const inputField = document.getElementById("modalActiveInspectionQuantityField");
  if(!inputField) return;

  const targetAllocatedCount = parseInt(inputField.value, 10);
  appendProductToCartBucket(productId, targetAllocatedCount);
  
  // Suppress modal layout viewing state container context layer elements instance component
  const modalNode = document.getElementById("productInspectionModalHub");
  const modalInstance = bootstrap.Modal.getInstance(modalNode);
  if(modalInstance) modalInstance.hide();
}

/**
 * Directly intercept selection targets to instantly check out individual product listings via high priority bypass loops.
 */
function executeModalContextBuyNowInstantAction(productId) {
  const inputField = document.getElementById("modalActiveInspectionQuantityField");
  if(!inputField) return;

  const targetedCount = parseInt(inputField.value, 10);
  const catalogProduct = AppState.catalog.find(p => p.id === productId);

  if(!catalogProduct || catalogProduct.stock < targetedCount) {
    displaySystemToastNotification("Requested checkout tier violates current inventory capabilities constraints metrics logic boundary parameters index location allocation.", "error");
    return;
  }

  // Clear modal overlay display context node layer object component instance frame
  const modalNode = document.getElementById("productInspectionModalHub");
  const modalInstance = bootstrap.Modal.getInstance(modalNode);
  if(modalInstance) modalInstance.hide();

  // Route operations directly toward individual invoice ledger creation workflows
  const immediateInstantCheckoutPayload = [{ productId: productId, quantity: targetedCount }];
  generateInvoiceStatementReceiptLedger(immediateInstantCheckoutPayload);
}

// -------------------------------------------------------------------------
// 8. THE INVOICE GENERATOR & CHECKOUT PROCESSING MATRIX OPERATION ENGINE
// -------------------------------------------------------------------------
/**
 * Compile cart arrays into storage records and display system invoices.
 */
function executeCartCheckoutPipeline() {
  if (AppState.cart.length === 0) {
    displaySystemToastNotification("Your active tracking basket grid container contains zero actionable target configurations data items indices.", "error");
    return;
  }

  // Intercept operations to verify adequacy criteria rules context logs map limits profiles metrics
  for (let entry of AppState.cart) {
    const originalItem = AppState.catalog.find(p => p.id === entry.productId);
    if (!originalItem || originalItem.stock < entry.quantity) {
      displaySystemToastNotification(`Inventory tracking parameters variance mismatch encountered during clearance checkout loops for item: "${originalItem ? originalItem.name : 'Unknown Record'}"`, "error");
      return;
    }
  }

  // Retain tracking array structures pointer maps copies values parameters context profiles metrics logic objects
  const checkoutPayloadClone = [...AppState.cart];

  // Reset core tracking variables state nodes records array sets
  AppState.cart = [];
  localStorage.setItem("myth_cart", JSON.stringify(AppState.cart));
  renderCartSheetDrawerNode();

  // Dismiss drawer sheet frame components context layouts nodes elements overlay container views if displayed active open
  const drawerNode = document.getElementById("cartOffcanvas");
  const drawerInstance = bootstrap.Offcanvas.getInstance(drawerNode);
  if (drawerInstance) drawerInstance.hide();

  // Process data parameters context payload arrays directly inside generation center subroutines layout matrix
  generateInvoiceStatementReceiptLedger(checkoutPayloadClone);
}

/**
 * Construct historical receipt sheets, alter catalog inventories, and log metadata summaries.
 */
function generateInvoiceStatementReceiptLedger(checkoutItemPayloadArray) {
  let aggregateGrossInvoiceUSD = 0;
  
  // 1. Process operational catalog mutations updates variables
  const computedInvoiceLineItemsHtml = checkoutItemPayloadArray.map(entry => {
    const structuralCatalogItemReference = AppState.catalog.find(p => p.id === entry.productId);
    
    // Deduct stock levels inside active session catalog records
    structuralCatalogItemReference.stock -= entry.quantity;
    
    const rowCostUSD = structuralCatalogItemReference.priceUSD * entry.quantity;
    aggregateGrossInvoiceUSD += rowCostUSD;

    return `
      <tr>
        <td class="py-1 text-dark fw-medium">${structuralCatalogItemReference.name} <span class="text-muted small">x${entry.quantity}</span></td>
        <td class="py-1 text-end text-secondary">${formatCurrencyValue(structuralCatalogItemReference.priceUSD)}</td>
        <td class="py-1 text-end text-dark fw-bold">${formatCurrencyValue(rowCostUSD)}</td>
      </tr>
    `;
  }).join("");

  // Sync remaining stock variables changes over dynamic interface catalog visual grid element display matrices layout views layers parameters index context properties
  renderCatalogGridDisplayNode();

  // 2. Generate random tracking keys parameters matrix code metadata indices metrics values objects lines
  const uniqueReceiptSignatureToken = `MYTH-TX-${Math.floor(100000 + Math.random() * 900000)}`;
  const compilationTimestampString = new Date().toLocaleString();

  const freshHistoricalInvoiceObjectNode = {
    transactionId: uniqueReceiptSignatureToken,
    timestamp: compilationTimestampString,
    currencyProfileUsed: AppState.currency,
    grossAggregateCostUSD: aggregateGrossInvoiceUSD,
    itemsSubBlockPayload: checkoutItemPayloadArray
  };

  // 3. Commit structured objects history matrices data streams across to local storage collections databases indices files
  let currentInvoiceHistoryRegistryArchive = JSON.parse(localStorage.getItem("myth_invoice_history") || "[]");
  currentInvoiceHistoryRegistryArchive.unshift(freshHistoricalInvoiceObjectNode);
  localStorage.setItem("myth_invoice_history", JSON.stringify(currentInvoiceHistoryRegistryArchive));

  logAuditTrail("Transaction Purchase Order Seal Processing Successful Ledger Object Node Generated", freshHistoricalInvoiceObjectNode);

  // 4. Update the active viewing window with a premium formatted transaction card confirmation frame layout view shell component object container row node
  const modalContentTargetHook = document.getElementById("dynamicInspectionModalContentInjectionHook");
  if(!modalContentTargetHook) return;

  modalContentTargetHook.innerHTML = `
    <div class="p-4 bg-white">
      <div class="text-center mb-4">
        <i class="bi bi-shield-check text-success display-2 mb-2 d-block animate-bounce"></i>
        <span class="eyebrow text-success">Order Processing Executed Successfully</span>
        <h3 class="font-display fw-bold text-dark mt-1">Transaction Invoice Generated Under Seal</h3>
        <p class="small text-muted">Your payment vector profile values parameters authorization cleared catalog asset allocations lines successfully.</p>
      </div>

      <div class="receipt-box mb-4">
        <div class="receipt-header d-flex justify-content-between align-items-center">
          <div>
            <span class="d-block text-muted small fw-semibold">TRANSACTION BLOCK SIGNATURE</span>
            <strong class="text-primary font-display">${uniqueReceiptSignatureToken}</strong>
          </div>
          <div class="text-end">
            <span class="d-block text-muted small fw-semibold">COMPILATION TIMESTAMPS RECORD</span>
            <span class="text-dark small">${compilationTimestampString}</span>
          </div>
        </div>

        <table class="w-100 mb-3 table table-borderless align-middle m-0">
          <thead>
            <tr class="border-bottom text-muted small">
              <th class="pb-1 fw-bold text-uppercase">Formulation Vector Registry Line</th>
              <th class="pb-1 text-end fw-bold text-uppercase">Unit cost</th>
              <th class="pb-1 text-end fw-bold text-uppercase">Row total</th>
            </tr>
          </thead>
          <tbody>
            ${computedInvoiceLineItemsHtml}
          </tbody>
        </table>

        <div class="border-top pt-2 mt-2 d-flex justify-content-between align-items-center">
          <span class="font-display fw-bold text-dark">Aggregate Verified Payment Settled Total:</span>
          <h4 class="text-success font-display fw-bold m-0">${formatCurrencyValue(aggregateGrossInvoiceUSD)}</h4>
        </div>
      </div>

      <div class="d-flex gap-2 justify-content-end">
        <button class="btn btn-dark px-4 font-display py-2 rounded" data-bs-dismiss="modal">Close Window Frame Registry</button>
        <button class="btn btn-gold px-4 font-display py-2 rounded" onclick="window.print();"><i class="bi bi-printer me-2"></i>Print Statement</button>
      </div>
    </div>
  `;

  // Explicit dynamic trigger switch routing invocation across inspection viewport dialog arrays stack blocks components configuration logic profiles settings
  const modalNodeRef = document.getElementById("productInspectionModalHub");
  const modalInstanceContextObject = bootstrap.Modal.getInstance(modalNodeRef) || new bootstrap.Modal(modalNodeRef);
  modalInstanceContextObject.show();

  displaySystemToastNotification("Purchase transaction order secured under brand verification seals.", "success");
}

// -------------------------------------------------------------------------
// 9. HISTORICAL INVOICES ARCHIVE VIEWER SUBSYSTEM PIPELINES RENDERING INTERFACE
// -------------------------------------------------------------------------
/**
 * Mount user history receipts from local storage databases records directly over inside modal tracking view panels nodes list blocks components frame grids arrays.
 */
document.getElementById("receiptHistoryModalHub").addEventListener("show.bs.modal", () => {
  const containerHook = document.getElementById("receiptsHistoryListingRootArchiveHook") || document.getElementById("receiptsHistoryListingRootAnchorHook");
  if(!containerHook) return;

  const invoiceHistoryCollection = JSON.parse(localStorage.getItem("myth_invoice_history") || "[]");

  if (invoiceHistoryCollection.length === 0) {
    containerHook.innerHTML = `
      <div class="empty-state my-5 text-center">
        <i class="bi bi-folder-x text-muted display-3 mb-2"></i>
        <h5 class="font-display fw-bold text-dark">Zero Historical Invoices Found</h5>
        <p class="small text-muted">Complete transactions inside our online premium beverage apothecary matrix catalog to access dynamic statement indices records arrays here.</p>
      </div>
    `;
    return;
  }

  containerHook.innerHTML = invoiceHistoryCollection.map(invoice => {
    
    const inlineItemsSummaryStringHtml = invoice.itemsSubBlockPayload.map(entry => {
      const originalItemMatch = AppState.catalog.find(p => p.id === entry.productId) || { name: "Archived Formulation Identity" };
      return `<li class="small text-secondary py-0.5"><i class="bi bi-dot text-warning me-1"></i>${originalItemMatch.name} <span class="fw-bold text-dark">x${entry.quantity}</span></li>`;
    }).join("");

    return `
      <div class="receipt-box mb-3 border-1 rounded shadow-sm p-3">
        <div class="d-flex justify-content-between align-items-start mb-2 border-bottom pb-2">
          <div>
            <span class="text-muted small d-block tracking-widest fw-semibold">TX INDEX BLOCK ID</span>
            <strong class="text-primary font-display small">${invoice.transactionId}</strong>
          </div>
          <div class="text-end">
            <span class="text-muted small d-block tracking-widest fw-semibold">TIMESTAMP LOG RECORD</span>
            <span class="text-dark small fs-7">${invoice.timestamp}</span>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-8">
            <span class="text-muted small d-block mb-1 font-display tracking-wider fw-bold">Appended Manifest Load items:</span>
            <ul class="list-unstyled m-0 ps-1">
              ${inlineItemsSummaryStringHtml}
            </ul>
          </div>
          <div class="col-sm-4 text-sm-end text-start mt-2 mt-sm-0 border-start-sm">
            <span class="text-muted small d-block">Settled Gross Cost Summary</span>
            <h5 class="text-success font-display fw-bold m-0 mt-0.5">${formatCurrencyValue(invoice.grossAggregateCostUSD)}</h5>
          </div>
        </div>
      </div>
    `;
  }).join("");
});

// -------------------------------------------------------------------------
// 10. AUTHENTICATION IDENTITY GATEWAY DATA PROCESSING ROUTER ARCHITECTURE PIPELINE MODULE UI LOGIC COMPONENTS NODES LAYERS CONFIG
// -------------------------------------------------------------------------
/**
 * Dynamic content injector mapping structural form templates inside authenticating modal shells parameters blocks components configurations logic profile settings contexts layouts objects framework.
 */
function launchAuthGatewayPortal(authModeTypeToken = "login") {
  const modalTitle = document.getElementById("authGatewayModalTitleLabelText");
  const modalBody = document.getElementById("authGatewayModalBodyWrapper");
  if(!modalBody || !modalTitle) return;

  if (authModeTypeToken === "login") {
    modalTitle.innerHTML = `<i class="bi bi-shield-lock text-primary me-2"></i>Access Identity Gateway`;
    modalBody.innerHTML = `
      <form class="form-myth needs-validation" id="mythCoreSystemLoginForm" onsubmit="executeLoginValidationInterceptor(event)">
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Authorized Core Access Email Address</label>
          <div class="input-group">
            <span class="input-group-text bg-light text-muted"><i class="bi bi-envelope"></i></span>
            <input type="email" id="loginFieldEmailInputAddress" class="form-control" placeholder="example: admin@mythglory.com" required>
          </div>
          <div class="small text-muted mt-1 fs-7">Demo Account: <span class="fw-bold text-primary">admin@mythglory.com</span></div>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Secured Validation Key Token Profile Passphrase</label>
          <div class="input-group">
            <span class="input-group-text bg-light text-muted"><i class="bi bi-key"></i></span>
            <input type="password" id="loginFieldPasswordInputPassphrase" class="form-control" placeholder="••••••••••••" required>
          </div>
          <div class="small text-muted mt-1 fs-7">Demo Key: <span class="fw-bold text-primary">Password123</span></div>
        </div>
        <button type="submit" class="btn btn-gold w-100 font-display py-2 mt-2 rounded shadow-sm">Authorize Secure Signature Login Sequence</button>
        <p class="small text-center text-muted mt-3 mb-0">Unregistered Identity Signature Parameter Profile Allocation Tier? <a href="#" class="fw-bold text-primary" onclick="launchAuthGatewayPortal('signup')">Create Fresh Identity Profile Node Here</a></p>
      </form>
    `;
  } else {
    modalTitle.innerHTML = `<i class="bi bi-person-plus text-primary me-2"></i>Register Fresh Identity Signature Node`;
    modalBody.innerHTML = `
      <form class="form-myth needs-validation" id="mythCoreSystemSignUpForm" onsubmit="executeSignUpValidationInterceptor(event)">
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Legal Persona Full Name Vector Identity Mapping</label>
          <div class="input-group">
            <span class="input-group-text bg-light text-muted"><i class="bi bi-person"></i></span>
            <input type="text" id="signUpFieldFullNameInputText" class="form-control" placeholder="example: Baron von MythGlory" required>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Target Communication Email Electronic Routing Destination</label>
          <div class="input-group">
            <span class="input-group-text bg-light text-muted"><i class="bi bi-envelope"></i></span>
            <input type="email" id="signUpFieldEmailInputAddress" class="form-control" placeholder="example: investor@domain.com" required>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Establish Secure Configuration Validation Passphrase String</label>
          <div class="input-group">
            <span class="input-group-text bg-light text-muted"><i class="bi bi-lock"></i></span>
            <input type="password" id="signUpFieldPasswordInputPassphrase" class="form-control" placeholder="Minimum length: 6 characters sequence tokens" minlength="6" required>
          </div>
        </div>
        <button type="submit" class="btn btn-gold w-100 font-display py-2 mt-2 rounded shadow-sm">Commit Signature Profile Node Data Arrays across Database Registry File</button>
        <p class="small text-center text-muted mt-3 mb-0">Existing Authenticated Credentials Node Registry Reference? <a href="#" class="fw-bold text-primary" onclick="launchAuthGatewayPortal('login')">Return back to Gateway Entrance Portal Log View</a></p>
      </form>
    `;
  }

  const gatewayModalRefNodeElement = document.getElementById("authGatewayModalHub");
  const modalInstanceObjectContainer = bootstrap.Modal.getInstance(gatewayModalRefNodeElement) || new bootstrap.Modal(gatewayModalRefNodeElement);
  modalInstanceObjectContainer.show();
}

/**
 * Handle form interceptions, validating user credentials against the local storage array database.
 */
function executeLoginValidationInterceptor(eventObjectEvent) {
  eventObjectEvent.preventDefault();
  
  const emailValInput = document.getElementById("loginFieldEmailInputAddress").value.trim();
  const passwordValInput = document.getElementById("loginFieldPasswordInputPassphrase").value;

  const clientUsersDBStorageArray = JSON.parse(localStorage.getItem("myth_users_db") || "[]");
  const authenticatedMatchNodeProfile = clientUsersDBStorageArray.find(user => user.email.toLowerCase() === emailValInput.toLowerCase() && user.password === passwordValInput);

  if (authenticatedMatchNodeProfile) {
    AppState.userSession = { email: authenticatedMatchNodeProfile.email, name: authenticatedMatchNodeProfile.name };
    localStorage.setItem("myth_session", JSON.stringify(AppState.userSession));
    
    logAuditTrail("Identity Login Pipeline Clearance Verification Process Complete Success Signature Captured Node Token Set", AppState.userSession);
    
    // Dismiss gateway modal popup frame modules container viewpoint layers context instances objects blocks component nodes structures entries
    const modalRef = document.getElementById("authGatewayModalHub");
    const modalInstance = bootstrap.Modal.getInstance(modalRef);
    if(modalInstance) modalInstance.hide();

    renderAuthStatusControlElements();
    displaySystemToastNotification(`Welcome back, honorable ${authenticatedMatchNodeProfile.name}. Active signature matrix channel connection status online.`, "success");
  } else {
    logAuditTrail("Identity Login Access Intercept Rejected: Credential Variant Verification Mismatch Encountered Error Parameters", { attemptUser: emailValInput });
    displaySystemToastNotification("Authorization credentials vector profiling error encountered. Verification process rejected access.", "error");
  }
}

/**
 * Intercept user registration submissions, tracking new profiles to local databases.
 */
function executeSignUpValidationInterceptor(eventObjectEvent) {
  eventObjectEvent.preventDefault();

  const nameValInput = document.getElementById("signUpFieldFullNameInputText").value.trim();
  const emailValInput = document.getElementById("signUpFieldEmailInputAddress").value.trim();
  const passwordValInput = document.getElementById("signUpFieldPasswordInputPassphrase").value;

  let clientUsersDBStorageArray = JSON.parse(localStorage.getItem("myth_users_db") || "[]");
  const identityConflictCheckNode = clientUsersDBStorageArray.find(user => user.email.toLowerCase() === emailValInput.toLowerCase());

  if (identityConflictCheckNode) {
    displaySystemToastNotification("Target email destination path mapping data index location row has already been allocated to a separate profile identity node signature.", "error");
    return;
  }

  const freshlyConstructedUserRecordNode = { name: nameValInput, email: emailValInput, password: passwordValInput };
  clientUsersDBStorageArray.push(freshlyConstructedUserRecordNode);
  localStorage.setItem("myth_users_db", JSON.stringify(clientUsersDBStorageArray));

  logAuditTrail("New Identity Identity Node Record Transferred Inline Database Registry Registry Successfully Committed Node", freshlyConstructedUserRecordNode);

  AppState.userSession = { email: emailValInput, name: nameValInput };
  localStorage.setItem("myth_session", JSON.stringify(AppState.userSession));

  // Clear authenticating user portal frame view sheet module panel node dialog popup layer wrapper container interface blocks components
  const modalRef = document.getElementById("authGatewayModalHub");
  const modalInstance = bootstrap.Modal.getInstance(modalRef);
  if(modalInstance) modalInstance.hide();

  renderAuthStatusControlElements();
  displaySystemToastNotification(`Identity registration successful. Authorization profile verified for "${nameValInput}". Active connection status enabled.`, "success");
}

/**
 * Terminate active customer tracking logs, flushing credentials variables from system storage matrices.
 */
function executeAccountSignOutPipeline() {
  AppState.userSession = null;
  localStorage.removeItem("myth_session");
  logAuditTrail("Identity Access Node Session Destroy Pipeline Explicit Target Signal Captured Loop Intercept Clean Up Complete", null);
  renderAuthStatusControlElements();
  displaySystemToastNotification("Active session variables flushed successfully. Identity portal tracking channels logged out.", "info");
}

// -------------------------------------------------------------------------
// 11. CENTRAL SYSTEM TOAST DISPATCH NOTIFICATION NOTIFIER OVERLAY ENGINE UTILITY
// -------------------------------------------------------------------------
/**
 * Render fluid status notifications across standard responsive viewing areas.
 */
function displaySystemToastNotification(messageContentTextText, notificationThematicProfileClass = "success") {
  const containerDeck = document.querySelector(".toast-container");
  if(!containerDeck) return;

  const generatedToastNodeId = `toast-${Date.now()}`;
  const notificationVisualIconClass = notificationThematicProfileClass === "success" ? "bi-check-circle-fill" : notificationThematicProfileClass === "error" ? "bi-exclamation-triangle-fill" : "bi-info-circle-fill";
  
  const toastWrapperMarkupTemplateString = `
    <div id="${generatedToastNodeId}" class="toast-myth ${notificationThematicProfileClass}" role="alert" aria-live="assertive" aria-atomic="true">
      <i class="bi ${notificationVisualIconClass} fs-5 flex-shrink-0"></i>
      <div class="toast-body-text small fw-medium flex-grow-1">${messageContentTextText}</div>
      <button type="button" class="btn-close ms-auto small shadow-none border-0 bg-transparent text-reset p-0" style="font-size:0.65rem;" onclick="this.parentElement.remove();" aria-label="Close Notification Element Object Layout Node Panel Box Trigger Context Component"></button>
    </div>
  `;

  containerDeck.insertAdjacentHTML("beforeend", toastWrapperMarkupTemplateString);
  
  // Enforce automated lifespan extraction limits properties parameters configurations matrix cleanup routines indicators logic anchor
  setTimeout(() => {
    const individualTargetedToastNode = document.getElementById(generatedToastNodeId);
    if(individualTargetedToastNode) {
      individualTargetedToastNode.style.opacity = "0";
      individualTargetedToastNode.style.transform = "translateY(-10px) scale(0.95)";
      individualTargetedToastNode.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      setTimeout(() => individualTargetedToastNode.remove(), 300);
    }
  }, 4500);
}

// -------------------------------------------------------------------------
// 12. SECURE DEPLOYMENT HIGH PERFORMANCE CONSOLE MONITOR AUDIT TRAIL INFRASTRUCTURE DISPATCH MATRIX
// -------------------------------------------------------------------------
/**
 * Central system activity log management hub.
 */
function logAuditTrail(eventActionSignatureHeadingString, payloadDataLoggingAssetObjectObject) {
  const generationTimestampLoggerString = new Date().toISOString();
  console.log(
    `%c[MYTHGLORY-AUDIT-LOG] [${generationTimestampLoggerString}] EVENT INTERCEPTOR ENGINE ACTION: ${eventActionSignatureHeadingString}`,
    "color: #cba135; font-weight: bold; font-family: 'Poppins', sans-serif; font-size: 11px;",
    payloadDataLoggingAssetObjectObject
  );
}