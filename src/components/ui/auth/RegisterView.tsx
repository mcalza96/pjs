import React from 'react';

export interface RegisterViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    nombre?: string;
    email?: string;
    password?: string;
    rol?: 'estudiante' | 'profesor' | 'padre';
    onNombreChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRolChange?: (rol: 'estudiante' | 'profesor' | 'padre') => void;
    error?: string | null;
}

export const RegisterView: React.FC<RegisterViewProps> = ({
    onSubmit,
    isLoading,
    nombre = '',
    email = '',
    password = '',
    rol = 'estudiante',
    onNombreChange,
    onEmailChange,
    onPasswordChange,
    onRolChange,
    error
}) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 overflow-x-hidden w-full">
            {/* Soft Gradient Background Elements */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-pastel-pink via-white to-pastel-lavender dark:from-background-dark dark:via-background-dark dark:to-primary/10"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-200/30 blur-[100px] rounded-full"></div>

            {/* Register Card Container */}
            <main className="relative z-10 w-full max-w-[480px] bg-white/80 dark:bg-background-dark/90 backdrop-blur-xl border border-white/50 dark:border-primary/20 rounded-xl shadow-2xl shadow-primary/5 p-8 md:p-10 flex flex-col items-center">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-primary to-pink-300 flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-4xl">edit_note</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight text-center">Únete a la academia</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-center text-lg">Crea tu cuenta para empezar a diseñar</p>
                </div>

                {/* Form Section */}
                <form className="w-full space-y-4" onSubmit={onSubmit}>
                    {error && (
                        <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center font-medium">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Nombre Completo</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">badge</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-4 py-3.5 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                                placeholder="Tu nombre artístico"
                                type="text"
                                required
                                value={nombre}
                                onChange={onNombreChange}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">mail</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-4 py-3.5 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                                placeholder="tu@email.com"
                                type="email"
                                required
                                value={email}
                                onChange={onEmailChange}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Contraseña</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-primary/60 text-[20px]">lock</span>
                            </div>
                            <input
                                className="w-full pl-11 pr-4 py-3.5 rounded-full border-none bg-primary/5 dark:bg-primary/10 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                                placeholder="Mínimo 6 caracteres"
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={onPasswordChange}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="space-y-3 py-2">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1 text-center">Selecciona tu rol</label>
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                { id: 'estudiante', label: 'Soy Estudiante', icon: 'school' },
                                { id: 'profesor', label: 'Soy Profesor', icon: 'person_raised_hand' },
                                { id: 'padre', label: 'Soy Padre', icon: 'family_restroom' },
                            ].map((role) => (
                                <button
                                    key={role.id}
                                    type="button"
                                    onClick={() => onRolChange?.(role.id as any)}
                                    disabled={isLoading}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all
                                        ${rol === role.id
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                                            : 'bg-primary/5 text-slate-600 dark:text-slate-400 hover:bg-primary/10'}
                                    `}
                                >
                                    <span className="material-symbols-outlined text-[18px]">{role.icon}</span>
                                    {role.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "CREANDO CUENTA..." : "COMENZAR"}
                        {!isLoading && <span className="material-symbols-outlined">rocket_launch</span>}
                    </button>
                </form>

                {/* Footer Section */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        ¿Ya tienes cuenta? <a className="text-primary font-bold hover:underline" href="/login">Entrar ahora</a>
                    </p>
                </div>
            </main>
        </div>
    );
};
