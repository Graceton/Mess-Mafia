import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { productsData } from '../data/products';

const FullMenu = ({ onBack, onAddToCart }) => {
    return (
        <div className="min-h-screen pb-6 max-w-md mx-auto relative bg-background border-x border-surface shadow-2xl flex flex-col">
            <header className="flex items-center gap-4 px-5 pt-8 pb-4 border-b border-surface sticky top-0 bg-background/95 backdrop-blur-md z-10">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-textPrimary hover:bg-gray-800 transition-colors"
                    aria-label="Go Back"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-xl font-bold text-white flex-1">Full Menu</h1>
            </header>

            <main className="px-5 py-6 flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                    {productsData.map((product) => (
                        <div key={product.id} className="bg-surface rounded-2xl p-3 shadow-lg relative flex flex-col items-center">
                            <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                            </div>
                            <div className="w-full">
                                <h4 className="text-white font-bold text-sm mb-1 truncate">{product.name}</h4>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-primary font-bold text-sm">₹{product.price}</span>
                                    <button
                                        onClick={() => onAddToCart(product)}
                                        className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md active:scale-95"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FullMenu;
