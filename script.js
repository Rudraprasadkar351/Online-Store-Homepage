// Product Categories Data
const categories = [
    { name: "all", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&h=200&fit=crop" },
    { name: "electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop" },
    { name: "fashion", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop" },
    { name: "books", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop" },
    { name: "home", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop" },
    { name: "sports", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop" },
    { name: "toys", img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop" },
    { name: "beauty", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop" },
    { name: "grocery", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop" },
    { name: "furniture", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop" },
    { name: "automobile", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=200&fit=crop" },
    { name: "jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop" },
    { name: "mobile", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" }
];

// Products Data with Ratings
const products = [
    { name: "Premium Laptop", price: 75000, category: "electronics", rating: 4.5, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop" },
    { name: "Gaming Laptop", price: 95000, category: "electronics", rating: 4.8, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop" },
    { name: "Wireless Headphones", price: 3500, category: "electronics", rating: 4.3, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
    { name: "Smart Watch", price: 12000, category: "electronics", rating: 4.6, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
    
    { name: "Casual T-Shirt", price: 599, category: "fashion", rating: 4.1, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" },
    { name: "Denim Jeans", price: 1299, category: "fashion", rating: 4.4, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop" },
    { name: "Leather Jacket", price: 4500, category: "fashion", rating: 4.7, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" },
    { name: "Running Shoes", price: 2499, category: "fashion", rating: 4.5, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
    
    { name: "Fiction Novel", price: 399, category: "books", rating: 4.6, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop" },
    { name: "Self-Help Book", price: 499, category: "books", rating: 4.3, img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop" },
    { name: "Cookbook", price: 599, category: "books", rating: 4.4, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop" },
    
    { name: "Modern Sofa", price: 25000, category: "furniture", rating: 4.5, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop" },
    { name: "Office Chair", price: 8500, category: "furniture", rating: 4.2, img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop" },
    { name: "Dining Table", price: 18000, category: "furniture", rating: 4.4, img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=400&fit=crop" },
    
    { name: "Football", price: 899, category: "sports", rating: 4.3, img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop" },
    { name: "Cricket Bat", price: 1599, category: "sports", rating: 4.6, img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=400&fit=crop" },
    { name: "Yoga Mat", price: 699, category: "sports", rating: 4.2, img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop" },
    
    { name: "Action Figure", price: 799, category: "toys", rating: 4.1, img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop" },
    { name: "Board Game", price: 1299, category: "toys", rating: 4.5, img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop" },
    { name: "Remote Car", price: 1899, category: "toys", rating: 4.4, img: "https://images.unsplash.com/photo-1558877385-8c18c8b58d55?w=400&h=400&fit=crop" },
    
    { name: "Lipstick Set", price: 899, category: "beauty", rating: 4.3, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop" },
    { name: "Perfume", price: 2499, category: "beauty", rating: 4.6, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop" },
    { name: "Skincare Set", price: 1799, category: "beauty", rating: 4.5, img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop" },
    
    { name: "Fresh Vegetables", price: 299, category: "grocery", rating: 4.2, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop" },
    { name: "Organic Fruits", price: 499, category: "grocery", rating: 4.4, img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop" },
    { name: "Cooking Oil", price: 399, category: "grocery", rating: 4.1, img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop" },
    
    { name: "Microwave Oven", price: 9500, category: "home", rating: 4.4, img: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop" },
    { name: "Air Purifier", price: 12000, category: "home", rating: 4.6, img: "https://images.unsplash.com/photo-1631545806609-47c23e1c1ee0?w=400&h=400&fit=crop" },
    { name: "Vacuum Cleaner", price: 7500, category: "home", rating: 4.3, img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop" },
    
    { name: "SUV Car", price: 850000, category: "automobile", rating: 4.7, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=400&fit=crop" },
    { name: "Sedan Car", price: 650000, category: "automobile", rating: 4.5, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=400&fit=crop" },
    
    { name: "Gold Necklace", price: 45000, category: "jewelry", rating: 4.8, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop" },
    { name: "Diamond Ring", price: 75000, category: "jewelry", rating: 4.9, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop" },
    { name: "Silver Bracelet", price: 5500, category: "jewelry", rating: 4.4, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop" },
    
    { name: "iPhone 15 Pro", price: 135000, category: "mobile", rating: 4.9, img: "https://images.unsplash.com/photo-1592286927505-b20e3b56d962?w=400&h=400&fit=crop" },
    { name: "Samsung Galaxy", price: 85000, category: "mobile", rating: 4.7, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop" },
    { name: "OnePlus Phone", price: 45000, category: "mobile", rating: 4.5, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" }
];

// DOM Elements
const productList = document.getElementById("productList");
const categoryDiv = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterBtn = document.getElementById("filterBtn");
const filterPanel = document.getElementById("filterPanel");
const minPriceSlider = document.getElementById("minPrice");
const maxPriceSlider = document.getElementById("maxPrice");
const minPriceLabel = document.getElementById("minPriceLabel");
const maxPriceLabel = document.getElementById("maxPriceLabel");
const applyFiltersBtn = document.getElementById("applyFilters");
const clearFiltersBtn = document.getElementById("clearFilters");
const noResults = document.getElementById("noResults");
const cartCount = document.getElementById("cartCount");

// State Management
let currentCategory = "all";
let currentSort = "default";
let minPrice = 0;
let maxPrice = 100000;
let selectedRating = "all";
let cart = [];

// Initialize the page
function init() {
    renderCategories();
    displayProducts(products);
    setupEventListeners();
}

// Render Categories
function renderCategories() {
    categoryDiv.innerHTML = "";
    categories.forEach(c => {
        const categoryCard = document.createElement("div");
        categoryCard.className = "category";
        if (c.name === currentCategory) {
            categoryCard.classList.add("active");
        }
        categoryCard.innerHTML = `
            <img src="${c.img}" alt="${c.name}">
            <p>${c.name === 'all' ? 'All Products' : c.name}</p>
        `;
        categoryCard.onclick = () => filterByCategory(c.name);
        categoryDiv.appendChild(categoryCard);
    });
}

// Display Products
function displayProducts(data) {
    productList.innerHTML = "";
    
    if (data.length === 0) {
        noResults.style.display = "block";
        return;
    } else {
        noResults.style.display = "none";
    }

    data.forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${index * 0.05}s`;
        
        const stars = "⭐".repeat(Math.floor(p.rating));
        
        card.innerHTML = `
            <span class="card-category">${p.category}</span>
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <div class="card-rating">${stars} ${p.rating}</div>
            <div class="card-price">₹${p.price.toLocaleString('en-IN')}</div>
            <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    renderCategories();
    applyAllFilters();
}

// Apply All Filters
function applyAllFilters() {
    let filtered = [...products];

    // Category Filter
    if (currentCategory !== "all") {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Price Filter
    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

    // Rating Filter
    if (selectedRating !== "all") {
        const minRating = parseFloat(selectedRating);
        filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Search Filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.category.toLowerCase().includes(searchTerm)
        );
    }

    // Sorting
    sortProducts(filtered);
}

// Sort Products
function sortProducts(data) {
    let sorted = [...data];

    switch (currentSort) {
        case "priceLowHigh":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "priceHighLow":
            sorted.sort((a, b) => b.price - a.price);
            break;
        case "ratingHighLow":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case "nameAZ":
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }

    displayProducts(sorted);
}

// Add to Cart
function addToCart(name, price) {
    cart.push({ name, price });
    cartCount.textContent = cart.length;
    
    // Animation
    cartCount.style.transform = "scale(1.3)";
    setTimeout(() => {
        cartCount.style.transform = "scale(1)";
    }, 300);
    
    // Show notification (simple alert for now)
    showNotification(`${name} added to cart!`);
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease";
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Clear All Filters
function clearAllFilters() {
    currentCategory = "all";
    currentSort = "default";
    minPrice = 0;
    maxPrice = 100000;
    selectedRating = "all";
    searchInput.value = "";
    sortSelect.value = "default";
    minPriceSlider.value = 0;
    maxPriceSlider.value = 100000;
    minPriceLabel.textContent = "₹0";
    maxPriceLabel.textContent = "₹100,000";
    document.querySelector('input[name="rating"][value="all"]').checked = true;
    
    renderCategories();
    displayProducts(products);
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener("input", applyAllFilters);

    // Sort
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        applyAllFilters();
    });

    // Filter Button
    filterBtn.addEventListener("click", () => {
        filterPanel.classList.toggle("active");
    });

    // Price Range Sliders
    minPriceSlider.addEventListener("input", (e) => {
        minPrice = parseInt(e.target.value);
        minPriceLabel.textContent = `₹${minPrice.toLocaleString('en-IN')}`;
        
        // Ensure min doesn't exceed max
        if (minPrice > maxPrice) {
            maxPrice = minPrice;
            maxPriceSlider.value = maxPrice;
            maxPriceLabel.textContent = `₹${maxPrice.toLocaleString('en-IN')}`;
        }
    });

    maxPriceSlider.addEventListener("input", (e) => {
        maxPrice = parseInt(e.target.value);
        maxPriceLabel.textContent = `₹${maxPrice.toLocaleString('en-IN')}`;
        
        // Ensure max doesn't go below min
        if (maxPrice < minPrice) {
            minPrice = maxPrice;
            minPriceSlider.value = minPrice;
            minPriceLabel.textContent = `₹${minPrice.toLocaleString('en-IN')}`;
        }
    });

    // Rating Filter
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            selectedRating = e.target.value;
        });
    });

    // Apply Filters
    applyFiltersBtn.addEventListener("click", () => {
        applyAllFilters();
        filterPanel.classList.remove("active");
    });

    // Clear Filters
    clearFiltersBtn.addEventListener("click", clearAllFilters);

    // Search button
    document.querySelector('.search-btn').addEventListener('click', applyAllFilters);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
init();
