import React from 'react';

export default function PadreDashboardPage() {
    return (
        <main className="flex-1 flex flex-col p-6 overflow-y-auto gap-6 relative z-10 items-center justify-center">
            <h1 className="text-3xl font-bold text-primary">Portal para Padres</h1>
            <p className="text-slate-500 text-center max-w-lg mt-4">
                Bienvenido al panel principal. Las funcionalidades y métricas de seguimiento de tu hijo estarán disponibles pronto.
            </p>
        </main>
    );
}
