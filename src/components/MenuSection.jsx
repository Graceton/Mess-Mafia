import React from 'react';
import { Plus } from 'lucide-react';
import { productsData } from '../data/products';

const ProductCard = ({ product, onAdd }) => {
    return (
        <div className="bg-surface rounded-2xl p-3 shadow-lg relative flex flex-col items-center">
            <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
            </div>
            <div className="w-full">
                <h4 className="text-white font-bold text-sm mb-1 truncate">{product.name}</h4>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-primary font-bold text-sm">₹{product.price}</span>
                    <button
                        onClick={() => onAdd(product)}
                        className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md active:scale-95"
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const MenuSection = ({ onSeeAll, onAddToCart }) => {
    const displayProducts = productsData.slice(0, 4);

    return (
        <div className="py-2 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white tracking-wide">MENU</h3>
                <button
                    onClick={onSeeAll}
                    className="text-primary text-sm font-semibold hover:underline"
                >
                    See all
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAdd={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
