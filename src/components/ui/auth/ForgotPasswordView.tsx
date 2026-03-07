import React from 'react';

export interface ForgotPasswordViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    email: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | null;
    success: boolean;
}

export const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = ({
    onSubmit,
    isLoading,
    email,
    onEmailChange,
    error,
    success
}) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 overflow-x-hidden w-full">
            {/* Soft Gradient Background Elements */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-pastel-pink via-white to-pastel-lavender dark:from-background-dark dark:via-background-dark dark:to-primary/10"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-200/30 blur-[100px] rounded-full"></div>

            {/* Forgot Password Card Container */}
            <main className="relative z-10 w-full max-w-[440px] bg-white/80 dark:bg-background-dark/90 backdrop-blur-xl border border-white/50 dark:border-primary/20 rounded-xl shadow-2xl shadow-primary/5 p-8 md:p-10 flex flex-col items-center">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-primary to-pink-300 flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-4xl">key</span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight text-center">Recuperar Contraseña</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-center text-lg">Te enviaremos un enlace para que crees una nueva</p>
                </div>

                {success ? (
                    <div className="w-full text-center space-y-6">
                        <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                            <p className="font-semibold">¡Correo enviado!</p>
                            <p className="text-sm">Revisa tu bandeja de entrada (y la carpeta de spam).</p>
                        </div>
                        <a
                            href="/login"
                            className="inline-block text-primary font-bold hover:underline"
                        >
                            Volver al Login
                        </a>
                    </div>
                ) : (
                    <form className="w-full space-y-5" onSubmit={onSubmit}>
                        {error && (
                            <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center font-medium">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Tu Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-primary/60 text-[20px]">mail</span>
                                </div>
                                <input
                                    className="w-full pl-11 pr-4 py-4 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                                    placeholder="ejemplo@email.com"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={onEmailChange}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "ENVIANDO..." : "ENVIAR ENLACE"}
                            {!isLoading && <span className="material-symbols-outlined">send</span>}
                        </button>

                        <div className="text-center mt-6">
                            <a href="/login" className="text-sm text-slate-500 hover:text-primary font-medium transition-colors">
                                Recordé mi contraseña, volver atrás
                            </a>
                        </div>
                    </form>
                )}
            </main>
        </div>
    );
};
