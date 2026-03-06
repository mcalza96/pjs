import React from 'react';
import { CriterioRubrica } from '../../types';

interface RubricCriterionProps {
    criterio: CriterioRubrica;
}

export const RubricCriterion: React.FC<RubricCriterionProps> = ({ criterio }) => {
    const progreso = Math.round((criterio.puntajeObtenido / criterio.puntajeMaximo) * 100);

    // Asignamos colores según el string que venga para que pinte bg con tailwind
    const getColorClasses = (tema: string) => {
        if (tema.includes('yellow')) return { bg: 'bg-pastel-yellow', text: 'text-amber-700', fill: 'bg-amber-400' };
        if (tema.includes('lavender')) return { bg: 'bg-pastel-lavender', text: 'text-indigo-700', fill: 'bg-primary/70' };
        if (tema.includes('pink')) return { bg: 'bg-pastel-pink', text: 'text-rose-700', fill: 'bg-pink-400' };
        return { bg: 'bg-slate-200', text: 'text-slate-700', fill: 'bg-slate-400' };
    };

    const colors = getColorClasses(criterio.colorTema);

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-8 ${colors.bg} rounded-full`}></div>
                    <h4 className="text-lg font-bold text-slate-700">{criterio.nombre}</h4>
                    <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-bold`}>
                        {criterio.pesoPorcentaje}%
                    </span>
                </div>
                <div className="text-right">
                    <span className={`text-xl font-bold ${progreso === 100 ? 'text-green-500' : 'text-primary'}`}>
                        {criterio.puntajeObtenido}
                    </span>
                    <span className="text-slate-400 font-medium"> / {criterio.puntajeMaximo} pts</span>
                </div>
            </div>

            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                <div
                    className={`${progreso === 100 ? 'bg-green-400' : colors.fill} h-full rounded-full transition-all duration-1000`}
                    style={{ width: `${progreso}%` }}
                ></div>
            </div>

            {criterio.comentario ? (
                <p className="text-slate-500 text-sm bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 italic">
                    "{criterio.comentario}"
                </p>
            ) : (
                <p className="text-slate-400 text-sm text-center py-2">— Sin comentarios adicionales —</p>
            )}
        </div>
    );
};
