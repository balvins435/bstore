// BStore Product Data Management
// This file contains all product information and can be easily updated

window.PRODUCT_DATA = {
  // Category definitions
  categories: {
    phones: {
      name: "Mobile Phones",
      icon: "📱",
      description: "Latest smartphones from top brands",
      count: 150,
    },
    laptops: {
      name: "Laptops",
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      description: "Gaming, Business, Ultrabooks, and more",
      count: 80,
    },
    accessories: {
      name: "Accessories",
      icon: "🎧",
      description: "Premium tech accessories and peripherals",
      count: 200,
    },
    pcs: {
      name: "Desktop PCs",
      icon: "🖥️",
      description: "Custom builds and pre-configured systems",
      count: 45,
    },
    gaming: {
      name: "Gaming",
      icon: "🎮",
      description: "Gaming gear and accessories",
      count: 120,
    },
    audio: {
      name: "Audio",
      icon: "🔊",
      description: "Premium sound systems and headphones",
      count: 85,
    },
  },

  // Product definitions organized by category
  products: {
    // Mobile Phones
    phones: [
      {
        id: "iphone15promax",
        name: "iPhone 15 Pro Max",
        price: 165000,
        originalPrice: 180000,
        currency: "KSh",
        category: "Apple",
        image: "images/products/iphone-15-pro-max.jpg",
        inStock: true,
        rating: 4.8,
        reviews: 1247,
        features: [
          "A17 Pro Chip",
          "48MP Camera",
          "5G Ready",
          "Titanium Build",
          "120Hz ProMotion",
        ],
      },
      {
        id: "galaxys24",
        name: "Samsung Galaxy S24 Ultra",
        price: 135000,
        originalPrice: 150000,
        currency: "KSh",
        category: "Samsung",
        image: "images/products/samsung-s24-ultra.jpg",
        inStock: true,
        rating: 4.7,
        reviews: 892,
        features: [
          "200MP Camera",
          "S Pen",
          "5000mAh Battery",
          "AI Features",
          "Snapdragon 8 Gen 3",
        ],
      },
      {
        id: "pixel8pro",
        name: "Google Pixel 8 Pro",
        price: 89000,
        originalPrice: 95000,
        currency: "KSh",
        category: "Google",
        image: "images/products/pixel-8-pro.jpg",
        inStock: true,
        rating: 4.6,
        reviews: 634,
        features: [
          "Google AI",
          "Magic Eraser",
          "Titan M Security",
          "Pure Android",
          "50MP Triple Camera",
        ],
      },
      {
        id: "redminote13",
        name: "Redmi Note 13 Pro+",
        price: 28000,
        originalPrice: 32000,
        currency: "KSh",
        category: "Xiaomi",
        icon: "📱",
        inStock: true,
        rating: 4.5,
        reviews: 456,
        features: [
          "200MP Camera",
          "120W Fast Charge",
          "AMOLED Display",
          "12GB RAM",
          "IP68 Rating",
        ],
      },
      {
        id: "infinixnote40",
        name: "Infinix Note 40 Pro",
        price: 22000,
        originalPrice: 25000,
        currency: "KSh",
        category: "Infinix",
        icon: "📱",
        inStock: true,
        rating: 4.3,
        reviews: 234,
        features: [
          "108MP Camera",
          "5000mAh Battery",
          "33W Charging",
          "Helio G99",
          "120Hz Display",
        ],
      },
      {
        id: "opporeno11",
        name: "Oppo Reno 11 Pro",
        price: 38000,
        originalPrice: 42000,
        currency: "KSh",
        category: "Oppo",
        icon: "📱",
        inStock: true,
        rating: 4.4,
        reviews: 189,
        features: [
          "50MP Portrait Camera",
          "ColorOS 14",
          "4600mAh Battery",
          "67W SuperVOOC",
          "Curved Display",
        ],
      },
      {
        id: "tecnospark20",
        name: "Tecno Spark 20 Pro",
        price: 18500,
        originalPrice: 21000,
        currency: "KSh",
        category: "Tecno",
        icon: "📱",
        inStock: true,
        rating: 4.2,
        reviews: 167,
        features: [
          "48MP AI Camera",
          "5000mAh Battery",
          "Helio G36",
          "Dynamic Port",
          "90Hz Display",
        ],
      },
    ],

    // Laptops
    laptops: [
      {
        id: "macbookpro",
        name: "MacBook Pro M3 Pro",
        price: 285000,
        originalPrice: 310000,
        currency: "KSh",
        category: "Apple",
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        inStock: true,
        rating: 4.9,
        reviews: 623,
        features: [
          "M3 Pro Chip",
          "16GB RAM",
          "512GB SSD",
          "Liquid Retina XDR",
          "18-hour battery",
        ],
      },
      {
        id: "dellxps13",
        name: "Dell XPS 13 Plus",
        price: 185000,
        originalPrice: 200000,
        currency: "KSh",
        category: "Dell",
        icon: "💻",
        inStock: true,
        rating: 4.6,
        reviews: 445,
        features: [
          "12th Gen Intel",
          "16GB RAM",
          "4K Display",
          "Premium Build",
          "Thunderbolt 4",
        ],
      },
      {
        id: "surfacelaptop",
        name: "Microsoft Surface Laptop 5",
        price: 125000,
        originalPrice: 135000,
        currency: "KSh",
        category: "Microsoft",
        icon: "💻",
        inStock: true,
        rating: 4.4,
        reviews: 312,
        features: [
          "12th Gen Intel",
          "Touch Display",
          "Alcantara Keyboard",
          "19 Hours Battery",
          "Windows 11",
        ],
      },
      {
        id: "hppavilion",
        name: "HP Pavilion Gaming 15",
        price: 89000,
        originalPrice: 95000,
        currency: "KSh",
        category: "HP",
        icon: "💻",
        inStock: true,
        rating: 4.3,
        reviews: 278,
        features: [
          "RTX 3050",
          "16GB RAM",
          "144Hz Display",
          "Ryzen 5 5600H",
          "Backlit Keyboard",
        ],
      },
      {
        id: "thinkpadx1",
        name: "ThinkPad X1 Carbon",
        price: 165000,
        originalPrice: 180000,
        currency: "KSh",
        category: "Lenovo",
        icon: "💻",
        inStock: true,
        rating: 4.7,
        reviews: 356,
        features: [
          "11th Gen Intel",
          "16GB RAM",
          "Carbon Fiber",
          "TrackPoint",
          "MIL-SPEC Tested",
        ],
      },
      {
        id: "asusrog",
        name: "ASUS ROG Strix G15",
        price: 135000,
        originalPrice: 145000,
        currency: "KSh",
        category: "ASUS",
        icon: "💻",
        inStock: true,
        rating: 4.5,
        reviews: 289,
        features: [
          "RTX 4060",
          "Ryzen 7 7735HS",
          "300Hz Display",
          "RGB Keyboard",
          "32GB RAM",
        ],
      },
    ],

    // Accessories
    accessories: [
      {
        id: "airpodspro",
        name: "Apple AirPods Pro",
        price: 32000,
        originalPrice: 35000,
        currency: "KSh",
        category: "Headphones",
        icon: "🎧",
        inStock: true,
        rating: 4.8,
        reviews: 1456,
        features: [
          "Active Noise Cancellation",
          "Spatial Audio",
          "H2 Chip",
          "6 Hours Playback",
          "MagSafe Charging",
        ],
      },
      {
        id: "logitechmx",
        name: "Logitech MX Master 3S",
        price: 9500,
        originalPrice: 11000,
        currency: "KSh",
        category: "Mouse",
        icon: "🖱️",
        inStock: true,
        rating: 4.8,
        reviews: 834,
        features: [
          "8000 DPI",
          "USB-C Charging",
          "Multi-device",
          "Quiet Clicks",
          "70-day battery",
        ],
      },
      {
        id: "magickeyboard",
        name: "Apple Magic Keyboard",
        price: 16500,
        originalPrice: 18000,
        currency: "KSh",
        category: "Keyboard",
        icon: "⌨️",
        inStock: true,
        rating: 4.5,
        reviews: 456,
        features: [
          "Scissor Keys",
          "Touch ID",
          "Backlit",
          "Numeric Keypad",
          "1-month battery",
        ],
      },
      {
        id: "sonywh1000",
        name: "Sony WH-1000XM5",
        price: 48000,
        originalPrice: 52000,
        currency: "KSh",
        category: "Headphones",
        icon: "🎧",
        inStock: true,
        rating: 4.9,
        reviews: 1123,
        features: [
          "30hr Battery",
          "ANC",
          "Hi-Res Audio",
          "Quick Charge",
          "Multipoint Connection",
        ],
      },
      {
        id: "phonecase",
        name: "Premium Phone Case",
        price: 2800,
        originalPrice: 3200,
        currency: "KSh",
        category: "Case",
        icon: "📱",
        inStock: true,
        rating: 4.2,
        reviews: 189,
        features: [
          "Drop Protection",
          "6.6ft Drop Test",
          "Wireless Charging",
          "Scratch Resistant",
          "Lifetime Warranty",
        ],
      },
      {
        id: "ankercharger",
        name: "Anker PowerCore 26800",
        price: 8500,
        originalPrice: 9500,
        currency: "KSh",
        category: "Charger",
        icon: "🔋",
        inStock: true,
        rating: 4.6,
        reviews: 723,
        features: [
          "26800mAh Capacity",
          "Fast Charging",
          "3 USB Ports",
          "PowerIQ Technology",
          "LED Indicator",
        ],
      },
    ],

    // Desktop PCs
    pcs: [
      {
        id: "gaminrigrtx4080",
        name: "Gaming PC RTX 4080",
        price: 385000,
        originalPrice: 420000,
        currency: "KSh",
        category: "Gaming",
        icon: "🖥️",
        inStock: true,
        rating: 4.8,
        reviews: 234,
        features: [
          "RTX 4080",
          "32GB DDR5",
          "Ryzen 7 7800X3D",
          "2TB NVMe SSD",
          "Liquid Cooling",
        ],
      },
      {
        id: "officeworkstation",
        name: "Business Workstation",
        price: 125000,
        originalPrice: 140000,
        currency: "KSh",
        category: "Business",
        icon: "🖥️",
        inStock: true,
        rating: 4.5,
        reviews: 167,
        features: [
          "Intel i7",
          "16GB RAM",
          "1TB SSD",
          "Intel UHD Graphics",
          "Windows 11 Pro",
        ],
      },
      {
        id: "imac24",
        name: 'iMac 24" M3',
        price: 235000,
        originalPrice: 250000,
        currency: "KSh",
        category: "Apple",
        icon: "🖥️",
        inStock: true,
        rating: 4.7,
        reviews: 345,
        features: [
          "M3 Chip",
          "4.5K Display",
          "16GB RAM",
          "512GB SSD",
          "Magic Mouse",
        ],
      },
      {
        id: "custombuild",
        name: "Custom Build Workstation",
        price: 195000,
        originalPrice: 210000,
        currency: "KSh",
        category: "Custom",
        icon: "🖥️",
        inStock: true,
        rating: 4.6,
        reviews: 123,
        features: [
          "RTX 3070",
          "24GB RAM",
          "Custom Loop Cooling",
          "RGB Lighting",
          "Tempered Glass",
        ],
      },
      {
        id: "minipc",
        name: "Intel NUC 13 Pro",
        price: 65000,
        originalPrice: 72000,
        currency: "KSh",
        category: "Mini PC",
        icon: "🖥️",
        inStock: true,
        rating: 4.4,
        reviews: 89,
        features: [
          "13th Gen Intel",
          "16GB RAM",
          "512GB SSD",
          "WiFi 6E",
          "Compact Design",
        ],
      },
    ],
  },

  // Configuration settings
  settings: {
    currency: "KSh",
    taxRate: 0.16, // 16% VAT in Kenya
    shipping: {
      nairobi: 0,
      kenya: 500,
      international: 2500,
    },
    paymentMethods: [
      "M-Pesa",
      "Card Payment",
      "Bank Transfer",
      "Cash on Delivery",
    ],
    supportInfo: {
      email: "support@bstore.co.ke",
      phone: "+254 7122 841 33",
      hours: "9AM - 6PM, Monday - Saturday",
    },
  },
};

// Helper functions for product management
window.ProductUtils = {
  // Get all products from all categories
  getAllProducts: () => {
    return Object.values(window.PRODUCT_DATA.products).flat();
  },

  // Get products by category
  getProductsByCategory: (category) => {
    return window.PRODUCT_DATA.products[category] || [];
  },

  // Search products
  searchProducts: (query, category = null) => {
    let products = category
      ? window.ProductUtils.getProductsByCategory(category)
      : window.ProductUtils.getAllProducts();

    const searchTerm = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm)
        )
    );
  },

  // Get featured products (top rated from each category)
  getFeaturedProducts: (limit = 8) => {
    const featured = [];
    Object.values(window.PRODUCT_DATA.products).forEach((categoryProducts) => {
      // Sort by rating and take top products
      const topProducts = categoryProducts
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 2);
      featured.push(...topProducts);
    });

    return featured.sort((a, b) => b.rating - a.rating).slice(0, limit);
  },

  // Get products on sale
  getSaleProducts: () => {
    return window.ProductUtils.getAllProducts().filter(
      (product) => product.originalPrice > product.price
    );
  },

  // Get product by ID
  getProductById: (id) => {
    return window.ProductUtils.getAllProducts().find(
      (product) => product.id === id
    );
  },

  // Calculate discount percentage
  getDiscountPercent: (product) => {
    if (product.originalPrice > product.price) {
      return Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      );
    }
    return 0;
  },

  // Format price with currency
  formatPrice: (price, currency = null) => {
    const curr = currency || window.PRODUCT_DATA.settings.currency;
    return `${curr} ${price.toLocaleString()}`;
  },

  // Calculate tax
  calculateTax: (price) => {
    return price * window.PRODUCT_DATA.settings.taxRate;
  },

  // Calculate total with tax
  calculateTotal: (price) => {
    return price + window.ProductUtils.calculateTax(price);
  },
};

// Initialize notification
console.log("📦 Product data loaded successfully!");
console.log(
  `✅ Categories: ${Object.keys(window.PRODUCT_DATA.categories).length}`
);
console.log(
  `✅ Total products: ${window.ProductUtils.getAllProducts().length}`
);
console.log(
  `✅ Products on sale: ${window.ProductUtils.getSaleProducts().length}`
);
