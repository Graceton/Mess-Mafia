import React from 'react';

const categories = [
    { id: '1', name: 'Beverages & Snacks', icon: '☕' },
    { id: '2', name: 'Special Dishes', icon: '⭐' },
    { id: '3', name: 'Lunch', icon: '🍛' },
    { id: '4', name: 'South Indian', icon: '🫔' },
    { id: '5', name: 'Sandwiches', icon: '🥪' },
    { id: '6', name: 'Chinese', icon: '🍜' },
];

const Categories = ({ activeCategory, onCategorySelect }) => {
    return (
        <div className="py-2">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Categories</h3>
                {activeCategory && (
                    <button
                        onClick={() => onCategorySelect(null)}
                        className="text-primary text-sm font-semibold hover:underline"
                    >
                        Clear Filter
                    </button>
                )}
            </div>

            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.name;
                    return (
                        <div
                            key={cat.id}
                            onClick={() => onCategorySelect(isActive ? null : cat.name)}
                            className="flex flex-col items-center gap-2 group cursor-pointer text-center"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 shadow-md ${isActive ? 'bg-primary scale-110 shadow-primary/40' : 'bg-surface group-hover:bg-primary/50'}`}>
                                {cat.icon}
                            </div>
                            <span className={`text-[11px] leading-tight transition-colors ${isActive ? 'text-primary font-bold' : 'font-medium text-textSecondary group-hover:text-white'}`}>
                                {cat.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
