import React from 'react';

interface FeedbackProfesorProps {
    nombre: string;
    avatar: string;
    comentario: string;
}

export const FeedbackProfesor: React.FC<FeedbackProfesorProps> = ({ nombre, avatar, comentario }) => {
    return (
        <div className="bg-pastel-pink/30 border-2 border-primary/20 rounded-4xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl overflow-hidden shrink-0 shadow-sm border border-white">
                <img alt={`Prof. ${nombre}`} className="w-full h-full object-cover" src={avatar} />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">Feedback de {nombre}</h3>
                    <span className="text-xs font-medium text-primary/60 bg-white/50 px-4 py-1.5 rounded-full border border-primary/10">Evaluado</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg italic bg-white/40 p-5 rounded-3xl border border-primary/5 shadow-sm mt-3">
                    "{comentario}"
                </p>
            </div>
        </div>
    );
};
