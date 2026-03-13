import React from 'react';

const PromoBanner = () => {
    return (
        <div className="relative w-full h-40 rounded-3xl overflow-hidden bg-surface flex items-center p-6 mt-4">
            {/* Background Graphic/Gradient overlapping color */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent"></div>

            <div className="relative z-10 w-2/3">
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight">Today's Special<br />Menu</h2>
                <p className="text-xs text-textSecondary uppercase tracking-widest font-semibold mb-3">Chef's Pick</p>

                <button className="bg-primary text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                    Order Now
                </button>
            </div>

            {/* Decorative Food Element Placeholder */}
            <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
            <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Special Dish"
                className="absolute right-[-10px] bottom-[-10px] w-36 h-36 object-cover rounded-full border-4 border-surface shadow-xl z-10"
            />
        </div>
    );
};

export default PromoBanner;
