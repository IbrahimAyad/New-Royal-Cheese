import React from 'react';

const SimpleWebsite = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white">
                  🍔 <span className="text-red-500">Royale</span> <span className="text-yellow-400">with</span> <span className="text-red-500">Cheese</span> 👑
                </span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-red-400 transition-colors font-medium">Home</a>
                <a href="#menu" className="text-white hover:text-red-400 transition-colors font-medium">Menu</a>
                <a href="#gallery" className="text-white hover:text-red-400 transition-colors font-medium">Gallery</a>
                <a href="#franchise" className="text-white hover:text-red-400 transition-colors font-medium">Franchise</a>
                <a href="#about" className="text-white hover:text-red-400 transition-colors font-medium">About</a>
                <a href="#contact" className="text-white hover:text-red-400 transition-colors font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            🍔 <span className="text-red-500">Royale</span> <span className="text-yellow-400">with</span> <span className="text-red-500">Cheese</span> 👑
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 font-medium">
            Detroit's Most Awarded Burger Destination
          </p>
          <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Experience Pulp Fiction themed dining with gourmet burgers, craft shakes, and Detroit's finest hospitality in Midtown's premier location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300">
              🍔 View Menu
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300">
              📞 Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              🍔 <span className="text-red-500">Our Menu</span> 🍔
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gourmet burgers crafted with premium ingredients and served with Detroit pride
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="The Royale Classic" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-3 text-white">The Royale Classic</h3>
              <p className="text-gray-300 mb-4">Premium beef patty, aged cheddar, crispy bacon, lettuce, tomato, house sauce on brioche bun</p>
              <p className="text-red-400 font-bold text-xl">$14.99</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Truffle Deluxe" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-3 text-white">Truffle Deluxe</h3>
              <p className="text-gray-300 mb-4">Wagyu beef, truffle aioli, wild mushrooms, arugula, Swiss cheese on artisan bun</p>
              <p className="text-red-400 font-bold text-xl">$19.99</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="BBQ Smokehouse" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-3 text-white">BBQ Smokehouse</h3>
              <p className="text-gray-300 mb-4">Smoked brisket, house BBQ sauce, coleslaw, pickles, onion rings on sourdough</p>
              <p className="text-red-400 font-bold text-xl">$16.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              📸 <span className="text-red-500">Royal Gallery</span> 📸
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A visual feast of our gourmet creations and premium dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gallery 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gallery 2"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gallery 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section id="franchise" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              🏢 <span className="text-red-500">Franchise with</span> Royale with Cheese 🏢
            </h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join Detroit's most successful burger franchise and bring proven excellence to your market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Proven Success</h3>
              <p className="text-gray-300">4.9-star rating with 3000+ reviews and industry-leading profit margins</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Complete Support</h3>
              <p className="text-gray-300">Full training, marketing, operations, and ongoing business support</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Tech Stack</h3>
              <p className="text-gray-300">AI-powered ordering, analytics, and customer management systems</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300">
              🚀 Start Your Franchise Journey
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              ℹ️ <span className="text-red-500">About Us</span> ℹ️
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Our Story</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Founded in Detroit's vibrant Midtown district, Royale with Cheese has become the city's premier burger destination. 
                Inspired by the iconic Pulp Fiction reference, we've created a dining experience that's both nostalgic and cutting-edge.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                Our commitment to quality ingredients, innovative flavors, and exceptional service has earned us a 4.9-star rating 
                and over 3,000 satisfied customers. We're not just a restaurant – we're a Detroit institution.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-white">⭐ 4.9 Star Rating</h4>
                <p className="text-gray-300">Over 3,000 five-star reviews from satisfied customers</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-white">🏆 Award Winning</h4>
                <p className="text-gray-300">Detroit's #1 burger destination three years running</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-white">🌟 Premium Quality</h4>
                <p className="text-gray-300">Only the finest ingredients and sustainable sourcing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              📞 <span className="text-red-500">Contact Us</span> 📞
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Visit Us</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-white">📍 Location</h4>
                  <p className="text-gray-300 text-lg">
                    4163 Cass Ave<br />
                    Detroit, MI 48201
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-white">📞 Phone</h4>
                  <p className="text-gray-300 text-lg">
                    <a href="tel:313-315-3014" className="hover:text-red-400 transition-colors">
                      (313) 315-3014
                    </a>
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-2 text-white">🕒 Hours</h4>
                  <div className="text-gray-300">
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your message..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                🍔 <span className="text-red-500">Royale with Cheese</span> 👑
              </h3>
              <p className="text-gray-400 mb-4">
                Detroit's most awarded burger destination, serving premium gourmet burgers with exceptional service.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-gray-400 hover:text-red-400 transition-colors">Menu</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-red-400 transition-colors">Gallery</a></li>
                <li><a href="#franchise" className="text-gray-400 hover:text-red-400 transition-colors">Franchise</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 4163 Cass Ave, Detroit, MI 48201</li>
                <li>📞 <a href="tel:313-315-3014" className="hover:text-red-400 transition-colors">(313) 315-3014</a></li>
                <li>✉️ info@royalewithcheese.menu</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Royale with Cheese. All rights reserved. | Detroit's Premier Burger Destination
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleWebsite;
