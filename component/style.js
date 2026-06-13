/* ===================================================================
   DrinkHub — script.js
   Handles: product rendering, search, filtering, cart (add/remove/
   update qty/total), navbar scroll effect, and form submissions.
=================================================================== */

/* ---------------------------------------------------------------
   1. PRODUCT DATA
   12 products across 6 categories
---------------------------------------------------------------- */
const products = [
  {
    id: 1,
    name: "Citrus Fizz Cola",
    category: "Soft Drinks",
    price: 1.50,
    oldPrice: 1.90,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
    desc: "Classic cola with a sharp citrus twist, served ice-cold.",
    featured: true
  },
  {
    id: 2,
    name: "Lemon Lime Splash",
    category: "Soft Drinks",
    price: 1.40,
    img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=500&q=80",
    desc: "Crisp lemon-lime soda with a light, refreshing fizz."
  },
  {
    id: 3,
    name: "Ginger Spark Soda",
    category: "Soft Drinks",
    price: 1.60,
    img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=500&q=80",
    desc: "Bold ginger soda with a warm, spicy kick."
  },
  {
    id: 4,
    name: "Volt Surge Energy",
    category: "Energy Drinks",
    price: 2.20,
    oldPrice: 2.75,
    img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=500&q=80",
    desc: "High-caffeine energy drink to power through your day.",
    featured: true
  },
  {
    id: 5,
    name: "Blue Charge Booster",
    category: "Energy Drinks",
    price: 2.10,
    img: "https://images.unsplash.com/photo-1622543925917-1d3a3b8a8e8f?auto=format&fit=crop&w=500&q=80",
    desc: "Tropical-flavored energy boost with B-vitamins."
  },
  {
    id: 6,
    name: "Nitro Cold Brew",
    category: "Coffee",
    price: 3.20,
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
    desc: "Smooth nitrogen-infused cold brew, naturally sweet.",
    featured: true
  },
  {
    id: 7,
    name: "Caramel Iced Latte",
    category: "Coffee",
    price: 3.50,
    oldPrice: 4.00,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
    desc: "Espresso, milk, and caramel over ice — ready to drink."
  },
  {
    id: 8,
    name: "Classic Espresso Shot",
    category: "Coffee",
    price: 2.50,
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",
    desc: "Bottled double espresso for an instant pick-me-up."
  },
  {
    id: 9,
    name: "Peach Iced Tea",
    category: "Tea",
    price: 1.80,
    img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=500&q=80",
    desc: "Black tea brewed with real peach for a sweet finish.",
    featured: true
  },
  {
    id: 10,
    name: "Jasmine Green Tea",
    category: "Tea",
    price: 1.75,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80",
    desc: "Delicate green tea infused with fragrant jasmine petals."
  },
  {
    id: 11,
    name: "Tropical Orange Juice",
    category: "Juice",
    price: 2.00,
    oldPrice: 2.40,
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80",
    desc: "100% pressed oranges, no added sugar or preservatives."
  },
  {
    id: 12,
    name: "Berry Blend Smoothie Juice",
    category: "Juice",
    price: 2.30,
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
    desc: "A rich blend of strawberries, blueberries, and raspberries."
  },
  {
    id: 13,
    name: "Pure Spring Water",
    category: "Water",
    price: 1.00,
    img: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=500&q=80",
    desc: "Naturally filtered spring water in a recyclable bottle."
  },
  {
    id: 14,
    name: "Sparkling Mineral Water",
    category: "Water",
    price: 1.30,
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80",
    desc: "Lightly carbonated mineral water for a crisp finish.",
    featured: true
  }
];

/* ---------------------------------------------------------------
   2. STATE
---------------------------------------------------------------- */
let cart = []; // [{id, qty}]
let activeFilter = "all";
let searchTerm = "";

/* ---------------------------------------------------------------
   3. RENDER: FEATURED DRINKS
---------------------------------------------------------------- */
function renderFeatured(){
  const row = document.getElementById("featuredRow");
  const featured = products.filter(p => p.featured);
  row.innerHTML = featured.map(p => buildCardHTML(p, "col-lg-3 col-md-6")).join("");
}

/* ---------------------------------------------------------------
   4. RENDER: PRODUCT GRID (with search + filter)
---------------------------------------------------------------- */
function renderProducts(){
  const grid = document.getElementById("productGrid");
  const noResults = document.getElementById("noResults");

  const filtered = products.filter(p => {
    const matchesCategory = activeFilter === "all" || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if(filtered.length === 0){
    grid.innerHTML = "";
    noResults.classList.remove("d-none");
    return;
  }

  noResults.classList.add("d-none");
  grid.innerHTML = filtered.map(p => buildCardHTML(p, "col-lg-3 col-md-6")).join("");
}

/* ---------------------------------------------------------------
   5. BUILD PRODUCT CARD HTML
---------------------------------------------------------------- */
function buildCardHTML(p, colClass){
  const discountTag = p.oldPrice
    ? `<span class="card-discount-tag">SAVE $${(p.oldPrice - p.price).toFixed(2)}</span>`
    : "";
  const oldPriceHTML = p.oldPrice
    ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>`
    : "";

  return `
    <div class="${colClass}">
      <div class="drink-card">
        <div class="card-img-wrap">
          <span class="card-category-tag">${p.category}</span>
          ${discountTag}
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h5>${p.name}</h5>
          <p class="card-desc">${p.desc}</p>
          <div class="price-row">
            <div>
              <span class="price">$${p.price.toFixed(2)}</span>
              ${oldPriceHTML}
            </div>
            <button class="btn-add-cart" data-id="${p.id}">
              <i class="bi bi-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------
   6. CART FUNCTIONS
---------------------------------------------------------------- */
function addToCart(id){
  const existing = cart.find(item => item.id === id);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  updateCartUI();
  showToast("Item added to cart!", "bi-check-circle-fill");
}

function removeFromCart(id){
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function changeQty(id, delta){
  const item = cart.find(item => item.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

function clearCart(){
  cart = [];
  updateCartUI();
}

/* Recalculate cart totals + re-render cart panel + badge */
function updateCartUI(){
  const cartItemsEl = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("emptyCartMsg");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  // Update badge count (total quantity)
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;

  if(cart.length === 0){
    cartItemsEl.innerHTML = `
      <p class="empty-cart-msg text-center" id="emptyCartMsg">
        <i class="bi bi-cart-x"></i><br>Your cart is empty.<br>Start adding some drinks!
      </p>`;
    cartTotal.textContent = "$0.00";
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    const lineTotal = product.price * item.qty;
    total += lineTotal;
    return `
      <div class="cart-item">
        <img src="${product.img}" alt="${product.name}">
        <div class="cart-item-info">
          <h6>${product.name}</h6>
          <div class="cart-item-price">$${product.price.toFixed(2)}</div>
          <div class="qty-controls">
            <button class="qty-minus" data-id="${product.id}" aria-label="Decrease quantity">-</button>
            <span>${item.qty}</span>
            <button class="qty-plus" data-id="${product.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-item" data-id="${product.id}" aria-label="Remove item">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    `;
  }).join("");

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

/* ---------------------------------------------------------------
   7. TOAST NOTIFICATION
---------------------------------------------------------------- */
function showToast(message, iconClass){
  const toastEl = document.getElementById("appToast");
  const toastBody = document.getElementById("toastBody");
  toastBody.innerHTML = `<i class="bi ${iconClass}"></i> ${message}`;
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2200 });
  toast.show();
}

/* ---------------------------------------------------------------
   8. EVENT DELEGATION (cards + cart use dynamically created buttons)
---------------------------------------------------------------- */
document.addEventListener("click", (e) => {
  // Add to cart (works for both featured + grid cards)
  const addBtn = e.target.closest(".btn-add-cart");
  if(addBtn){
    addToCart(Number(addBtn.dataset.id));
    return;
  }

  // Cart quantity increase
  const plusBtn = e.target.closest(".qty-plus");
  if(plusBtn){
    changeQty(Number(plusBtn.dataset.id), 1);
    return;
  }

  // Cart quantity decrease
  const minusBtn = e.target.closest(".qty-minus");
  if(minusBtn){
    changeQty(Number(minusBtn.dataset.id), -1);
    return;
  }

  // Remove item
  const removeBtn = e.target.closest(".remove-item");
  if(removeBtn){
    removeFromCart(Number(removeBtn.dataset.id));
    return;
  }
});

/* ---------------------------------------------------------------
   9. SEARCH + FILTER LISTENERS
---------------------------------------------------------------- */
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value.trim();
  renderProducts();
});

document.getElementById("filterPills").addEventListener("click", (e) => {
  const pill = e.target.closest(".pill");
  if(!pill) return;

  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  pill.classList.add("active");

  activeFilter = pill.dataset.filter;
  renderProducts();
});

/* ---------------------------------------------------------------
   10. CHECKOUT + CLEAR CART BUTTONS
---------------------------------------------------------------- */
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if(cart.length === 0){
    showToast("Your cart is empty!", "bi-exclamation-circle-fill");
    return;
  }
  const total = document.getElementById("cartTotal").textContent;
  showToast(`Checkout successful! Total: ${total}`, "bi-check-circle-fill");
  clearCart();
  // Close the offcanvas
  bootstrap.Offcanvas.getInstance(document.getElementById("cartOffcanvas"))?.hide();
});

document.getElementById("clearCartBtn").addEventListener("click", () => {
  clearCart();
});

/* ---------------------------------------------------------------
   11. NEWSLETTER + CONTACT FORM SUBMISSIONS (demo only)
---------------------------------------------------------------- */
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Subscribed! Check your inbox for confirmation.", "bi-envelope-check-fill");
  e.target.reset();
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Message sent! We'll get back to you shortly.", "bi-send-check-fill");
  e.target.reset();
});

/* ---------------------------------------------------------------
   12. NAVBAR SCROLL EFFECT
---------------------------------------------------------------- */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  if(window.scrollY > 60){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* ---------------------------------------------------------------
   13. INITIALIZE ON LOAD
---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderProducts();
  updateCartUI();
});