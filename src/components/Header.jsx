import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header = ({ onProfileClick }) => {
    return (
        <header className="flex justify-between items-center px-5 pt-8 pb-4">
            <div
                className="flex items-center gap-3 cursor-pointer group"
                onClick={onProfileClick}
                role="button"
                tabIndex={0}
            >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface bg-gray-800 group-hover:border-primary transition-colors duration-300">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarvesh"
                        alt="Profile Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm text-textSecondary">Good Morning 👋</p>
                    <h1 className="text-lg font-bold text-textPrimary">Sarvesh Shinde</h1>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-textPrimary hover:bg-gray-800 transition-colors" aria-label="Notifications">
                    <Bell size={20} />
                </button>
            </div>
        </header>
    );
};

export default Header;
