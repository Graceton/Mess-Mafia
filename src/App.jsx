import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PromoBanner from './components/PromoBanner';
import Categories from './components/Categories';
import MenuSection from './components/MenuSection';
import BottomNav from './components/BottomNav';
import FullMenu from './components/FullMenu';
import CartView from './components/CartView';
import Login from './components/Login';
import AccountProfile from './components/AccountProfile';
import { productsData } from './data/products';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Views: 'home', 'profile', 'menu', 'cart'
  const [activeView, setActiveView] = useState('home');
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // Cart Functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };


  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  // Handle Full Page Views
  if (activeView === 'profile') {
    return (
      <AccountProfile
        onBack={() => setActiveView('home')}
        onLogout={() => {
          setActiveView('home');
          setIsAuthenticated(false);
        }}
      />
    );
  }

  const filteredProducts = activeCategory
    ? productsData.filter(p => p.categories && p.categories.includes(activeCategory))
    : productsData;

  if (activeView === 'menu') {
    return <FullMenu products={filteredProducts} categoryName={activeCategory} onBack={() => setActiveView('home')} onAddToCart={addToCart} />;
  }

  if (activeView === 'cart') {
    return <CartView onBack={() => setActiveView('home')} cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />;
  }

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen pb-24 max-w-md mx-auto relative bg-background border-x border-surface shadow-2xl">
      <Header onProfileClick={() => setActiveView('profile')} />
      <main className="px-5 space-y-6">
        <SearchBar products={productsData} onAddToCart={addToCart} />
        <PromoBanner />
        <Categories activeCategory={activeCategory} onCategorySelect={setActiveCategory} />

        {filteredProducts.length > 0 ? (
          <MenuSection products={filteredProducts} onSeeAll={() => setActiveView('menu')} onAddToCart={addToCart} />
        ) : (
          <div className="py-8 text-center text-textSecondary bg-surface rounded-2xl border border-gray-800">
            <p>No items found for this category.</p>
          </div>
        )}
      </main>
      <BottomNav activeTab={activeView} onNavigate={setActiveView} cartItemCount={cartItemCount} />
    </div>
  );
}

export default App;
