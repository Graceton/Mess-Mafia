import React from 'react';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';

const CartView = ({ onBack, cart, updateQuantity, removeFromCart }) => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 40 : 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="min-h-screen max-w-md mx-auto relative bg-background border-x border-surface shadow-2xl flex flex-col">
            <header className="flex items-center gap-4 px-5 pt-8 pb-4 border-b border-surface sticky top-0 bg-background/95 backdrop-blur-md z-10">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-textPrimary hover:bg-gray-800 transition-colors"
                    aria-label="Go Back"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-xl font-bold text-white flex-1">My Cart</h1>
            </header>

            <main className="px-5 py-6 flex-1 flex flex-col overflow-y-auto">
                {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-textSecondary">
                        <div className="w-24 h-24 mb-4 bg-surface rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">🛒</span>
                        </div>
                        <p className="text-lg">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="space-y-4 flex-1">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-surface rounded-2xl p-3 flex items-center gap-4">
                                <div className="w-20 h-20 rounded-xl overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-sm mb-1">{item.name}</h3>
                                    <p className="text-primary font-bold text-sm mb-2">₹{item.price}</p>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="text-white text-sm font-semibold w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors self-start mt-1"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Order Summary */}
                {cart.length > 0 && (
                    <div className="mt-8 bg-surface rounded-3xl p-6 border border-gray-800">
                        <h3 className="text-white font-bold mb-4">Order Summary</h3>
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between text-textSecondary text-sm">
                                <span>Subtotal</span>
                                <span className="text-white">₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-textSecondary text-sm">
                                <span>Delivery Fee</span>
                                <span className="text-white">₹{deliveryFee}</span>
                            </div>
                            <div className="h-px bg-gray-800 my-2"></div>
                            <div className="flex justify-between text-white font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">₹{total}</span>
                            </div>
                        </div>
                        <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex justify-center items-center shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                            Checkout (₹{total})
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CartView;
