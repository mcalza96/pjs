'use client';

import React from 'react';
import { WelcomeBanner } from '@/features/dashboard/components/ui/WelcomeBanner';

export const TeacherClasesContainer = () => {
    return (
        <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-white/50 dark:bg-background-dark/50 z-10 relative flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <WelcomeBanner
                    name="Prof. Ana"
                    nextClassDate="Gestión de Clases en Vivo"
                />

                <div className="mt-8 bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl border border-pastel-lavender/40 shadow-xl flex flex-col items-center text-center gap-6">
                    <div className="w-24 h-24 bg-pastel-lavender/30 rounded-full flex items-center justify-center text-primary mb-4">
                        <span className="material-symbols-outlined text-5xl">videocam</span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 font-display">
                        Acceso a Sala de Videollamada
                    </h2>
                    <p className="text-slate-500 max-w-lg mb-4">
                        Tus estudiantes entrarán aquí para sus clases. Puedes actualizar el enlace recurrente de Meet o Zoom para todos los grupos activos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all shadow-md group">
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">play_arrow</span>
                            Ingresar a la Sala
                        </button>

                        <button className="flex items-center justify-center gap-2 bg-pastel-yellow hover:bg-amber-100 text-amber-700 font-bold py-4 px-8 rounded-full transition-all border border-amber-200 shadow-sm group">
                            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">link</span>
                            Gestionar Links de Clases
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};
