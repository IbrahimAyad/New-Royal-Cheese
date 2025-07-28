import React from 'react';

const CompleteWebsite = () => {
  return (
    <>
      {/* Include Tailwind CSS inline for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Mobile-First Base Reset */
        * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        /* Allow text selection for readable content */
        p, span, h1, h2, h3, h4, h5, h6, .selectable {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
        }
        
        /* Premium Typography System */
        body { 
            font-family: 'Inter', sans-serif; 
            letter-spacing: -0.01em;
        }
        
        .font-display { font-family: 'Playfair Display', serif; }
        .font-heading { font-family: 'Oswald', sans-serif; }
        .font-accent { font-family: 'Crimson Text', serif; }
        
        /* Improved Animations */
        @keyframes slideInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        
        /* Enhanced Visual Effects */
        .gradient-gold {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);
        }
        
        .gradient-royal {
            background: linear-gradient(135deg, #DC143C 0%, #8B0000 50%, #4B0000 100%);
        }
        
        .text-shadow-glow {
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 
                         0 0 40px rgba(255, 215, 0, 0.3),
                         0 0 60px rgba(255, 215, 0, 0.2);
        }
        
        .box-shadow-premium {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4),
                        0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        /* Mobile Optimized Menu Cards */
        .menu-card {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .menu-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        /* Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Mobile Menu Optimization */
        .mobile-menu {
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }
        
        .mobile-menu.active {
            transform: translateX(0);
        }
        
        /* Accessibility Improvements */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
        
        /* High Contrast Mode Support */
        @media (prefers-contrast: high) {
            .text-red-600 { color: #FF0000; }
            .bg-gray-800 { background-color: #1a1a1a; }
        }
        
        /* Print Styles */
        @media print {
            .no-print { display: none !important; }
            body { font-size: 12pt; }
        }
      `}} />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg shadow-2xl no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <a href="#hero" className="flex items-center space-x-3 group">
                <span className="text-4xl transform group-hover:rotate-12 transition-transform duration-300">🍔</span>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  Royale with Cheese
                </span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#menu" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Menu</a>
                <a href="#gallery" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Gallery</a>
                <a href="#franchise" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Franchise</a>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">About</a>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Contact</a>
                <a href="tel:313-525-2424" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white font-bold transition-all duration-200 transform hover:scale-105">
                  📞 Order Now
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-gray-300 hover:text-white p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" className="mobile-menu fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-2xl md:hidden">
          <div className="p-6">
            <button id="mobile-menu-close" className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-8 space-y-4">
              <a href="#menu" className="block text-gray-300 hover:text-yellow-400 py-2 text-lg font-medium">Menu</a>
              <a href="#gallery" className="block text-gray-300 hover:text-yellow-400 py-2 text-lg font-medium">Gallery</a>
              <a href="#franchise" className="block text-gray-300 hover:text-yellow-400 py-2 text-lg font-medium">Franchise</a>
              <a href="#about" className="block text-gray-300 hover:text-yellow-400 py-2 text-lg font-medium">About</a>
              <a href="#contact" className="block text-gray-300 hover:text-yellow-400 py-2 text-lg font-medium">Contact</a>
              <a href="tel:313-525-2424" className="block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-bold text-center mt-6">
                📞 Order Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1600&h=900&fit=crop" 
            alt="Gourmet Burger Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display animate-slide-up">
            <span className="block">Welcome to</span>
            <span className="block mt-2 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-shadow-glow">
              Royale with Cheese
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4 font-heading animate-slide-up" style={{animationDelay: '0.2s'}}>
            🏆 Detroit's Most Awarded Burger Destination 🏆
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Experience the "Big Kahuna Burger" and our famous "$5 Shake" in Detroit's premier Pulp Fiction themed restaurant
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a href="#menu" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 box-shadow-premium">
              🍔 View Our Menu
            </a>
            <a href="tel:313-525-2424" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 box-shadow-premium">
              📞 Call: 313-525-2424
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 box-shadow-premium">
              <div className="text-4xl font-bold text-yellow-400 mb-2">⭐ 4.9/5</div>
              <p className="text-gray-300">3,000+ Five-Star Reviews</p>
            </div>
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 box-shadow-premium">
              <div className="text-4xl font-bold text-yellow-400 mb-2">🏆 #1</div>
              <p className="text-gray-300">Detroit's Best Burger 2024</p>
            </div>
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 box-shadow-premium">
              <div className="text-4xl font-bold text-yellow-400 mb-2">🚚 Fast</div>
              <p className="text-gray-300">20-Min Delivery Guaranteed</p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Our Legendary Menu
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From the iconic "Royale with Cheese" to the legendary "Big Kahuna Burger" - Every bite is a masterpiece
            </p>
          </div>
          
          {/* Featured Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Royale with Cheese */}
            <div className="menu-card bg-gray-800 rounded-2xl overflow-hidden box-shadow-premium">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop" 
                  alt="Royale with Cheese" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  SIGNATURE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Royale with Cheese</h3>
                <p className="text-gray-400 mb-4">Quarter pound of premium beef, American cheese, lettuce, tomato, pickles, and our secret sauce</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-yellow-400">$12.99</span>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white font-bold transition-all duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Big Kahuna Burger */}
            <div className="menu-card bg-gray-800 rounded-2xl overflow-hidden box-shadow-premium">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=300&fit=crop" 
                  alt="Big Kahuna Burger" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  FAMOUS
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Big Kahuna Burger</h3>
                <p className="text-gray-400 mb-4">Hawaiian-style with teriyaki glaze, grilled pineapple, bacon, and island sauce</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-yellow-400">$15.99</span>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white font-bold transition-all duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* $5 Shake */}
            <div className="menu-card bg-gray-800 rounded-2xl overflow-hidden box-shadow-premium">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=300&fit=crop" 
                  alt="$5 Shake" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ICONIC
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">The $5 Shake</h3>
                <p className="text-gray-400 mb-4">Martin & Lewis vanilla shake - It's so good, it's worth every penny</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-yellow-400">$5.00</span>
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white font-bold transition-all duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Menu Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#burgers" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-200 transform hover:scale-105">
              <div className="text-4xl mb-3">🍔</div>
              <h3 className="text-xl font-bold text-white">Burgers</h3>
              <p className="text-gray-400 mt-2">8 Gourmet Options</p>
            </a>
            
            <a href="#sides" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-200 transform hover:scale-105">
              <div className="text-4xl mb-3">🍟</div>
              <h3 className="text-xl font-bold text-white">Sides</h3>
              <p className="text-gray-400 mt-2">Fries, Rings & More</p>
            </a>
            
            <a href="#shakes" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-200 transform hover:scale-105">
              <div className="text-4xl mb-3">🥤</div>
              <h3 className="text-xl font-bold text-white">Shakes</h3>
              <p className="text-gray-400 mt-2">Premium Milkshakes</p>
            </a>
            
            <a href="#drinks" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-all duration-200 transform hover:scale-105">
              <div className="text-4xl mb-3">🥤</div>
              <h3 className="text-xl font-bold text-white">Beverages</h3>
              <p className="text-gray-400 mt-2">Sodas & More</p>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Food Gallery
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A visual feast of our mouth-watering creations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop" 
                alt="Gallery 1" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Classic Royale</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" 
                alt="Gallery 2" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Bacon Deluxe</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" 
                alt="Gallery 3" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Big Kahuna</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop" 
                alt="Gallery 4" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">$5 Shake</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop" 
                alt="Gallery 5" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Truffle Fries</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=400&h=400&fit=crop" 
                alt="Gallery 6" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Onion Rings</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=400&fit=crop" 
                alt="Gallery 7" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Loaded Fries</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1619221882043-e7d0e74dd4e5?w=400&h=400&fit=crop" 
                alt="Gallery 8" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold">Craft Sodas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop" 
            alt="Franchise Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Franchise Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the Royale with Cheese family and bring Detroit's best burgers to your city
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Franchise with Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-white mb-2">Proven Business Model</h4>
                    <p className="text-gray-400">4.9-star rating with over 3,000 reviews speaks to our success</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-white mb-2">Comprehensive Support</h4>
                    <p className="text-gray-400">From site selection to grand opening and beyond</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-white mb-2">Premium Brand Recognition</h4>
                    <p className="text-gray-400">Iconic Pulp Fiction theme creates instant memorability</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 box-shadow-premium">
              <h3 className="text-2xl font-bold text-white mb-6">Investment Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span className="text-gray-400">Initial Investment</span>
                  <span className="text-xl font-bold text-yellow-400">$250K - $350K</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span className="text-gray-400">Franchise Fee</span>
                  <span className="text-xl font-bold text-yellow-400">$45,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <span className="text-gray-400">Royalty</span>
                  <span className="text-xl font-bold text-yellow-400">6% of Gross Sales</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Marketing Fee</span>
                  <span className="text-xl font-bold text-yellow-400">2% of Gross Sales</span>
                </div>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full mt-8 transition-all duration-200 transform hover:scale-105">
                Request Franchise Info
              </button>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="bg-black/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Franchisee Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">127%</div>
                <p className="text-gray-400">Average ROI Year 2</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">18</div>
                <p className="text-gray-400">Months to Break Even</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">$1.2M</div>
                <p className="text-gray-400">Avg Annual Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Our Story
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From a Pulp Fiction dream to Detroit's burger reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Legend Begins</h3>
              <p className="text-gray-400 text-lg mb-6">
                Inspired by the iconic film dialogue about the "Royale with Cheese," we set out to create more than just a burger joint. We wanted to build a destination where every bite tells a story, where quality meets culture, and where Detroit's spirit shines through.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Since opening our doors in Midtown Detroit, we've served over 500,000 burgers, earned countless awards, and most importantly, became part of our community's daily life.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2019</div>
                  <p className="text-gray-400">Established</p>
                </div>
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500K+</div>
                  <p className="text-gray-400">Burgers Served</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop" 
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold mb-1">Detroit's #1</div>
                <div className="text-sm">Burger Destination</div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🥇</div>
              <h4 className="text-xl font-bold text-white mb-2">Quality First</h4>
              <p className="text-gray-400">Premium ingredients, never frozen beef, artisan buns baked daily</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-bold text-white mb-2">Community Love</h4>
              <p className="text-gray-400">Supporting local suppliers and giving back to Detroit</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎬</div>
              <h4 className="text-xl font-bold text-white mb-2">Culture & Fun</h4>
              <p className="text-gray-400">Where pop culture meets culinary excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the legend at our Midtown Detroit location
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-gray-800 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                      📍
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-bold">Location</p>
                      <p className="text-gray-400">4163 Cass Ave, Detroit, MI 48201</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                      📞
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-bold">Phone</p>
                      <a href="tel:313-525-2424" className="text-gray-400 hover:text-yellow-400">313-525-2424</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
                      ⏰
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-bold">Hours</p>
                      <p className="text-gray-400">Mon-Thu: 11AM-10PM</p>
                      <p className="text-gray-400">Fri-Sat: 11AM-11PM</p>
                      <p className="text-gray-400">Sunday: 12PM-9PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.840084687987!2d-83.06656368426944!3d42.35294807918735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca52b4f5d5e5%3A0x7e9e9e9e9e9e9e9e!2s4163%20Cass%20Ave%2C%20Detroit%2C%20MI%2048201!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border: 0, minHeight: '400px'}}
                allowFullScreen="" 
                loading="lazy"
                title="Royale with Cheese Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">🍔</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                  Royale with Cheese
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Detroit's most awarded burger destination. Home of the Big Kahuna Burger and the famous $5 Shake.
              </p>
              <div className="flex space-x-4">
                <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop" alt="Award 1" className="w-16 h-16 rounded" />
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop" alt="Award 2" className="w-16 h-16 rounded" />
                <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=100&h=100&fit=crop" alt="Award 3" className="w-16 h-16 rounded" />
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-gray-400 hover:text-yellow-400 transition-colors">Menu</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-yellow-400 transition-colors">Gallery</a></li>
                <li><a href="#franchise" className="text-gray-400 hover:text-yellow-400 transition-colors">Franchise</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>4163 Cass Ave</li>
                <li>Detroit, MI 48201</li>
                <li><a href="tel:313-525-2424" className="hover:text-yellow-400">313-525-2424</a></li>
                <li>Mon-Sat: 11AM-11PM</li>
                <li>Sunday: 12PM-9PM</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Royale with Cheese. All rights reserved. | Pulp Fiction ™ is a trademark of Miramax Films.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const mobileMenuButton = document.getElementById('mobile-menu-button');
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileMenuClose = document.getElementById('mobile-menu-close');
          
          if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', function() {
              mobileMenu.classList.add('active');
            });
          }
          
          if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function() {
              mobileMenu.classList.remove('active');
            });
          }
          
          // Close mobile menu when clicking on a link
          const mobileMenuLinks = mobileMenu.querySelectorAll('a');
          mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
              mobileMenu.classList.remove('active');
            });
          });
        });
      `}} />
    </>
  );
};

export default CompleteWebsite;