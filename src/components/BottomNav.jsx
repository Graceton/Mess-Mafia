import React from 'react';
import { Home, MessageSquare, User, Settings, ShoppingCart } from 'lucide-react';

const BottomNav = ({ activeTab, onNavigate, cartItemCount }) => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'cart', icon: ShoppingCart, label: 'Cart' },
        { id: 'message', icon: MessageSquare, label: 'Inbox' },
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-surface/90 backdrop-blur-md rounded-t-3xl border-t border-gray-800 px-6 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-50">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className="flex flex-col items-center gap-1 group relative transition-all duration-300"
                        aria-label={item.label}
                    >
                        <div className={`p-2 rounded-xl transition-all duration-300 relative ${isActive ? 'bg-secondary/20 text-secondary scale-110 shadow-lg shadow-secondary/20' : 'text-textSecondary hover:text-white'}`}>
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />

                            {/* Cart Badge */}
                            {item.id === 'cart' && cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-surface shadow-md">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                        {/* Active Indicator dot */}
                        {isActive && (
                            <span className="absolute -bottom-2 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_rgba(0,200,83,0.8)]"></span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default BottomNav;
