import React from 'react';
import { EvaluacionTarea } from '../../types';
import { FeedbackProfesor } from './FeedbackProfesor';
import { RubricCriterion } from './RubricCriterion';

interface EvaluacionAccordionItemProps {
    evaluacion: EvaluacionTarea;
    isExpanded: boolean;
    onToggle: () => void;
}

export const EvaluacionAccordionItem: React.FC<EvaluacionAccordionItemProps> = ({ evaluacion, isExpanded, onToggle }) => {
    return (
        <details
            className={`group bg-white border-2 ${isExpanded ? 'border-primary shadow-lg shadow-primary/10' : 'border-pastel-lavender/50 hover:border-primary/40'} rounded-[2rem] overflow-hidden transition-all duration-300`}
            open={isExpanded}
            onClick={(e) => {
                e.preventDefault();
                onToggle();
            }}
        >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden bg-white z-10 relative">
                <div className="flex items-center gap-4">
                    <div className="text-primary flex items-center justify-center rounded-2xl bg-pastel-lavender/50 shrink-0 size-14">
                        <span className="material-symbols-outlined text-[28px]">assignment_turned_in</span>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-slate-800">{evaluacion.tituloTarea}</h3>
                        <p className="text-slate-500 text-sm font-medium">Calificado por {evaluacion.profesor.nombre}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`px-6 py-2 rounded-full hidden sm:block ${evaluacion.puntajeTotal >= 80 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'} font-bold text-base shadow-sm`}>
                        {evaluacion.puntajeTotal}/{evaluacion.maximoTotal}
                    </div>
                    <div className={`p-2 rounded-full ${isExpanded ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'} transition-colors`}>
                        <span className={`material-symbols-outlined transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </div>
                </div>
            </summary>

            {isExpanded && (
                <div className="px-6 pb-8 pt-2 bg-slate-50/50">
                    {/* Header para mobile de la nota */}
                    <div className="sm:hidden mb-6 flex justify-center">
                        <div className={`px-8 py-3 rounded-full ${evaluacion.puntajeTotal >= 80 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'} font-bold text-lg shadow-sm w-full text-center`}>
                            Calificación: {evaluacion.puntajeTotal}/{evaluacion.maximoTotal}
                        </div>
                    </div>

                    <FeedbackProfesor
                        nombre={evaluacion.profesor.nombre}
                        avatar={evaluacion.profesor.avatar}
                        comentario={evaluacion.feedbackGeneral}
                    />

                    <div className="flex flex-col gap-5 mt-8">
                        <h2 className="text-xl font-bold text-slate-800 ml-2">Detalle de Rúbrica</h2>
                        {evaluacion.criterios.map((criterio) => (
                            <RubricCriterion key={criterio.id} criterio={criterio} />
                        ))}
                    </div>
                </div>
            )}
        </details>
    );
};
