import React from 'react';
import { Modal } from '@/components/ui/Modal';

export interface TaskDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    taskName: string;
    taskSubtitle: string;
    onSubmit: () => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({ isOpen, onClose, taskName, taskSubtitle, onSubmit }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="px-8 pt-10 pb-6">
                <h1 className="text-slate-900 text-3xl font-bold tracking-tight">{taskName}</h1>
                <p className="text-primary font-medium mt-1">{taskSubtitle}</p>
            </div>

            <div className="px-8 pb-8 space-y-4 overflow-y-auto max-h-[60vh]">
                {/* Accordion 1: Descripción */}
                <details className="group bg-background-light rounded-2xl overflow-hidden border border-primary/5">
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">description</span>
                            <span className="font-semibold text-slate-800">📝 Descripción</span>
                        </div>
                        <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed">
                        ¡Es hora de dar vida a tu imaginación! En esta tarea, aplicarás los conceptos básicos de silueta y color para crear un personaje original pero sencillo. No te preocupes por el detalle excesivo, ¡enfócate en la personalidad!
                    </div>
                </details>

                {/* Accordion 2: Instrucciones */}
                <details className="group bg-background-light rounded-2xl overflow-hidden border border-primary/5">
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">lightbulb</span>
                            <span className="font-semibold text-slate-800">💡 Instrucciones</span>
                        </div>
                        <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-4 pb-4">
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Usa un lienzo de 2048x2048px en Procreate.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Define una paleta de máximo 4 colores.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Exporta tu trabajo final en formato .PNG o .JPG.</span>
                            </li>
                        </ul>
                    </div>
                </details>

                {/* Accordion 3: Rúbrica */}
                <details className="group bg-background-light rounded-2xl overflow-hidden border border-primary/5">
                    <summary className="flex items-center justify-between p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">checklist</span>
                            <span className="font-semibold text-slate-800">📋 Rúbrica</span>
                        </div>
                        <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-4 pb-4">
                        <div className="overflow-hidden rounded-xl border border-primary/10">
                            <table className="w-full text-xs text-left">
                                <thead className="bg-pastel-lavender/50 text-slate-700">
                                    <tr>
                                        <th className="p-2 font-bold">Criterio</th>
                                        <th className="p-2 font-bold">Puntos</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary/5">
                                    <tr className="bg-white">
                                        <td className="p-2">Uso del Color</td>
                                        <td className="p-2 font-medium text-primary">40 pts</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="p-2">Composición</td>
                                        <td className="p-2 font-medium text-primary">30 pts</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="p-2">Limpieza de trazo</td>
                                        <td className="p-2 font-medium text-primary">30 pts</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </details>

                {/* Upload Area */}
                <div className="mt-6">
                    <div className="border-2 border-dashed border-primary/40 bg-pastel-lavender/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-pastel-lavender/50 transition-colors">
                        <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                            <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                        </div>
                        <p className="text-slate-600 text-sm px-4">
                            <span className="font-bold text-primary">Arrastra tu archivo aquí</span> o haz clic para adjuntar
                        </p>
                        <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Máx 50MB • PNG, JPG, PDF</p>
                    </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                    <button
                        onClick={onSubmit}
                        className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        <span>Subir Tarea</span>
                        <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
};
