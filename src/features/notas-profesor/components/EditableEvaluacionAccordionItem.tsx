import React from 'react';
import { EvaluacionTarea } from '@/features/notas/types';
import { EditableRubricCriterion } from './EditableRubricCriterion';

interface EditableEvaluacionAccordionItemProps {
    evaluacion: EvaluacionTarea;
    isExpanded: boolean;
    onToggle: () => void;
}

export const EditableEvaluacionAccordionItem: React.FC<EditableEvaluacionAccordionItemProps> = ({ evaluacion, isExpanded, onToggle }) => {
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
                        <p className="text-slate-500 text-sm font-medium">Estudiante pendiente a evaluar</p>
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
                <div className="px-6 pb-8 pt-2 bg-slate-50/50" onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col gap-5 mt-4">
                        <h2 className="text-xl font-bold text-slate-800 ml-2">Detalle de Rúbrica (Editable)</h2>
                        {evaluacion.criterios.map((criterio) => (
                            <EditableRubricCriterion key={criterio.id} criterio={criterio} />
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                        <textarea
                            className="w-full text-slate-700 bg-white p-4 rounded-xl border-2 border-primary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[120px] transition-all shadow-sm"
                            placeholder="Escribe el feedback general para el estudiante..."
                            defaultValue={evaluacion.feedbackGeneral}
                        />
                        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-full w-full transition-all shadow-md mt-2">
                            <span className="material-symbols-outlined">save</span>
                            Guardar Evaluación
                        </button>
                    </div>
                </div>
            )}
        </details>
    );
};
