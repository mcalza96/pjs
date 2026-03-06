import React from 'react';

export interface LoginViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    email?: string;
    password?: string;
    remember?: boolean;
    onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRememberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
}

export const LoginView: React.FC<LoginViewProps> = ({
    onSubmit,
    isLoading,
    email = '',
    password = '',
    remember = false,
    onEmailChange,
    onPasswordChange,
    onRememberChange,
    error
}) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 overflow-x-hidden w-full">
            {/* Soft Gradient Background Elements */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-pastel-pink via-white to-pastel-lavender dark:from-background-dark dark:via-background-dark dark:to-primary/10"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-200/30 blur-[100px] rounded-full"></div>

            {/* Login Card Container */}
            <main className="relative z-10 w-full max-w-[440px] bg-white/80 dark:bg-background-dark/90 backdrop-blur-xl border border-white/50 dark:border-primary/20 rounded-xl shadow-2xl shadow-primary/5 p-8 md:p-10 flex flex-col items-center">
                {/* Header / Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-primary to-pink-300 flex items-center justify-center shadow-lg shadow-primary/20" title="A cute illustrated school mascot logo">
                        <span className="material-symbols-outlined text-white text-5xl">brush</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight text-center">Design School</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-center text-lg">¡Hola de nuevo! <br /> Entra para seguir creando arte</p>
                </div>

                {/* Form Section */}
                <form className="w-full space-y-5" onSubmit={onSubmit}>
                    {error && (
                        <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center font-medium">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Usuario/Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">person</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-4 py-4 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                                placeholder="Tu usuario o email"
                                type="email"
                                required
                                value={email}
                                onChange={onEmailChange}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Contraseña</label>
                            <a className="text-xs font-medium text-primary hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">lock</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-12 py-4 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                                placeholder="••••••••"
                                type="password"
                                required
                                value={password}
                                onChange={onPasswordChange}
                                disabled={isLoading}
                            />
                            <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-primary transition-colors" type="button">
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 px-1 py-1">
                        <input
                            className="w-4 h-4 text-primary bg-primary/5 border-none rounded focus:ring-primary/40"
                            id="remember"
                            type="checkbox"
                            checked={remember}
                            onChange={onRememberChange}
                            disabled={isLoading}
                        />
                        <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">Recuérdame</label>
                    </div>

                    <button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "ENTRANDO..." : "ENTRAR"}
                        {!isLoading && <span className="material-symbols-outlined">arrow_forward</span>}
                    </button>
                </form>

                {/* Footer Section */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        ¿No tienes cuenta? <a className="text-primary font-bold hover:underline" href="#">Únete a la academia</a>
                    </p>
                </div>

                <div className="mt-10 flex gap-4">
                    <button className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:bg-slate-50 transition-colors" aria-label="Social login icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                    </button>
                    <button className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:bg-slate-50 transition-colors" aria-label="Social login icon">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                    </button>
                    <button className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:bg-slate-50 transition-colors" aria-label="Social login icon">
                        <svg className="w-5 h-5 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.96.95-2.44 2.1-4.05 2.1-1.61 0-2.13-1.03-3.95-1.03-1.83 0-2.44 1.01-3.96 1.01-1.52 0-3.16-1.28-4.22-2.74C-1.33 16.59-1.93 11.69 1.1 9.07c1.51-1.31 3.51-2.09 5.3-2.09 1.84 0 2.95.96 4.35.96 1.39 0 2.22-1.02 4.47-1.02 1.85 0 3.73.91 4.96 2.37-3.46 1.57-2.91 6.55.57 8.08-.71 1.87-1.85 3.86-3.7 4.91zM12.03 7c-.08-2.69 2.21-4.91 4.7-5 0 2.75-2.31 5.14-4.7 5z"></path>
                        </svg>
                    </button>
                </div>
            </main>
        </div>
    );
};
