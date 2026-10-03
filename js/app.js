/**
 * GOURI SHANKAR GANUGA NUNE (GHANI) - APP LOGIC
 * High-performance, zero-dependency modern e-commerce application
 */

// Master Products Database
const PRODUCTS = [
  {
    id: "palli-groundnut-oil",
    name: "Palli (Groundnut) Oil",
    teluguName: "గానుగ పల్లీ నూనె",
    category: "Cooking Oils",
    subtitle: "Everyday South Indian cooking & deep frying",
    description: "Cold-pressed in traditional neem-wood ghani from sun-dried Saurashtra groundnuts. Naturally filtered by gravity, retaining vitamin E, resveratrol, and an authentic rich nutty aroma. Perfect for everyday curries, dosa, and snacks.",
    benefits: ["Rich in Monounsaturated Fatty Acids (MUFA)", "High smoke point (225°C) prevents toxic fumes", "Zero cholesterol & zero trans fats"],
    smokePoint: "225°C (High - Ideal for deep frying)",
    bestFor: "Daily Sautéing, Dosa, Curries, Murukku, Tadka",
    image: "assets/images/palli__groundnut__oil.jpeg",
    rating: 4.8,
    reviewsCount: 126,
    badge: "Bestseller",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [145, 340, 1560],
    mrp: [175, 390, 1800]
  },
  {
    id: "sesame-gingelly-oil",
    name: "Sesame (Gingelly) Oil",
    teluguName: "గానుగ నువ్వుల నూనె",
    category: "Cooking Oils",
    subtitle: "Rich, nutty, traditional wood-pressed Mara Chekku",
    description: "Extracted slowly from unpolished black & brown sesame seeds blended with natural palm jaggery in traditional wooden ghani. Packed with sesamol, zinc, and heart-healthy phytosterols.",
    benefits: ["Natural cooling properties & high calcium", "Sesamol & Sesamin antioxidants protect arteries", "Anti-inflammatory and antimicrobial"],
    smokePoint: "210°C (Medium-High)",
    bestFor: "Avakaya & Mango Pickles, Sambar Tadka, Pooja, Body Abhyanga",
    image: "assets/images/sesame__gingelly__oil.jpeg",
    rating: 4.9,
    reviewsCount: 98,
    badge: "Traditional Ghani",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [220, 430, 2050],
    mrp: [260, 500, 2400]
  },
  {
    id: "black-til-oil",
    name: "Black Til Oil (Nalla Nuvvula Nune)",
    teluguName: "గానుగ నల్ల నువ్వుల నూనె",
    category: "Cooking Oils",
    subtitle: "100% unpolished black sesame, rich in calcium & zinc",
    description: "Extracted slowly from unpolished black sesame seeds (nalla nuvvulu) in traditional wooden ghani. Revered across Ayurveda and South Indian heritage for extraordinary bone strength, joint lubrication, hair darkening, and divine pooja.",
    benefits: ["Richest natural source of plant calcium & zinc for bone health", "Traditional remedy for strengthening hair and preventing graying", "Packed with sesamolin & sesamin potent antioxidants"],
    smokePoint: "210°C (Medium-High)",
    bestFor: "Ayurvedic Abhyanga, Hair Root Nourishment, Avakaya, Pooja, Traditional Recipes",
    image: "assets/images/black_til_oil.jpeg",
    rating: 4.9,
    reviewsCount: 87,
    badge: "Ayurvedic Gold",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [240, 470, 2250],
    mrp: [280, 540, 2600]
  },
  {
    id: "coconut-oil",
    name: "Pure Coconut Oil",
    teluguName: "స్వచ్ఛమైన కొబ్బరి నూనె",
    category: "Cooking Oils",
    subtitle: "100% Virgin grade copra oil for cooking & hair",
    description: "Crafted from naturally sun-dried, sulphur-free copra coconuts. Crystal clear, light texture with irresistible fresh coconut aroma. Free from chemical deodorizers and liquid paraffin.",
    benefits: ["High Medium Chain Triglycerides (MCTs)", "Lauric acid boosts cellular immunity", "Deeply conditions scalp and prevents hair damage"],
    smokePoint: "177°C (Medium)",
    bestFor: "Kerala Curries, Chutneys, Deep Hair Conditioning, Baby Massage",
    image: "assets/images/coconut_oil.jpeg",
    rating: 4.7,
    reviewsCount: 84,
    badge: "Zero Sulphur",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [190, 440, 2020],
    mrp: [230, 500, 2320]
  },
  {
    id: "mustard-oil",
    name: "Mustard (Sarson) Oil",
    teluguName: "ఆవ నూనె (ఎల్లో ఆవాలు)",
    category: "Cooking Oils",
    subtitle: "Golden, mildly pungent yellow mustard seeds",
    description: "Cold-pressed from prime yellow mustard seeds. Delivers a pleasant, balanced pungency that enhances traditional curries, fish fries, and vegetable preparations.",
    benefits: ["Balanced Omega-3 & Omega-6 fatty acids", "Stimulates digestion & blood circulation", "Natural antimicrobial preservation for pickles"],
    smokePoint: "250°C (Very High)",
    bestFor: "Fish Curries, Bengali & North Indian Cuisine, Winter Body Rub",
    image: "assets/images/mustard_oil.jpeg",
    rating: 4.6,
    reviewsCount: 61,
    badge: "Heart Healthy",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [160, 240, 1100],
    mrp: [190, 280, 1270]
  },
  {
    id: "pure-black-mustard-oil",
    name: "Pure Black Mustard Oil",
    teluguName: "స్వచ్ఛమైన నల్ల ఆవ నూనె",
    category: "Cooking Oils",
    subtitle: "Bold, intense traditional pungency",
    description: "Crushed from selected organic black mustard seeds. Strong, pungent aroma with high levels of natural allyl isothiocyanate. Authentic taste for regional gourmet recipes and spicy pickles.",
    benefits: ["Maximum natural pungency & warmth", "Relieves congestion and joint stiffness", "Superior natural pickling agent"],
    smokePoint: "250°C (Very High)",
    bestFor: "Pungent Pickles, Spicy Sabzis, Traditional Joint Massage",
    image: "assets/images/pure_black_mustard_oil.jpeg",
    rating: 4.6,
    reviewsCount: 28,
    badge: "Bold Pungency",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [180, 340, 1600],
    mrp: [210, 390, 1850]
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    teluguName: "పొద్దుతిరుగుడు నూనె",
    category: "Cooking Oils",
    subtitle: "Light, mild & loaded with Vitamin E",
    description: "Extracted without chemical hexane from organic sunflower seeds. Ultra-light, non-greasy, and neutral-tasting. Excellent for light everyday cooking and heart health.",
    benefits: ["Rich in Vitamin E (Alpha-tocopherol)", "Low saturated fats, healthy unsaturated profile", "Light texture reduces oil absorption in food"],
    smokePoint: "227°C (High)",
    bestFor: "Light Everyday Cooking, Salads, Baking, Roasting",
    image: "assets/images/sunflower_oil.jpeg",
    rating: 4.5,
    reviewsCount: 73,
    badge: "Ultra Light",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [135, 260, 1250],
    mrp: [160, 300, 1450]
  },
  {
    id: "safflower-kusma-oil",
    name: "Safflower (Kusuma) Oil",
    teluguName: "గానుగ కుసుమ నూనె",
    category: "Cooking Oils",
    subtitle: "Traditional Deccan heritage wellness oil",
    description: "Rare traditional Kusuma oil prized across Telangana and Northern Karnataka. Naturally pressed from Kusuma seeds, renowned for supporting heart wellness and cholesterol management.",
    benefits: ["Contains Oleic & Linoleic healthy fats", "Promotes arterial flexibility and metabolic health", "Mild herbal aroma suited for gentle cooking"],
    smokePoint: "232°C (High)",
    bestFor: "Traditional Regional Curries, Rice Dishes, Gentle Sauté",
    image: "assets/images/safflower__kusma__oil.jpeg",
    rating: 4.6,
    reviewsCount: 39,
    badge: "Heritage Oil",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [200, 400, 1840],
    mrp: [240, 460, 2120]
  },
  {
    id: "castor-oil",
    name: "Castor (Amudamu) Oil",
    teluguName: "స్వచ్ఛమైన ఆముదము",
    category: "Wellness & Hair",
    subtitle: "Pure therapeutic grade for hair density & joints",
    description: "Thick, viscous cold-pressed castor oil pressed from organic castor beans. An ancient Ayurvedic remedy rich in Ricinoleic acid, renowned for boosting hair growth, eyelash thickness, and soothing dry joints.",
    benefits: ["90% Ricinoleic acid stimulates dormant follicles", "Deeply locks in scalp moisture to prevent dandruff", "Natural emollient for soothing rough heels & elbows"],
    smokePoint: "Therapeutic / External Use",
    bestFor: "Hair Root Massage, Eyebrows & Lashes, Dry Skin, Joint Relief",
    image: "assets/images/castor_oil.jpeg",
    rating: 4.7,
    reviewsCount: 52,
    badge: "Hair Density",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [150, 290, 1380],
    mrp: [180, 340, 1600]
  },
  {
    id: "almond-badam-oil",
    name: "Almond (Badam) Oil",
    teluguName: "స్వచ్ఛమైన బాదం నూనె",
    category: "Wellness & Hair",
    subtitle: "Sweet almond Roghan Badam for skin & baby massage",
    description: "Extracted exclusively from sweet almonds (Prunus dulcis). A luxurious golden elixir loaded with vitamins E, A, and essential fatty acids. Exceptionally gentle for newborn baby massage and under-eye dark circles.",
    benefits: ["Non-comedogenic, absorbs rapidly into sensitive skin", "Softens baby skin and strengthens bone development", "Reduces dark circles and skin hyperpigmentation"],
    smokePoint: "Cosmetic / Wellness Grade",
    bestFor: "Baby Massage, Face Glow Serum, Under-Eye Care, Scalp Nourishment",
    image: "assets/images/almond__badam__oil.jpeg",
    rating: 4.8,
    reviewsCount: 47,
    badge: "Baby Safe",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [420, 820, 3900],
    mrp: [500, 950, 4500]
  },
  {
    id: "neem-oil",
    name: "Organic Neem Oil",
    teluguName: "స్వచ్ఛమైన వేప నూనె",
    category: "Wellness & Hair",
    subtitle: "Raw therapeutic seed extract for skin & plants",
    description: "Cold pressed from wild neem seed kernels. High azadirachtin content with potent natural antifungal, antibacterial, and pest-repelling properties. Ideal for scalp detox and organic terrace gardening.",
    benefits: ["Natural anti-dandruff and scalp antiseptic", "Soothes skin irritations, eczema, and acne spots", "Chemical-free organic bio-pesticide spray for plants"],
    smokePoint: "External & Agricultural Use",
    bestFor: "Dandruff Relief, Skin Care Blends, Terrace Garden Pest Spray",
    image: "assets/images/neem_oil.jpeg",
    rating: 4.5,
    reviewsCount: 33,
    badge: "100% Raw Neem",
    sizes: ["500 ml", "1 L", "5 L"],
    prices: [180, 350, 1650],
    mrp: [210, 410, 1900]
  },
  {
    id: "sesame-cake-nuvvula-pindi",
    name: "Sesame Cake (Nuvvula Pindi)",
    teluguName: "నువ్వుల పిండి / ఖలీ",
    category: "Traditional By-Products",
    subtitle: "High-protein wooden ghani pressed residue",
    description: "Pure, chemical-free sesame cake remaining after cold extraction in our wooden ghani. Packed with high organic nitrogen, calcium, and plant protein. Outstanding natural food for milch cattle and organic plant fertilizer.",
    benefits: ["Rich in digestible protein & natural plant minerals", "Enhances milk yield and cattle health naturally", "Slow-release organic bio-fertilizer for plants"],
    smokePoint: "Organic Feed & Fertilizer",
    bestFor: "Cattle Feed, Dairy Animals, Home Terrace Garden Organic Manure",
    image: "assets/images/sesame_cake__nuvvula_pindi_.jpeg",
    rating: 4.4,
    reviewsCount: 21,
    badge: "Organic Manure",
    sizes: ["500 g", "1 kg", "5 kg"],
    prices: [60, 110, 500],
    mrp: [60, 110, 500]
  }
];

// App State
const state = {
  activeCategory: "All",
  searchQuery: "",
  sortBy: "featured",
  selectedSizes: {}, // { [productId]: sizeIndex }
  cart: {}, // { `${productId}_${sizeIndex}`: qty }
  deliveryType: "delivery", // 'delivery' or 'pickup'
  customerName: "",
  customerArea: "",
  liveLocation: null // { lat, lon, mapsUrl, address }
};

const FREE_DELIVERY_THRESHOLD = 1000; // Free delivery above ₹1000 within 5km
const CART_STORAGE_KEY = "gouri_shankar_cart_v1";

// Format Currency
function formatCurrency(amount) {
  return "₹" + Math.round(amount).toLocaleString("en-IN");
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  initDefaultSizes();
  renderCategoriesNav();
  renderProducts();
  updateCartUI();
  setupEventListeners();
  setupFAQAccordion();
  setupHeaderScroll();
});

// Initialize default size selector (default to 1L if available, else 0)
function initDefaultSizes() {
  PRODUCTS.forEach((product) => {
    // Default to index 1 (1 L) if available, otherwise index 0
    state.selectedSizes[product.id] = product.sizes.length > 1 ? 1 : 0;
  });
}

// Load Cart from LocalStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load cart from storage", e);
    state.cart = {};
  }
}

// Save Cart to LocalStorage
function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch (e) {
    console.error("Failed to save cart", e);
  }
}

// Category Tabs
const CATEGORIES = ["All", "Cooking Oils", "Wellness & Hair", "Traditional By-Products"];

function renderCategoriesNav() {
  const container = document.getElementById("catNav");
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat) => {
    const count = cat === "All"
      ? PRODUCTS.length
      : PRODUCTS.filter((p) => p.category === cat).length;
    const isActive = state.activeCategory === cat;

    return `
      <button class="cat-tab ${isActive ? "active" : ""}" data-category="${cat}">
        ${cat}
        <span class="tab-count">${count}</span>
      </button>
    `;
  }).join("");

  // Attach click events
  container.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.getAttribute("data-category");
      renderCategoriesNav();
      renderProducts();
    });
  });
}

// Filter and Sort Products
function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchesCat = state.activeCategory === "All" || p.category === state.activeCategory;
    const query = state.searchQuery.toLowerCase().trim();
    const matchesQuery = !query ||
      p.name.toLowerCase().includes(query) ||
      p.teluguName.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.bestFor.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  }).sort((a, b) => {
    const sizeIdxA = state.selectedSizes[a.id] || 0;
    const sizeIdxB = state.selectedSizes[b.id] || 0;
    const priceA = a.prices[sizeIdxA];
    const priceB = b.prices[sizeIdxB];

    if (state.sortBy === "price-asc") return priceA - priceB;
    if (state.sortBy === "price-desc") return priceB - priceA;
    if (state.sortBy === "rating") return b.rating - a.rating;
    return 0; // featured
  });
}

// Render Product Grid
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const countDisplay = document.getElementById("catalogCount");
  if (!grid) return;

  const products = getFilteredProducts();

  if (countDisplay) {
    countDisplay.textContent = `(${products.length} items)`;
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog-state">
        <i>🔍</i>
        <h3>No matching products found</h3>
        <p>We couldn't find any cold pressed oils matching "${state.searchQuery}". Try searching for groundnut, sesame, or coconut.</p>
        <button class="btn-primary" onclick="resetSearchAndFilters()">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map((product) => {
    const selectedIdx = state.selectedSizes[product.id] ?? 0;
    const currentPrice = product.prices[selectedIdx];

    const cartKey = `${product.id}_${selectedIdx}`;
    const currentQty = state.cart[cartKey] || 0;

    return `
      <article class="product-card" id="card-${product.id}">
        <div class="product-thumb-wrap" onclick="openQuickView('${product.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openQuickView('${product.id}');}" role="button" tabindex="0" title="Click image to view details of ${product.name}" aria-label="Quick view ${product.name}">
          <span class="category-tag-badge">${product.badge || product.category}</span>
          <img src="${product.image}" alt="${product.name} - Cold Pressed Wooden Ghani" loading="lazy" draggable="false">
          <button type="button" class="quick-view-overlay-btn" onclick="event.stopPropagation(); openQuickView('${product.id}')">
            Quick View
          </button>
        </div>

        <div class="product-content">
          <div class="product-title-row">
            <div>
              <h3 class="product-name" onclick="openQuickView('${product.id}')" title="Click to view details">${product.name}</h3>
              <p class="product-subtitle">${product.teluguName} • ${product.subtitle}</p>
            </div>
          </div>

          <div class="product-ratings">
            <span class="stars">★★★★★</span>
            <span class="rating-num">${product.rating}</span>
            <span class="review-count">(${product.reviewsCount} reviews)</span>
          </div>

          <!-- Size Pills -->
          <div class="size-pills-wrap">
            <span class="size-label">Select Volume</span>
            <div class="size-pills" role="radiogroup" aria-label="Available sizes">
              ${product.sizes.map((size, idx) => `
                <button
                  type="button"
                  class="size-pill ${idx === selectedIdx ? "selected" : ""}"
                  onclick="selectProductSize('${product.id}', ${idx})"
                  aria-checked="${idx === selectedIdx}"
                >${size}</button>
              `).join("")}
            </div>
          </div>

          <!-- Pricing -->
          <div class="product-pricing">
            <span class="current-price">${formatCurrency(currentPrice)}</span>
          </div>

          <!-- Action Buttons (Shows Stepper if Qty > 0, else Add to Cart) -->
          <div class="product-actions">
            ${currentQty > 0 ? `
              <div class="card-split-stepper" role="group" aria-label="Quantity for ${product.name}">
                <button type="button" class="stepper-split-btn btn-minus" onclick="updateCartQuantity('${cartKey}', -1)" aria-label="Decrease quantity" title="Decrease">
                  <span class="split-symbol">−</span>
                </button>
                <div class="stepper-center-badge" aria-label="Current quantity: ${currentQty}" title="${currentQty} in cart">
                  <span class="badge-num">${currentQty}</span>
                </div>
                <button type="button" class="stepper-split-btn btn-plus" onclick="updateCartQuantity('${cartKey}', 1)" aria-label="Increase quantity" title="Increase">
                  <span class="split-symbol">+</span>
                </button>
              </div>
            ` : `
              <button type="button" class="btn-add-to-cart" onclick="addToCart('${product.id}', ${selectedIdx})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span>Add to Cart</span>
              </button>
            `}
            <button type="button" class="btn-quick-view-sm" onclick="openQuickView('${product.id}')" title="Product details" aria-label="Product details">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Select Product Size
window.selectProductSize = function(productId, sizeIdx) {
  state.selectedSizes[productId] = sizeIdx;
  renderProducts();
};

// Reset Search
window.resetSearchAndFilters = function() {
  state.activeCategory = "All";
  state.searchQuery = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  renderCategoriesNav();
  renderProducts();
};

// Add to Cart
window.addToCart = function(productId, sizeIndex = null) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const sizeIdx = sizeIndex !== null ? sizeIndex : (state.selectedSizes[productId] || 0);
  const cartKey = `${productId}_${sizeIdx}`;

  state.cart[cartKey] = (state.cart[cartKey] || 0) + 1;
  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Refresh product card so button transforms into stepper

  // Badge pop animation
  const badge = document.getElementById("headerCartCount");
  if (badge) {
    badge.classList.remove("bounce");
    void badge.offsetWidth;
    badge.classList.add("bounce");
  }

  showToast(`Added ${product.name} (${product.sizes[sizeIdx]}) to cart!`);
};

// Adjust Cart Quantity
window.updateCartQuantity = function(cartKey, change) {
  if (!state.cart[cartKey]) return;

  state.cart[cartKey] += change;
  if (state.cart[cartKey] <= 0) {
    delete state.cart[cartKey];
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Refresh card stepper in real time
};

// Directly Remove Cart Item
window.removeCartItem = function(cartKey) {
  if (state.cart[cartKey]) {
    delete state.cart[cartKey];
    saveCartToStorage();
    updateCartUI();
    renderProducts();
  }
};

// Cart Drawer open/close
window.toggleCart = function(open = true) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    if (open) {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
};

// Update Cart Display & Calculations
function updateCartUI() {
  const itemsContainer = document.getElementById("cartItems");
  const countBadge = document.getElementById("headerCartCount");
  const sectionCountBadge = document.getElementById("cartSectionCount");
  const headerSubtitle = document.getElementById("cartHeaderSubtitle");
  const checkoutDetails = document.getElementById("cartCheckoutDetails");
  const subtotalDisplay = document.getElementById("cartSubtotal");
  const totalDisplay = document.getElementById("cartTotal");
  const meterFill = document.getElementById("meterFill");
  const meterLabel = document.getElementById("meterLabel");
  const checkoutBtn = document.getElementById("whatsappCheckoutBtn");

  let totalItemsCount = 0;
  let subtotal = 0;
  const cartKeys = Object.keys(state.cart);

  if (cartKeys.length === 0) {
    if (itemsContainer) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <i>🫙</i>
          <h4>Your cart is empty</h4>
          <p>Add pure wood-pressed oils from our catalog to review items here.</p>
        </div>
      `;
    }
    if (sectionCountBadge) sectionCountBadge.textContent = "0 items";
    if (headerSubtitle) headerSubtitle.textContent = "Cart is currently empty";
    if (checkoutDetails) checkoutDetails.style.display = "none";
    if (checkoutBtn) checkoutBtn.disabled = true;
  } else {
    if (checkoutDetails) checkoutDetails.style.display = "flex";
    if (checkoutBtn) checkoutBtn.disabled = false;

    let itemsHTML = "";
    cartKeys.forEach((key) => {
      const [productId, sizeIdxStr] = key.split("_");
      const sizeIdx = parseInt(sizeIdxStr, 10);
      const product = PRODUCTS.find((p) => p.id === productId);
      const qty = state.cart[key];

      if (product && qty > 0) {
        const itemPrice = product.prices[sizeIdx];
        const itemTotal = itemPrice * qty;
        totalItemsCount += qty;
        subtotal += itemTotal;

        itemsHTML += `
          <div class="cart-item-row">
            <div class="cart-item-thumb" onclick="openQuickView('${product.id}'); toggleCart(false);" style="cursor: pointer;" title="View ${product.name} details" role="button" tabindex="0">
              <img src="${product.image}" alt="${product.name}" loading="lazy" draggable="false">
            </div>
            <div class="cart-item-details">
              <h5 class="cart-item-title" onclick="openQuickView('${product.id}'); toggleCart(false);" style="cursor: pointer;" title="View ${product.name} details">${product.name}</h5>
              <span class="cart-item-volume">${product.sizes[sizeIdx]}</span>
              <div class="cart-item-price">${formatCurrency(itemTotal)} <small>(${formatCurrency(itemPrice)} each)</small></div>
            </div>
            <div class="cart-item-actions-col">
              <button type="button" class="cart-item-remove-btn" onclick="removeCartItem('${key}')" title="Remove item" aria-label="Remove ${product.name}">✕</button>
              <div class="cart-qty-controls">
                <button type="button" class="qty-btn" onclick="updateCartQuantity('${key}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-display">${qty}</span>
                <button type="button" class="qty-btn" onclick="updateCartQuantity('${key}', 1)" aria-label="Increase quantity">+</button>
              </div>
            </div>
          </div>
        `;
      }
    });

    if (itemsContainer) itemsContainer.innerHTML = itemsHTML;
    if (sectionCountBadge) sectionCountBadge.textContent = `${totalItemsCount} item${totalItemsCount === 1 ? "" : "s"}`;
    if (headerSubtitle) headerSubtitle.textContent = `${totalItemsCount} item${totalItemsCount === 1 ? "" : "s"} • ${formatCurrency(subtotal)}`;
  }

  // Update header count
  if (countBadge) countBadge.textContent = totalItemsCount;

  // Free delivery calculation (Threshold: ₹1000 within 5km)
  if (meterFill && meterLabel) {
    if (subtotal >= FREE_DELIVERY_THRESHOLD) {
      meterFill.style.width = "100%";
      meterLabel.innerHTML = `<span>🎉 <b>Congratulations!</b> You qualify for <b>FREE Delivery (within 5 km)</b></span>`;
    } else {
      const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
      const percentage = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
      meterFill.style.width = `${percentage}%`;
      meterLabel.innerHTML = `<span>Add <b>${formatCurrency(remaining)}</b> more for <b>FREE Delivery within 5 km</b></span>`;
    }
  }

  // Update summary amounts
  if (subtotalDisplay) subtotalDisplay.textContent = formatCurrency(subtotal);
  if (totalDisplay) totalDisplay.textContent = formatCurrency(subtotal);
}

// Live Location Detection via Browser Geolocation API
window.detectLiveLocation = function() {
  const btn = document.getElementById("btnDetectLocation");
  const areaInput = document.getElementById("cartAreaInput");
  const badge = document.getElementById("locationBadge");

  if (!navigator.geolocation) {
    showToast("Geolocation is not supported by your browser. Please enter your area manually.");
    return;
  }

  if (btn) {
    btn.innerHTML = `<span class="spinner-small"></span> Detecting GPS...`;
    btn.disabled = true;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lon = position.coords.longitude.toFixed(6);
      const mapsUrl = `https://maps.google.com/?q=${lat},${lon}`;
      
      let displayLocation = `📍 Lat: ${lat}, Lon: ${lon}`;
      
      // Attempt reverse geocoding via OpenStreetMap Nominatim for human-readable street/area
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`, {
          headers: { "Accept-Language": "en" }
        });
        if (response.ok) {
          const data = await response.json();
          if (data && data.address) {
            const addr = data.address;
            const locality = addr.suburb || addr.neighbourhood || addr.residential || addr.city_district || addr.village || addr.town || addr.city || "Hyderabad";
            displayLocation = `${locality} (${addr.road || ""}) [📍 GPS Attached]`.replace(" ()", "").trim();
          }
        }
      } catch (err) {
        console.log("Reverse geocode fallback to coords", err);
      }

      state.liveLocation = {
        lat,
        lon,
        mapsUrl,
        display: displayLocation
      };

      if (areaInput) {
        areaInput.value = displayLocation;
        state.customerArea = displayLocation;
      }

      if (badge) {
        badge.innerHTML = `
          <div class="active-location-pill">
            <span>📍 Live Location Detected</span>
            <a href="${mapsUrl}" target="_blank" rel="noopener">View Pin</a>
          </div>
        `;
        badge.style.display = "block";
      }

      if (btn) {
        btn.innerHTML = `<span>✓ Location Added</span>`;
        btn.classList.add("location-success");
        setTimeout(() => {
          btn.innerHTML = `<span>📍 Update Live Location</span>`;
          btn.disabled = false;
        }, 3000);
      }

      showToast("📍 Live location captured! Added to your order.");
      updateCartUI();
    },
    (error) => {
      console.warn("Geolocation error", error);
      if (btn) {
        btn.innerHTML = `<span>📍 Use My Live Location</span>`;
        btn.disabled = false;
      }
      let errMsg = "Location permission denied. Please type your Hyderabad area.";
      if (error.code === error.POSITION_UNAVAILABLE) errMsg = "Location information unavailable.";
      if (error.code === error.TIMEOUT) errMsg = "Location request timed out.";
      showToast(errMsg);
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
  );
};

// Trigger cart opening when user clicks any 'Order on WhatsApp' button
window.handleWhatsAppOrderTrigger = function() {
  const cartKeys = Object.keys(state.cart);
  let totalItemsCount = 0;
  cartKeys.forEach((key) => { totalItemsCount += state.cart[key] || 0; });

  toggleCart(true);

  if (totalItemsCount === 0) {
    showToast("Your cart is empty! Please add oils to place an order.");
    const shopSec = document.getElementById("shop");
    if (shopSec) {
      setTimeout(() => shopSec.scrollIntoView({ behavior: "smooth" }), 250);
    }
  } else {
    showToast("Please enter your Name & Address to complete your order!");
    setTimeout(() => {
      const nameInput = document.getElementById("cartNameInput");
      const areaInput = document.getElementById("cartAreaInput");
      if (nameInput && !nameInput.value.trim()) {
        nameInput.focus();
      } else if (areaInput && !areaInput.value.trim()) {
        areaInput.focus();
      }
    }, 350);
  }
};

// Validate Customer Details and Submit WhatsApp Order
window.submitWhatsAppOrder = function() {
  const cartKeys = Object.keys(state.cart);
  let totalItemsCount = 0;
  let subtotal = 0;

  cartKeys.forEach((key) => {
    const [productId, sizeIdxStr] = key.split("_");
    const product = PRODUCTS.find((p) => p.id === productId);
    const qty = state.cart[key] || 0;
    if (product && qty > 0) {
      totalItemsCount += qty;
      subtotal += product.prices[parseInt(sizeIdxStr, 10)] * qty;
    }
  });

  if (totalItemsCount === 0) {
    showToast("⚠️ Your cart is empty! Please select oils from the catalog first.");
    toggleCart(true);
    return;
  }

  const nameInput = document.getElementById("cartNameInput");
  const areaInput = document.getElementById("cartAreaInput");
  const name = (nameInput ? nameInput.value : state.customerName).trim();
  const area = (areaInput ? areaInput.value : state.customerArea).trim();

  state.customerName = name;
  state.customerArea = area;

  // Validate Customer Name
  if (!name) {
    if (nameInput) {
      nameInput.classList.add("input-error");
      nameInput.focus();
    }
    showToast("⚠️ Please enter your Name before placing the order.");
    return;
  } else if (nameInput) {
    nameInput.classList.remove("input-error");
  }

  // Validate Delivery Address (if Home Delivery is selected)
  if (state.deliveryType === "delivery" && !area && !state.liveLocation) {
    if (areaInput) {
      areaInput.classList.add("input-error");
      areaInput.focus();
    }
    showToast("⚠️ Please enter your Delivery Address or click '📍 Use My Live Location'.");
    return;
  } else if (areaInput) {
    areaInput.classList.remove("input-error");
  }

  // Construct structured WhatsApp invoice message
  let message = `🌿 *GOURI SHANKAR GANUGA NUNE - NEW ORDER*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  cartKeys.forEach((key) => {
    const [productId, sizeIdxStr] = key.split("_");
    const sizeIdx = parseInt(sizeIdxStr, 10);
    const product = PRODUCTS.find((p) => p.id === productId);
    const qty = state.cart[key];

    if (product && qty > 0) {
      const itemPrice = product.prices[sizeIdx];
      const itemTotal = itemPrice * qty;
      message += `• *${product.name}* (${product.sizes[sizeIdx]})\n`;
      message += `  Qty: ${qty} × ${formatCurrency(itemPrice)} = ${formatCurrency(itemTotal)}\n`;
    }
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *Total Amount: ${formatCurrency(subtotal)}*\n`;

  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD && state.deliveryType === "delivery";
  message += `📦 *Order Type:* ${state.deliveryType === "delivery" ? "Home Delivery (Hyderabad)" : "Store Pickup (Chikkadpalli)"}\n`;
  if (state.deliveryType === "delivery") {
    message += `🚚 *Delivery Benefit:* ${isFreeDelivery ? "Eligible for FREE Delivery (within 5 km)" : "Standard local delivery applies"}\n`;
  }

  message += `👤 *Customer Name:* ${name}\n`;
  message += `📍 *Delivery Address:* ${area}\n`;

  // Attach live Google Maps pin if captured
  if (state.liveLocation && state.liveLocation.mapsUrl) {
    message += `🗺️ *Live Google Maps Location:* ${state.liveLocation.mapsUrl}\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Please confirm order availability and dispatch time. Thank you!`;

  const waUrl = `https://wa.me/917095244109?text=${encodeURIComponent(message)}`;
  showToast("Opening WhatsApp with your order details...");
  window.open(waUrl, "_blank");
};

// Quick View Modal
window.openQuickView = function(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById("quickViewBackdrop");
  const modalContainer = document.getElementById("quickViewContainer");
  if (!modalBackdrop || !modalContainer) return;

  const selectedIdx = state.selectedSizes[product.id] || 0;
  const currentPrice = product.prices[selectedIdx];

  modalContainer.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quick-view-info">
        <span class="modal-category-badge">${product.category}</span>
        <h2>${product.name}</h2>
        <p style="font-weight:600; color:var(--primary-700)">${product.teluguName}</p>
        <p class="quick-view-desc">${product.description}</p>

        <div class="quick-view-meta-list">
          <div class="meta-row">
            <span>Smoke Point:</span>
            <b>${product.smokePoint}</b>
          </div>
          <div class="meta-row">
            <span>Best For:</span>
            <b>${product.bestFor}</b>
          </div>
          <div class="meta-row">
            <span>Customer Rating:</span>
            <b>${product.rating} ★ (${product.reviewsCount} verified reviews)</b>
          </div>
        </div>

        <div>
          <span class="size-label">Select Volume</span>
          <div class="size-pills">
            ${product.sizes.map((size, idx) => `
              <button
                type="button"
                class="size-pill ${idx === selectedIdx ? "selected" : ""}"
                onclick="selectProductSize('${product.id}', ${idx}); openQuickView('${product.id}')"
              >${size}</button>
            `).join("")}
          </div>
        </div>

        <div class="product-pricing" style="margin-top:0">
          <span class="current-price">${formatCurrency(currentPrice)}</span>
        </div>

        <div class="product-actions" style="margin-top:8px">
          ${(state.cart[`${product.id}_${selectedIdx}`] || 0) > 0 ? `
            <div class="card-split-stepper modal-stepper" style="flex:1" role="group" aria-label="Quantity for ${product.name}">
              <button type="button" class="stepper-split-btn btn-minus" onclick="updateCartQuantity('${product.id}_${selectedIdx}', -1); openQuickView('${product.id}')" aria-label="Decrease quantity" title="Decrease">
                <span class="split-symbol">−</span>
              </button>
              <div class="stepper-center-badge" aria-label="Current quantity: ${state.cart[`${product.id}_${selectedIdx}`]}" title="${state.cart[`${product.id}_${selectedIdx}`]} in cart">
                <span class="badge-num">${state.cart[`${product.id}_${selectedIdx}`]}</span>
              </div>
              <button type="button" class="stepper-split-btn btn-plus" onclick="updateCartQuantity('${product.id}_${selectedIdx}', 1); openQuickView('${product.id}')" aria-label="Increase quantity" title="Increase">
                <span class="split-symbol">+</span>
              </button>
            </div>
          ` : `
            <button class="btn-add-to-cart" style="flex:1; height:48px; font-size:15px; border-radius:var(--radius-full)" onclick="addToCart('${product.id}', ${selectedIdx}); openQuickView('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>Add to Cart (${product.sizes[selectedIdx]})</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeQuickView = function() {
  const modalBackdrop = document.getElementById("quickViewBackdrop");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
};

// Toast Notifications
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Event Listeners Setup
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle("visible", state.searchQuery.length > 0);
      }
      renderProducts();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      state.searchQuery = "";
      searchClearBtn.classList.remove("visible");
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Delivery type switcher in cart
  const btnDelivery = document.getElementById("btnOrderDelivery");
  const btnPickup = document.getElementById("btnOrderPickup");
  const areaInput = document.getElementById("cartAreaInput");

  if (btnDelivery && btnPickup) {
    btnDelivery.addEventListener("click", () => {
      state.deliveryType = "delivery";
      btnDelivery.classList.add("active");
      btnPickup.classList.remove("active");
      if (areaInput) areaInput.placeholder = "Your Hyderabad Delivery Area (e.g. Narayanguda)";
      updateCartUI();
    });

    btnPickup.addEventListener("click", () => {
      state.deliveryType = "pickup";
      btnPickup.classList.add("active");
      btnDelivery.classList.remove("active");
      if (areaInput) areaInput.placeholder = "Pickup Time / Note (Store: Chikkadpalli)";
      updateCartUI();
    });
  }

  // Customer Inputs
  const nameInput = document.getElementById("cartNameInput");
  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      state.customerName = e.target.value;
      if (e.target.value.trim()) nameInput.classList.remove("input-error");
    });
  }
  if (areaInput) {
    areaInput.addEventListener("input", (e) => {
      state.customerArea = e.target.value;
      if (e.target.value.trim()) areaInput.classList.remove("input-error");
    });
  }

  // Keyboard shortcut: Escape to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleCart(false);
      closeQuickView();
    }
  });
}

// Setup FAQ Accordion
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        faqItems.forEach((el) => el.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    }
  });
}

// Setup Header Scroll Effect
function setupHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
