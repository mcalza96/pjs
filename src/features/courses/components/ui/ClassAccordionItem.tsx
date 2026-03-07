import React from 'react';
import { Clase, Contenido } from '../../types';

interface ClassAccordionItemProps {
    clase: Clase;
    isSelected?: boolean;
    isEditable?: boolean;
    onSelect?: () => void;
    onOpenTask?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onAddContent?: () => void;
}

const getIconForType = (type: string) => {
    switch (type) {
        case 'Objetivo': return '🎯';
        case 'Contenido': return '📖';
        case 'Material': return '🎨';
        case 'Tarea': return '📝';
        default: return '📍';
    }
};

const renderContenido = (item: Contenido, index: number, isEditable?: boolean, onOpenTask?: () => void) => {
    const icon = getIconForType(item.type);

    if (item.type === 'Objetivo') {
        return (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-full">
                <span className="text-xl">{icon}</span>
                <p className="text-sm font-medium">
                    <span className="text-slate-500">Objetivo:</span> <span className="text-primary font-bold">{item.text}</span>
                </p>
                {isEditable && (
                    <button className="ml-auto text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                )}
            </div>
        );
    }

    if (item.type === 'Contenido') {
        return (
            <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl relative">
                <span className="text-xl mt-1">{icon}</span>
                <div className="flex-1">
                    <p className="text-sm font-bold text-slate-700">{item.title || 'Contenido de la clase:'}</p>
                    <p className="text-sm text-slate-600 line-clamp-3 mt-1">{item.text}</p>
                </div>
                {isEditable && (
                    <button className="absolute top-3 right-3 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                )}
            </div>
        );
    }

    if (item.type === 'Material') {
        return (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white/60 rounded-xl border border-pastel-lavender/50">
                <div className="flex items-center gap-3">
                    <span className="text-xl">{icon}</span>
                    <p className="text-sm font-medium text-slate-700">{item.text}</p>
                </div>
                <div className="flex gap-2">
                    {isEditable ? (
                        <button className="flex items-center justify-center gap-1 bg-pastel-lavender hover:bg-pastel-lavender/80 text-primary px-3 py-1 rounded-full text-xs font-bold transition-colors">
                            <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                    ) : (
                        <button className="flex items-center justify-center gap-1 bg-pastel-lavender hover:bg-pastel-lavender/80 text-primary px-4 py-2 rounded-full text-xs font-bold transition-colors">
                            <span className="material-symbols-outlined text-[16px]">download</span>
                            Material
                        </button>
                    )}
                </div>
            </div>
        );
    }

    if (item.type === 'Tarea') {
        return (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-pastel-yellow/30 rounded-xl border border-pastel-yellow/50">
                <div className="flex items-center gap-3">
                    <span className="text-xl">{icon}</span>
                    <p className="text-sm font-medium text-amber-700"><span className="font-bold">Tarea:</span> {item.text}</p>
                </div>
                <div className="flex gap-2">
                    {isEditable ? (
                        <button className="flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-amber-600 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                    ) : (
                        <button onClick={onOpenTask} className="flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-amber-600 border border-amber-200 px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            Ir a la tarea
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return null;
};

export const ClassAccordionItem: React.FC<ClassAccordionItemProps> = ({
    clase,
    isSelected,
    isEditable = false,
    onSelect,
    onOpenTask,
    onEdit,
    onDelete,
    onAddContent
}) => {
    if (!clase.isAvailable && !isEditable) {
        return (
            <details className="group bg-white border-2 border-pastel-lavender rounded-full overflow-hidden hover:border-primary/40 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center gap-4">
                        <span className="size-10 rounded-full bg-pastel-lavender text-primary flex items-center justify-center font-bold">{clase.id}</span>
                        <h3 className="text-xl font-bold text-slate-800">Clase {clase.id}: {clase.title}</h3>
                    </div>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary/40">expand_more</span>
                </summary>
                <div className="px-8 pb-6">
                    <p className="text-slate-500 italic">Próximamente disponible...</p>
                </div>
            </details>
        );
    }

    return (
        <details
            className={`group ${isSelected ? 'bg-pastel-pink/30 border-primary' : 'bg-white border-pastel-lavender hover:border-primary/40'} border-2 rounded-xl overflow-hidden shadow-sm transition-colors`}
            open={isSelected}
            onClick={(e) => {
                e.preventDefault();
                onSelect?.();
            }}
        >
            <summary className={`flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden relative ${isEditable ? 'pr-20' : ''}`}>
                <div className="flex items-center gap-4">
                    <span className={`size-10 rounded-full ${isSelected ? 'bg-primary text-white' : 'bg-pastel-lavender text-primary'} flex items-center justify-center font-bold transition-colors`}>
                        {clase.id}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        Clase {clase.id}: {clase.title}
                        {isEditable && !clase.isAvailable && (
                            <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-1 rounded-full uppercase tracking-wider">Borrador</span>
                        )}
                    </h3>
                </div>

                {isEditable && (
                    <div
                        className="absolute right-16 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={e => e.stopPropagation()}
                    >
                        <button onClick={onEdit} className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-full transition-colors" title="Editar Clase">
                            <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button onClick={onDelete} className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-full transition-colors" title="Eliminar Clase">
                            <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                    </div>
                )}

                <span className={`material-symbols-outlined transition-transform ${isSelected ? 'rotate-180' : ''} text-primary`}>expand_more</span>
            </summary>

            {isSelected && (
                <div className="px-6 pb-8 space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                        {clase.contenidos.map((contenido, idx) => renderContenido(contenido, idx, isEditable, onOpenTask))}

                        {isEditable && (
                            <div className="flex justify-center mt-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); onAddContent?.(); }}
                                    className="flex items-center gap-2 text-primary font-bold bg-pastel-lavender/50 hover:bg-pastel-lavender px-4 py-2 rounded-full transition-colors w-full justify-center"
                                >
                                    <span className="material-symbols-outlined">add_circle</span>
                                    Añadir Contenido
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </details>
    );
};
