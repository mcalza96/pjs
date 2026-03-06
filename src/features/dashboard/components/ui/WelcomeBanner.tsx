import React from 'react';

interface WelcomeBannerProps {
    name: string;
    nextClassDate: string;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ name, nextClassDate }) => {
    return (
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col justify-center relative overflow-hidden shadow-sm border border-pastel-pink/30">
            <div className="absolute -right-8 -top-8 size-40 bg-pastel-pink/40 rounded-full blur-3xl"></div>
            <div className="absolute -left-8 -bottom-8 size-40 bg-pastel-yellow/40 rounded-full blur-3xl"></div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-2">¡Hola {name}! 👋</h1>
            <p className="text-primary font-medium flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                Próxima clase: {nextClassDate}
            </p>
        </div>
    );
};
