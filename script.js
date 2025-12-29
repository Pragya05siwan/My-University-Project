// Comprehensive product data for Neon Store
const products = [
    // Fashion - Women's
    {
        id: 1,
        name: "Women's Floral Maxi Dress",
        price: 1499,
        category: "fashion",
        subcategory: "women",
        image: "./images/1_70861be3-9c44-4cb3-b014-5eb464a95b99_700x.webp",
        tagline: "Summer Collection | Trendy & Comfortable",
        summary: "Elegant floral maxi dress perfect for summer occasions",
        description: "Beautiful floral print maxi dress crafted from breathable cotton blend. Features a flattering A-line silhouette with adjustable straps and side pockets. Perfect for beach outings, brunches, or casual dates.",
        highlights: ["Breathable cotton blend", "Adjustable straps", "Side pockets", "Machine washable", "Summer collection"]
    },
    {
        id: 2,
        name: "Women's Casual Cotton Kurti",
        price: 999,
        category: "fashion",
        subcategory: "women",
        image: "./images/OIP.jpg",
        tagline: "Ethnic Wear | Comfortable & Stylish",
        summary: "Traditional cotton kurti with modern comfort",
        description: "Comfortable cotton kurti with beautiful embroidered neckline. Features three-quarter sleeves and straight fit design. Perfect for office wear or casual outings.",
        highlights: ["100% cotton fabric", "Embroidered neckline", "Three-quarter sleeves", "Straight fit", "Easy care"]
    },
    {
        id: 3,
        name: "Women's Party Wear Gown",
        price: 2999,
        category: "fashion",
        subcategory: "women",
        image: "./images/Birthday Party Wear Gown For Women.jpg",
        tagline: "Party Collection | Elegant & Glamorous",
        summary: "Stunning party gown for special occasions",
        description: "Elegant party wear gown with sequin detailing and flowing silhouette. Features a fitted bodice and floor-length design. Perfect for weddings, parties, and special events.",
        highlights: ["Sequin detailing", "Fitted bodice", "Floor-length", "Special occasion wear", "Elegant design"]
    },
    
    // Fashion - Men's
    {
        id: 4,
        name: "Men's Slim Fit Denim Jacket",
        price: 2099,
        category: "fashion",
        subcategory: "men",
        image: "./images/1024x1024-Mens-Jackets-Denim-Trucker-WashedIndigo-010423-1.jpg",
        tagline: "Casual Wear | Trendy & Durable",
        summary: "Classic denim jacket with modern slim fit",
        description: "Premium denim jacket with slim fit design and classic styling. Features button closure, chest pockets, and durable construction. Perfect for layering and casual outings.",
        highlights: ["Premium denim fabric", "Slim fit design", "Button closure", "Chest pockets", "Durable construction"]
    },
    {
        id: 5,
        name: "Men's Solid Polo T-Shirt",
        price: 799,
        category: "fashion",
        subcategory: "men",
        image: "./images/1000012905760-Red-Red-1000012905760_03-2100.jpg",
        tagline: "Casual Collection | Comfortable & Classic",
        summary: "Classic polo t-shirt for everyday comfort",
        description: "Comfortable polo t-shirt made from premium cotton blend. Features collar design, button placket, and regular fit. Available in multiple colors for versatile styling.",
        highlights: ["Premium cotton blend", "Collar design", "Button placket", "Regular fit", "Multiple colors"]
    },
    
    // Electronics
    {
        id: 6,
        name: "Boat Rockerz 255 Pro+ Earphones",
        price: 1199,
        category: "electronics",
        image: ["./images/40322227-6_3-boat-rockerz-255-pro-wireless-bluetooth-earphones-navy-blue.webp", "./images/addb4ef9-837b-49e2-aab4-dbe2b1e771a6.__CR0,30,1464,600_PT0_SX1464_V1___.jpg"],
        tagline: "Audio | Wireless & High Quality",
        summary: "Premium wireless earphones with superior sound quality",
        description: "Advanced wireless earphones with premium sound quality and long battery life. Features noise cancellation, comfortable fit, and quick charging technology.",
        highlights: ["Wireless connectivity", "Premium sound quality", "Noise cancellation", "Long battery life", "Quick charging"]
    },
    {
        id: 7,
        name: "Redmi Note 13 Pro 5G",
        price: 21999,
        category: "electronics",
        image: ["./images/OIP (1).jpg", "./images/WhatsApp-Image-2023-07-13-at-8.20.31-AM-1.webp"],
        tagline: "Smartphone | 5G Ready & High Performance",
        summary: "Latest 5G smartphone with advanced features",
        description: "Powerful 5G smartphone with high-resolution camera, fast processor, and long-lasting battery. Features premium design and latest Android OS.",
        highlights: ["5G connectivity", "High-resolution camera", "Fast processor", "Long battery life", "Premium design"]
    },
    {
        id: 8,
        name: "OnePlus Smartwatch",
        price: 8499,
        category: "electronics",
        image: ["./images/1-M00-26-03-rB8bwmCwouqAcChNAAjUyzipsJs826.jpg", "./images/OIP (2).jpg"],
        tagline: "Wearable Tech | Smart & Stylish",
        summary: "Advanced smartwatch with health monitoring",
        description: "Feature-rich smartwatch with health monitoring, fitness tracking, and smart notifications. Compatible with Android and iOS devices.",
        highlights: ["Health monitoring", "Fitness tracking", "Smart notifications", "Cross-platform compatibility", "Stylish design"]
    },
    {
        id: 9,
        name: "Samsung 65\" Smart TV",
        price: 72999,
        category: "electronics",
        image: ["./images/11a5ed3d-d86f-43ee-a62d-56ddf6029a78.5665611167b7c14cddcf6f94678984ff.webp", "./images/us-oled-s95f-qn65s95fafxza-546018532.webp"],
        tagline: "Entertainment | 4K & Smart Features",
        summary: "Large screen smart TV with 4K resolution",
        description: "Premium 65-inch smart TV with 4K resolution, HDR support, and built-in streaming apps. Features voice control and sleek design.",
        highlights: ["65-inch display", "4K resolution", "HDR support", "Built-in apps", "Voice control"]
    },
    {
        id: 10,
        name: "JBL Go 3 Bluetooth Speaker",
        price: 2799,
        category: "electronics",
        image: ["./images/17260666867661318425b9cf70340f0fbfc946c961.webp", "./images/jbl-go-3-bluetooth-speaker-2H5FNP8.jpg"],
        tagline: "Audio | Portable & Powerful",
        summary: "Compact Bluetooth speaker with powerful sound",
        description: "Portable Bluetooth speaker with powerful sound output and waterproof design. Perfect for outdoor activities and travel.",
        highlights: ["Bluetooth connectivity", "Powerful sound", "Waterproof design", "Portable size", "Long battery life"]
    },
    
    // Home & Lifestyle
    {
        id: 11,
        name: "Velvet Cushion Set (Pack of 4)",
        price: 1299,
        category: "home",
        image: ["./images/il_1080xN.3129094791_g9eg.webp", "./images/il_794xN.3081367580_qvkq.webp"],
        tagline: "Home Decor | Luxurious & Comfortable",
        summary: "Soft velvet cushions for elegant home decor",
        description: "Set of 4 premium velvet cushions with soft filling and elegant design. Perfect for sofas, beds, and chairs. Available in multiple colors.",
        highlights: ["Premium velvet fabric", "Soft filling", "Set of 4 pieces", "Multiple colors", "Elegant design"]
    },
    {
        id: 12,
        name: "Decorative LED Wall Lamp",
        price: 1899,
        category: "home",
        image: ["./images/180-LED-Solar-Power-Wall-Light-Outdoor-Garden-Lamp-Living-Bedside-Lamp-Room-Decorative-Indoor-Room-Long-Wall-Lamp.avif", "./images/Hotel-indoor-decorative-LED-wall-lamp-2.png"],
        tagline: "Lighting | Modern & Energy Efficient",
        summary: "Stylish LED wall lamp for ambient lighting",
        description: "Modern LED wall lamp with adjustable brightness and elegant design. Energy-efficient and perfect for bedroom, living room, or hallway lighting.",
        highlights: ["LED technology", "Adjustable brightness", "Energy efficient", "Modern design", "Easy installation"]
    },
    {
        id: 13,
        name: "Wooden Wall Clock",
        price: 1099,
        category: "home",
        image: ["./images/il_fullxfull.4954442552_rveb.webp", "./images/New-Large-Scandi-Hamptons-Natural-White-Wooden-Wall-Clock_b.jpg"],
        tagline: "Home Decor | Classic & Functional",
        summary: "Elegant wooden wall clock for home decoration",
        description: "Beautiful wooden wall clock with silent movement and classic design. Perfect for living room, bedroom, or office decoration.",
        highlights: ["Wooden construction", "Silent movement", "Classic design", "Easy to read", "Home decoration"]
    },
    {
        id: 14,
        name: "Floral Printed Bedsheet",
        price: 999,
        category: "home",
        image: ["./images/71yVENbuldL._AC_.jpg", "./images/R-2.jpg"],
        tagline: "Bedding | Comfortable & Stylish",
        summary: "Soft cotton bedsheet with beautiful floral prints",
        description: "Premium cotton bedsheet with vibrant floral prints and soft texture. Includes pillow covers and fitted sheet. Machine washable and colorfast.",
        highlights: ["Premium cotton", "Floral prints", "Includes pillow covers", "Machine washable", "Colorfast"]
    },
    {
        id: 15,
        name: "Aroma Diffuser",
        price: 1499,
        category: "home",
        image: ["./images/6e421fbe-df8a-4044-9627-fae6feee6da6_1.924a8ae034d142f064e3d11f4d254616.webp", "./images/OUTAD-300ml-Ultrasonic-Aromatherapy-Aroma-Essential-Oil-Diffuser-Quiet-Air-Humidifier-for-Car-Office-Bedroom_f326066a-6a49-408f-a4b0-66b4d2a95329.31d887bfd9441246de1e5bc07d6b4570.avif"],
        tagline: "Wellness | Relaxing & Therapeutic",
        summary: "Ultrasonic aroma diffuser for relaxation",
        description: "Premium ultrasonic aroma diffuser with LED lighting and timer function. Creates a relaxing atmosphere with your favorite essential oils.",
        highlights: ["Ultrasonic technology", "LED lighting", "Timer function", "Relaxing atmosphere", "Essential oil compatible"]
    },
    
    // Beauty & Care
    {
        id: 16,
        name: "Maybelline Fit Me Foundation",
        price: 499,
        category: "beauty",
        image: ["./images/27d2f00e0a50f4a1832ae8bd11c163a1.jpg", "./images/ph-11134207-7qul0-lg1xxf2vqqns7d.jpg"],
        tagline: "Makeup | Natural & Long-lasting",
        summary: "Perfect match foundation for natural coverage",
        description: "Lightweight foundation that matches your skin tone perfectly. Provides natural coverage with a matte finish that lasts all day.",
        highlights: ["Perfect skin match", "Natural coverage", "Matte finish", "Long-lasting", "Lightweight formula"]
    },
    {
        id: 17,
        name: "Lakme Eyeconic Kajal",
        price: 199,
        category: "beauty",
        image: ["./images/225e07e8901030644535_11.avif", "./images/2e351595ebe544d8d2b20a847a9f6f3f.jpg"],
        tagline: "Eye Makeup | Bold & Smudge-proof",
        summary: "Intense black kajal for dramatic eyes",
        description: "Waterproof kajal with intense black color and smooth application. Smudge-proof formula that stays put all day long.",
        highlights: ["Waterproof formula", "Intense black color", "Smooth application", "Smudge-proof", "Long-lasting"]
    },
    {
        id: 18,
        name: "Nykaa Matte Lipstick",
        price: 349,
        category: "beauty",
        image: ["./images/8-shade-card_1.avif", "./images/c468790NYKAC00002908_3.avif"],
        tagline: "Lip Makeup | Matte & Vibrant",
        summary: "High-pigment matte lipstick in vibrant shades",
        description: "Creamy matte lipstick with high pigmentation and comfortable wear. Available in multiple vibrant shades for every occasion.",
        highlights: ["High pigmentation", "Matte finish", "Comfortable wear", "Vibrant shades", "Long-lasting color"]
    },
    {
        id: 19,
        name: "The Body Shop Vitamin-E Cream",
        price: 799,
        category: "beauty",
        image: "🧤",
        tagline: "Skincare | Nourishing & Anti-aging",
        summary: "Vitamin E enriched moisturizing cream",
        description: "Rich moisturizing cream enriched with Vitamin E for deep nourishment and anti-aging benefits. Suitable for all skin types.",
        highlights: ["Vitamin E enriched", "Deep nourishment", "Anti-aging benefits", "All skin types", "Rich moisturizing"]
    },
    {
        id: 20,
        name: "Mamaearth Shampoo",
        price: 349,
        category: "beauty",
        image: "🧤",
        tagline: "Hair Care | Natural & Chemical-free",
        summary: "Natural shampoo for healthy hair",
        description: "Gentle natural shampoo made with organic ingredients. Free from harmful chemicals and suitable for all hair types.",
        highlights: ["Natural ingredients", "Chemical-free", "Gentle formula", "All hair types", "Organic"]
    }
];

let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentProductId = null; // Track current product in modal

// Modal image gallery functionality
function changeModalImage(direction) {
    const images = document.querySelectorAll('.modal-gallery-img');
    let currentIndex = 0;
    
    // Find current visible image
    images.forEach((img, index) => {
        if (img.style.display === 'block') {
            currentIndex = index;
        }
    });
    
    // Hide current image
    images[currentIndex].style.display = 'none';
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    // Show new image
    images[newIndex].style.display = 'block';
}

// Image gallery functionality
function changeImage(productId, direction) {
    const productCard = document.querySelector(`[onclick="openProductDetail(${productId})"]`);
    const images = productCard.querySelectorAll('.gallery-img');
    let currentIndex = 0;
    
    // Find current visible image
    images.forEach((img, index) => {
        if (img.style.display === 'block') {
            currentIndex = index;
        }
    });
    
    // Hide current image
    images[currentIndex].style.display = 'none';
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    // Show new image
    images[newIndex].style.display = 'block';
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    updateWishlistCount();
    
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Load and display products
function loadProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductDetail(${product.id})">
            <div class="product-image">
                ${Array.isArray(product.image) ? 
                    `<div class="image-gallery">
                        ${product.image.map((img, index) => 
                            `<img src="${img}" alt="${product.name}" style="display: ${index === 0 ? 'block' : 'none'};" class="gallery-img" data-index="${index}">`
                        ).join('')}
                        ${product.image.length > 1 ? 
                            `<div class="gallery-nav">
                                <button class="prev-btn" onclick="event.stopPropagation(); changeImage(${product.id}, -1)">‹</button>
                                <button class="next-btn" onclick="event.stopPropagation(); changeImage(${product.id}, 1)">›</button>
                            </div>` : ''}
                    </div>` :
                    (product.image.startsWith('./') || product.image.startsWith('http') ? 
                        `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px 15px 0 0;">` : 
                        product.image)
                }
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-tagline">${product.tagline || ''}</div>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                    <button class="view-details" onclick="event.stopPropagation(); openProductDetail(${product.id})">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    loadProducts(category);
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Search functionality
function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    if (searchOverlay.style.display === 'flex') {
        searchOverlay.style.display = 'none';
        document.getElementById('searchResults').innerHTML = '';
        document.getElementById('searchInput').value = '';
    } else {
        searchOverlay.style.display = 'flex';
        document.getElementById('searchInput').focus();
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');
    
    if (searchTerm.length === 0) {
        searchResults.innerHTML = '';
        return;
    }
    
    // Filter products based on search term
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No products found for "' + searchTerm + '". Try different keywords.</div>';
        return;
    }
    
    // Display search results
    searchResults.innerHTML = '<h4>Search Results (' + filteredProducts.length + ' found)</h4>' +
        filteredProducts.map(product => `
            <div class="search-result-item" onclick="openProductFromSearch(${product.id})">
                <div class="search-item-image">${product.image.startsWith('./') || product.image.startsWith('http') ? 
                    `<img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover;">` : 
                    product.image}</div>
                <div class="search-item-info">
                    <h5>${product.name}</h5>
                    <p class="search-item-price">₹${product.price}</p>
                    <p class="search-item-category">${product.category}</p>
                </div>
            </div>
        `).join('');
}

function openProductFromSearch(productId) {
    toggleSearch(); // Close search
    openProductDetail(productId); // Open product detail
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    updateCartDisplay();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
    updateCartDisplay();
}

// Wishlist functionality
function toggleWishlistItem(productId) {
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('Removed from wishlist');
    } else {
        const product = products.find(p => p.id === productId);
        wishlist.push(product);
        showNotification('Added to wishlist!');
    }
    
    updateWishlistCount();
    updateWishlistDisplay();
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

function updateWishlistDisplay() {
    const wishlistItems = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p>Your wishlist is empty</p>';
        return;
    }
    
    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
            </div>
            <button onclick="toggleWishlistItem(${item.id})">Remove</button>
        </div>
    `).join('');
}

function toggleWishlist() {
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    wishlistSidebar.classList.toggle('active');
    updateWishlistDisplay();
}

// Product detail modal
function openProductDetail(productId) {
    currentProductId = productId; // Store current product ID
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    
    document.getElementById('productDetailTitle').textContent = product.name;
    document.getElementById('productDetailPrice').textContent = `₹${product.price}`;
    document.getElementById('productDetailDescription').textContent = product.description;
    
    // Update wishlist heart button
    const wishlistHeart = document.getElementById('wishlistHeart');
    const isInWishlist = wishlist.some(item => item.id === productId);
    wishlistHeart.textContent = isInWishlist ? '❤️' : '♡';
    wishlistHeart.style.color = isInWishlist ? '#ff6b6b' : '#666';
    
    document.getElementById('mainProductImage').innerHTML = Array.isArray(product.image) ? 
        `<div class="modal-image-gallery" style="position: relative;">
            ${product.image.map((img, index) => 
                `<img src="${img}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover; display: ${index === 0 ? 'block' : 'none'};" class="modal-gallery-img" data-index="${index}">`
            ).join('')}
            ${product.image.length > 1 ? 
                `<div class="modal-gallery-nav" style="position: absolute; top: 50%; transform: translateY(-50%); width: 100%; display: flex; justify-content: space-between; padding: 0 15px;">
                    <button onclick="changeModalImage(-1)" style="background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 18px;">‹</button>
                    <button onclick="changeModalImage(1)" style="background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 18px;">›</button>
                </div>` : ''}
        </div>` :
        (product.image.startsWith('./') || product.image.startsWith('http') ? 
            `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover;">` : 
            product.image);
    
    // Set product summary
    const summaryElement = document.getElementById('productSummary');
    if (product.summary) {
        summaryElement.textContent = product.summary;
        summaryElement.style.display = 'block';
    } else {
        summaryElement.style.display = 'none';
    }
    
    // Set product highlights
    const highlightsList = document.getElementById('highlightsList');
    const highlightsSection = document.getElementById('productHighlights');
    if (product.highlights && product.highlights.length > 0) {
        highlightsList.innerHTML = product.highlights.map(highlight => `<li>${highlight}</li>`).join('');
        highlightsSection.style.display = 'block';
    } else {
        highlightsSection.style.display = 'none';
    }
    
    // Show/hide size selector based on category
    const sizeSelector = document.getElementById('sizeSelector');
    if (product.category === 'women' || product.category === 'men' || product.category === 'shoes') {
        sizeSelector.style.display = 'block';
    } else {
        sizeSelector.style.display = 'none';
    }
    
    // Set up add to cart button
    document.getElementById('addToCartDetail').onclick = () => {
        addToCart(productId);
        closeProductDetail();
    };
    
    modal.style.display = 'flex';
}

// Product wishlist toggle in modal
function toggleProductWishlist() {
    if (currentProductId) {
        toggleWishlistItem(currentProductId);
        
        // Update heart button appearance
        const wishlistHeart = document.getElementById('wishlistHeart');
        const isInWishlist = wishlist.some(item => item.id === currentProductId);
        wishlistHeart.textContent = isInWishlist ? '❤️' : '♡';
        wishlistHeart.style.color = isInWishlist ? '#ff6b6b' : '#666';
    }
}

function closeProductDetail() {
    document.getElementById('productModal').style.display = 'none';
}

// Size selection
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('size-btn')) {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
});

// Checkout functionality
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const checkoutModal = document.getElementById('checkoutModal');
    updateCheckoutSummary();
    checkoutModal.style.display = 'flex';
    toggleCart();
}

function updateCheckoutSummary() {
    const summaryItems = document.getElementById('summaryItems');
    const summaryTotal = document.getElementById('summaryTotal');
    
    summaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summaryTotal.textContent = total;
}

function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Form submission
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Order placed successfully!');
    cart = [];
    updateCartCount();
    closeCheckout();
});

// Utility functions
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message) {
    // Simple notification - you can enhance this
    alert(message);
}

// Payment method handling
function showPaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentDetails = document.getElementById('paymentDetails');
    
    // Hide all payment detail sections
    document.querySelectorAll('.card-details, .upi-details, .netbanking-details, .wallet-details').forEach(el => {
        el.style.display = 'none';
    });
    
    if (paymentMethod === 'card') {
        paymentDetails.style.display = 'block';
        document.getElementById('cardDetails').style.display = 'block';
    } else if (paymentMethod === 'upi') {
        paymentDetails.style.display = 'block';
        document.getElementById('upiDetails').style.display = 'block';
    } else {
        paymentDetails.style.display = 'none';
    }
}

// Help and Support modals (simplified)
function openHelp() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function openSupport() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Contact methods
function contactViaEmail() {
    window.location.href = 'mailto:pragyakumari0401@gmail.com?subject=Neon Store Inquiry&body=Hi Pragya,%0D%0A%0D%0AI have a question about...';
}

function contactViaPhone() {
    window.location.href = 'tel:+919876543210';
}

function contactViaWhatsApp() {
    const message = 'Hi! I have a question about Neon Store products.';
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function openAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    const searchOverlay = document.getElementById('searchOverlay');
    if (e.target === searchOverlay) {
        searchOverlay.style.display = 'none';
    }
});

// Category page data
const categoryData = {
    fashion: {
        title: "Fashion Collection",
        tagline: "Style That Speaks — Discover the Trend You Deserve.",
        description: "Step into the world of Neon Fashion, where comfort meets creativity. Our exclusive collection brings you the latest trends in clothing, footwear, and accessories — designed to fit your lifestyle and budget. From everyday essentials to statement pieces, Neon Store makes it easy to refresh your wardrobe with timeless style. Shop confidently with premium fabrics, vibrant designs, and sizes for everyone — because fashion at Neon Store is made for every personality."
    },
    electronics: {
        title: "Electronics & Gadgets",
        tagline: "Smart Choices for a Smarter You.",
        description: "Power up your everyday life with Neon Electronics — a curated collection of the latest gadgets and tech essentials. From smartwatches and headphones to mobile accessories, we deliver technology that blends performance with style. Each product is carefully tested for quality and backed by secure warranty, easy returns, and trusted brands — giving you the best value for your money. At Neon Store, innovation is just a click away."
    },
    home: {
        title: "Home & Lifestyle",
        tagline: "Brighten Every Corner of Your Home.",
        description: "Transform your space with Neon Lifestyle, where modern design meets practical comfort. Explore a collection of home décor, kitchen essentials, and accessories made to elevate your daily living. With durable materials, creative designs, and affordable prices, Neon Store helps you build a cozy and stylish home — one product at a time."
    },
    beauty: {
        title: "Beauty & Personal Care",
        tagline: "Glow Inside Out — Because You Deserve It.",
        description: "Discover your glow with Neon Beauty, a handpicked range of skincare and personal care essentials. Our products are crafted to enhance your confidence, comfort, and daily wellness. From natural beauty picks to trending self-care must-haves, Neon Store helps you shine your brightest, every day."
    }
};

// Show category page
function showCategoryPage(categoryKey) {
    const category = categoryData[categoryKey];
    const modal = document.getElementById('categoryModal');
    
    document.getElementById('categoryTitle').textContent = category.title;
    document.getElementById('categoryTagline').textContent = category.tagline;
    document.getElementById('categoryDescription').textContent = category.description;
    
    // Filter and display products for this category
    const categoryProducts = getCategoryProducts(categoryKey);
    displayCategoryProducts(categoryProducts);
    
    modal.style.display = 'flex';
}

// Get products for category
function getCategoryProducts(categoryKey) {
    switch(categoryKey) {
        case 'fashion':
            return products.filter(p => p.category === 'women' || p.category === 'men');
        case 'electronics':
            return products.filter(p => p.category === 'accessories' && p.name.includes('Smart'));
        case 'home':
            return products.filter(p => p.category === 'accessories' && !p.name.includes('Smart'));
        case 'beauty':
            return products.filter(p => p.category === 'accessories');
        default:
            return products;
    }
}

// Display category products
function displayCategoryProducts(categoryProducts) {
    const grid = document.getElementById('categoryProductsGrid');
    
    grid.innerHTML = categoryProducts.map(product => `
        <div class="product-card" onclick="openProductDetail(${product.id})">
            <div class="product-image">
                ${product.image.startsWith('./') || product.image.startsWith('http') ? 
                    `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px 15px 0 0;">` : 
                    product.image}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Close category page
function closeCategoryPage() {
    document.getElementById('categoryModal').style.display = 'none';
}

// Show signup offer
function showSignupOffer() {
    showNotification('🎉 Welcome Offer: Sign up now and get ₹200 OFF on your first purchase! Use code: NEON200');
}

// Login/Account Functions
function toggleAccount() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginTitle').textContent = 'Welcome Back to Neon Store';
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginTitle').textContent = 'Join Neon Store Family';
}

function showForgotPassword() {
    showNotification('Password reset link sent to your email! Check your inbox.');
}

// Account Management
function closeAccount() {
    document.getElementById('accountModal').style.display = 'none';
}

function showAccountSection(section) {
    // Hide all sections
    document.querySelectorAll('.account-section').forEach(s => s.style.display = 'none');
    // Show selected section
    document.getElementById(section + 'Section').style.display = 'block';
    // Update active menu button
    document.querySelectorAll('.account-menu-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function logout() {
    showNotification('Logged out successfully!');
    closeAccount();
}

// Order Tracking
function showOrderTracking(orderId = null) {
    const trackingModal = document.getElementById('trackingModal');
    trackingModal.style.display = 'flex';
    if (orderId) {
        document.getElementById('trackingInput').value = orderId;
        trackOrder();
    }
}

function closeTracking() {
    document.getElementById('trackingModal').style.display = 'none';
}

function trackOrder() {
    const orderId = document.getElementById('trackingInput').value;
    if (orderId) {
        document.getElementById('trackingStatus').style.display = 'block';
    } else {
        showNotification('Please enter a valid order ID');
    }
}

// Cart Enhancements
function applyDiscount() {
    const code = document.getElementById('discountCode').value;
    if (code.toLowerCase() === 'neon200') {
        showNotification('Discount applied! ₹200 off your order.');
    } else {
        showNotification('Invalid discount code. Try NEON200 for ₹200 off!');
    }
}

// Policy Functions
function showReturnPolicy() {
    showNotification('Return Policy: At Neon Store, your satisfaction is guaranteed. Return within 7 days of delivery. Refunds processed in 5-7 business days.');
}

function showPrivacyPolicy() {
    showNotification('Privacy Policy: We protect your data with industry-standard encryption and never share personal information with third parties.');
}

function showTerms() {
    showNotification('Terms of Service: By using Neon Store, you agree to our terms. All transactions are secure and protected.');
}

// Newsletter subscription
document.querySelector('.newsletter-form button').addEventListener('click', function() {
    const email = document.querySelector('.newsletter-form input').value;
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!');
        document.querySelector('.newsletter-form input').value = '';
    }
});

// Sample orders data
const sampleOrders = [
    {
        id: 'NE001',
        date: '2024-01-15',
        status: 'delivered',
        items: [
            { name: "Women's Floral Maxi Dress", quantity: 1, price: 1499, image: '👗' },
            { name: "Velvet Cushion Set", quantity: 1, price: 1299, image: '🛋️' }
        ],
        total: 2798
    },
    {
        id: 'NE002',
        date: '2024-01-20',
        status: 'pending',
        items: [
            { name: "Boat Rockerz 255 Pro+ Earphones", quantity: 1, price: 1199, image: '🎧' }
        ],
        total: 1199
    },
    {
        id: 'NE003',
        date: '2024-01-10',
        status: 'delivered',
        items: [
            { name: "Men's Slim Fit Denim Jacket", quantity: 1, price: 2099, image: '🧥' },
            { name: "JBL Go 3 Bluetooth Speaker", quantity: 1, price: 2799, image: '🔊' }
        ],
        total: 4898
    },
    {
        id: 'NE004',
        date: '2024-01-05',
        status: 'cancelled',
        items: [
            { name: "Samsung 65\" Smart TV", quantity: 1, price: 72999, image: '📺' }
        ],
        total: 72999
    }
];

// Show order list modal
function showOrderList() {
    const modal = document.getElementById('orderListModal');
    modal.style.display = 'flex';
    loadOrders('all');
}

// Close order list modal
function closeOrderList() {
    document.getElementById('orderListModal').style.display = 'none';
}

// Filter orders
function filterOrders(status) {
    // Update filter buttons
    document.querySelectorAll('.order-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadOrders(status);
}

// Load and display orders
function loadOrders(filter = 'all') {
    const ordersContainer = document.getElementById('ordersContainer');
    const filteredOrders = filter === 'all' ? sampleOrders : sampleOrders.filter(order => order.status === filter);
    
    if (filteredOrders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="empty-orders">
                <h4>No orders found</h4>
                <p>You haven't placed any orders yet or no orders match the selected filter.</p>
                <button class="shop-now-btn" onclick="closeOrderList(); scrollToProducts();">Start Shopping</button>
            </div>
        `;
        return;
    }
    
    ordersContainer.innerHTML = filteredOrders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-date">Placed on ${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div class="order-status ${order.status}">${order.status}</div>
            </div>
            
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <div class="order-item-image">${item.image}</div>
                        <div class="order-item-info">
                            <div class="order-item-name">${item.name}</div>
                            <div class="order-item-details">Qty: ${item.quantity} | ₹${item.price}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-footer">
                <div class="order-total">Total: ₹${order.total}</div>
                <div class="order-actions">
                    ${order.status === 'pending' ? 
                        `<button class="order-btn cancel-order-btn" onclick="cancelOrder('${order.id}')">Cancel</button>` : ''}
                    ${order.status !== 'cancelled' ? 
                        `<button class="order-btn track-order-btn" onclick="trackOrderById('${order.id}')">Track</button>` : ''}
                    ${order.status === 'delivered' ? 
                        `<button class="order-btn reorder-btn" onclick="reorderItems('${order.id}')">Reorder</button>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Track order by ID
function trackOrderById(orderId) {
    closeOrderList();
    showOrderTracking(orderId);
}

// Cancel order
function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        // Find and update order status
        const order = sampleOrders.find(o => o.id === orderId);
        if (order) {
            order.status = 'cancelled';
            showNotification('Order cancelled successfully!');
            loadOrders('all'); // Reload orders
        }
    }
}

// Reorder items
function reorderItems(orderId) {
    const order = sampleOrders.find(o => o.id === orderId);
    if (order) {
        // Add all items from the order to cart
        order.items.forEach(item => {
            // Find matching product and add to cart
            const product = products.find(p => p.name === item.name);
            if (product) {
                for (let i = 0; i < item.quantity; i++) {
                    addToCart(product.id);
                }
            }
        });
        closeOrderList();
        showNotification('Items added to cart successfully!');
// Enhanced search with Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});