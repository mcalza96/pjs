import React, { useState } from 'react';
import { CriterioRubrica } from '@/features/notas/types';

interface EditableRubricCriterionProps {
    criterio: CriterioRubrica;
}

export const EditableRubricCriterion: React.FC<EditableRubricCriterionProps> = ({ criterio }) => {
    const [puntaje, setPuntaje] = useState(criterio.puntajeObtenido);
    const [comentario, setComentario] = useState(criterio.comentario || '');

    const progreso = Math.round((puntaje / criterio.puntajeMaximo) * 100);

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
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        className="w-20 text-center font-bold text-primary border-2 border-primary/20 bg-primary/5 rounded-xl py-1 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        value={puntaje}
                        onChange={(e) => setPuntaje(Number(e.target.value))}
                        max={criterio.puntajeMaximo}
                        min={0}
                    />
                    <span className="text-slate-400 font-medium"> / {criterio.puntajeMaximo} pts</span>
                </div>
            </div>

            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                <div
                    className={`${progreso >= 100 ? 'bg-green-400' : colors.fill} h-full rounded-full transition-all duration-300`}
                    style={{ width: `${Math.min(100, Math.max(0, progreso))}%` }}
                ></div>
            </div>

            <textarea
                className="w-full text-slate-600 text-sm bg-slate-50 p-3 rounded-xl border border-dashed border-slate-300 focus:outline-none focus:border-primary/50 focus:bg-white resize-y min-h-[80px] transition-all"
                placeholder="Añade un comentario constructivo aquí..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
            />
        </div>
    );
};
