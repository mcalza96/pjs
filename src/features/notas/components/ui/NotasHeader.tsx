import React from 'react';

export const NotasHeader = () => {
    return (
        <header className="flex flex-col gap-2 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-glow">Mis Calificaciones</h1>
            <p className="text-slate-500 font-medium text-lg">Revisa el feedback de tus profesores</p>

            <style dangerouslySetInnerHTML={{
                __html: `
                .text-glow {
                    text-shadow: 0 0 20px rgba(153, 71, 235, 0.2);
                }
            `}} />
        </header>
    );
};
