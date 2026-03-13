import React from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, CreditCard, LogOut, ChevronRight } from 'lucide-react';

const AccountProfile = ({ onBack, onLogout }) => {
    const profileOptions = [
        { id: '1', icon: User, label: 'Personal Details', value: 'Sarvesh Shinde' },
        { id: '2', icon: Mail, label: 'Email Address', value: 'sarvesh@example.com' },
        { id: '3', icon: Phone, label: 'Phone Number', value: '+91 98765 43210' },
        { id: '4', icon: MapPin, label: 'Delivery Address', value: 'Mumbai, Maharashtra' },
        { id: '5', icon: CreditCard, label: 'Payment Methods', value: 'Visa ending in 4242' },
    ];

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
                <h1 className="text-xl font-bold text-white flex-1">My Profile</h1>
            </header>

            <main className="px-5 py-6 flex-1 flex flex-col">
                {/* Avatar Section */}
                <div className="flex flex-col items-center mb-10">
                    <div className="relative mb-4">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/10">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarvesh"
                                alt="Profile Avatar"
                                className="w-full h-full object-cover bg-surface"
                            />
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-2 border-background shadow-md hover:bg-orange-600 transition-colors">
                            <span className="text-sm font-bold">✎</span>
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">Sarvesh Shinde</h2>
                    <p className="text-textSecondary text-sm bg-surface px-3 py-1 rounded-full border border-gray-800">Gold Member 🌟</p>
                </div>

                {/* Options List */}
                <div className="space-y-3 mb-8 flex-1">
                    {profileOptions.map((option) => (
                        <div key={option.id} className="bg-surface rounded-2xl p-4 flex items-center justify-between border border-gray-800/50 hover:border-gray-600 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                                    <option.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm">{option.label}</h3>
                                    <p className="text-textSecondary text-xs mt-0.5 group-hover:text-gray-300 transition-colors">{option.value}</p>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-textSecondary group-hover:text-primary transition-colors" />
                        </div>
                    ))}
                </div>

                {/* Logout Button */}
                <button
                    onClick={onLogout}
                    className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-500 font-bold py-4 rounded-2xl flex justify-center items-center gap-2 transition-all"
                >
                    <LogOut size={20} />
                    <span>Log Out</span>
                </button>
            </main>
        </div>
    );
};

export default AccountProfile;
