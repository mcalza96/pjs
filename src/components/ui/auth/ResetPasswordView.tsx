import React from 'react';

export interface ResetPasswordViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    password?: string;
    confirmPassword?: string;
    onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirmPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
}

export const ResetPasswordView: React.FC<ResetPasswordViewProps> = ({
    onSubmit,
    isLoading,
    password = '',
    confirmPassword = '',
    onPasswordChange,
    onConfirmPasswordChange,
    error
}) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 overflow-x-hidden w-full">
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-pastel-pink via-white to-pastel-lavender dark:from-background-dark dark:via-background-dark dark:to-primary/10"></div>

            <main className="relative z-10 w-full max-w-[440px] bg-white/80 dark:bg-background-dark/90 backdrop-blur-xl border border-white/50 dark:border-primary/20 rounded-xl shadow-2xl p-8 md:p-10 flex flex-col items-center">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-primary to-pink-300 flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-4xl">lock_reset</span>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight text-center">Nueva Contraseña</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-center">Elige tu nueva contraseña de acceso</p>
                </div>

                <form className="w-full space-y-5" onSubmit={onSubmit}>
                    {error && (
                        <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center font-medium">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Nueva Contraseña</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">lock</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-4 py-4 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/40 transition-all"
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={onPasswordChange}
                                disabled={isLoading}
                                placeholder="Mínimo 6 caracteres"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Confirmar Contraseña</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">lock_open</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-4 py-4 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/40 transition-all"
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange}
                                disabled={isLoading}
                                placeholder="Repite la contraseña"
                            />
                        </div>
                    </div>

                    <button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-50"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "ACTUALIZANDO..." : "ACTUALIZAR CONTRASEÑA"}
                        {!isLoading && <span className="material-symbols-outlined">check_circle</span>}
                    </button>
                </form>
            </main>
        </div>
    );
};
