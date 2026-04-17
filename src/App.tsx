import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import productsData from './data/products.json';
import { Product, CartItem as CartItemType } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [activeView, setActiveView] = useState<'products' | 'cart'>('products');
  const [products] = useState<Product[]>(productsData as Product[]);

  const addToCart = (product: Product) => {
    const newItem: CartItemType = {
      ...product,
      cartId: Math.random().toString(36).substr(2, 9),
    };
    setCart((prev) => [...prev, newItem]);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const removeFromCart = (cartId: string) => {
    const itemToRemove = cart.find(item => item.cartId === cartId);
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from cart.`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const clearCart = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.success("Checkout successful! Cart cleared.", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => {
          setActiveView('cart');
          document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onProductsClick={() => {
          setActiveView('products');
          document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onPricingClick={() => {
          document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onFeaturesClick={() => {
          document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onFAQClick={() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }}
      />
      
      <main className="flex-grow">
        <Banner onExploreClick={() => {
          setActiveView('products');
          document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <Stats />
        
        {/* Main Section with Toggling */}
        <section id="products-section" className="py-16 px-4 lg:px-20 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#101727] mb-4">Premium Digital Tools</h2>
              <p className="text-[#627382] max-w-2xl mx-auto text-base mb-8 leading-relaxed">
                Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
              </p>
              
              {/* Toggle Buttons */}
              <div className="inline-flex p-1 bg-white rounded-full border border-slate-200 shadow-sm">
                <button 
                  onClick={() => setActiveView('products')}
                  className={cn(
                    "px-8 py-2.5 rounded-full font-bold transition-all duration-300 text-sm",
                    activeView === 'products' ? "bg-linear text-white shadow-lg" : "text-[#627382] hover:text-primary"
                  )}
                >
                  Products
                </button>
                <button 
                  onClick={() => setActiveView('cart')}
                  className={cn(
                    "px-8 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm",
                    activeView === 'cart' ? "bg-linear text-white shadow-lg" : "text-[#627382] hover:text-primary"
                  )}
                >
                  Cart ({cart.length})
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeView === 'products' ? (
                <motion.div 
                  key="products"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={addToCart} 
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="cart"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 sm:mb-8">Your Cart</h3>
                    
                    {cart.length === 0 ? (
                      <div className="text-center py-12 sm:py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-slate-300" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Your cart is empty</h4>
                        <p className="text-sm sm:text-base text-slate-500 mb-8">Looks like you haven't added any tools yet.</p>
                        <button 
                          onClick={() => setActiveView('products')}
                          className="btn btn-primary rounded-xl px-8"
                        >
                          Browse Products
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-2 mb-8 sm:mb-10">
                          {cart.map((item) => (
                            <CartItem 
                              key={item.cartId} 
                              item={item} 
                              onRemove={removeFromCart} 
                            />
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 sm:pt-8 border-t border-slate-100">
                          <div className="text-center sm:text-left">
                            <p className="text-slate-500 text-xs sm:text-sm mb-1">Total Amount:</p>
                            <p className="text-3xl sm:text-4xl font-bold text-slate-900">${totalPrice}</p>
                          </div>
                          <button 
                            onClick={clearCart}
                            className="btn btn-primary h-12 sm:h-14 rounded-2xl px-8 sm:px-12 gap-2 w-full sm:w-auto text-base font-bold"
                          >
                            Proceed to Checkout
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        
        <div id="features-section">
          <Steps />
        </div>
        <div id="pricing-section">
          <Pricing />
        </div>
        
        {/* CTA Section */}
        <section className="py-20 px-4 lg:px-20 bg-linear text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready To Transform Your Workflow?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" /> Start your free trial today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => {
                  setActiveView('products');
                  document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn bg-white text-[#4F39F6] hover:bg-slate-50 border-none rounded-full px-10 h-12 min-h-0 text-base font-bold shadow-lg"
              >
                Explore Products
              </button>
              <button 
                onClick={() => {
                  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[#4F39F6] rounded-full px-10 h-12 min-h-0 text-base font-bold"
              >
                View Pricing
              </button>
            </div>
            <p className="text-xs text-white/70 font-medium tracking-wide">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </section>
      </main>
      
      <Footer />
      <ToastContainer aria-label="Notifications" />
    </div>
  );
}
