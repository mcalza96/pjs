import React from 'react';
import { Estudiante } from '../../types';

interface StudentCardProps {
    estudiante: Estudiante;
    colorBase: string; // e.g., 'bg-pastel-lavender', 'bg-pastel-pink', 'bg-pastel-yellow'
    onClick: () => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({ estudiante, colorBase, onClick }) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            <div className={`h-20 ${colorBase} relative`}></div>
            <div className="px-6 pb-6 text-center -mt-10 relative">
                <div className="inline-block p-1 bg-white rounded-full mb-3 shadow-sm">
                    <img
                        alt={estudiante.nombre}
                        className="w-20 h-20 rounded-full object-cover"
                        src={estudiante.avatar}
                    />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{estudiante.nombre}</h2>
                <p className="text-slate-500 text-sm mb-4">{estudiante.curso}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full">
                        Promedio: {estudiante.promedio}/100
                    </span>
                    <span className="px-4 py-1.5 bg-pastel-yellow text-amber-700 text-xs font-bold rounded-full">
                        Racha: 🔥 {estudiante.racha} Días
                    </span>
                </div>
                <button
                    onClick={onClick}
                    className="w-full py-3 bg-pastel-lavender/50 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-colors"
                >
                    Ver Perfil
                </button>
            </div>
        </div>
    );
};
