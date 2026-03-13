import React, { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, Plus } from 'lucide-react';

const SearchBar = ({ products, onAddToCart }) => {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const filteredProducts = query
        ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        : [];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative z-40" ref={dropdownRef}>
            <div className="flex items-center gap-2 relative">
                <div className="flex-1 bg-surface rounded-2xl flex items-center px-4 py-3 border border-gray-800 focus-within:border-primary transition-colors">
                    <Search size={20} className="text-textSecondary mr-3" />
                    <input
                        type="text"
                        placeholder="What are you craving today?"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        className="bg-transparent border-none outline-none text-textPrimary w-full placeholder-textSecondary"
                    />
                </div>
                <button className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20" aria-label="Filter">
                    <SlidersHorizontal size={20} />
                </button>
            </div>

            {/* Autocomplete Dropdown */}
            {showDropdown && query.length > 0 && (
                <div className="absolute top-full left-0 right-14 mt-2 bg-surface border border-gray-800 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden max-h-80 overflow-y-auto z-50">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="p-3 flex items-center gap-3 border-b border-gray-800 hover:bg-gray-800/50 transition-colors last:border-0">
                                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-medium text-sm truncate">{product.name}</h4>
                                    <p className="text-primary font-bold text-xs">₹{product.price}</p>
                                </div>
                                <button
                                    onClick={() => {
                                        onAddToCart(product);
                                        setQuery('');
                                        setShowDropdown(false);
                                    }}
                                    className="w-8 h-8 shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-center text-textSecondary text-sm">
                            No dishes found matching "{query}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
