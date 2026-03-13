import React from 'react';
import { Mail, Github, Twitter } from 'lucide-react';

const Login = ({ onLogin }) => {
    return (
        <div className="min-h-screen max-w-md mx-auto relative bg-background border-x border-surface shadow-2xl flex flex-col justify-center px-6">
            <div className="flex-1 flex flex-col justify-center">
                <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,148,49,0.2)]">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">M</span>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-white text-center mb-2">Let's you in</h1>
                <p className="text-textSecondary text-center mb-10 text-sm">Welcome back to Mess Mafia</p>

                <div className="space-y-4 mb-8">
                    <button className="w-full bg-surface border border-gray-800 hover:border-gray-600 focus:border-primary text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm">
                        <Mail size={20} className="text-red-500" />
                        <span className="font-semibold text-sm">Continue with Google</span>
                    </button>

                    <button className="w-full bg-surface border border-gray-800 hover:border-gray-600 focus:border-primary text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm">
                        <Github size={20} />
                        <span className="font-semibold text-sm">Continue with Apple</span>
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gray-800"></div>
                    <span className="text-textSecondary text-sm font-medium">or</span>
                    <div className="flex-1 h-px bg-gray-800"></div>
                </div>

                <button
                    onClick={onLogin}
                    className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex justify-center items-center shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    Sign in with password
                </button>
            </div>

            <div className="py-6 text-center">
                <p className="text-textSecondary text-sm">
                    Don't have an account? <button className="text-primary font-bold hover:underline">Sign up</button>
                </p>
            </div>
        </div>
    );
};

export default Login;
