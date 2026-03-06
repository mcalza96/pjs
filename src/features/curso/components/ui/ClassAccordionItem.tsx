import React from 'react';
import { Clase, Contenido } from '../../types';

interface ClassAccordionItemProps {
    clase: Clase;
    isSelected?: boolean;
    onSelect?: () => void;
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

const renderContenido = (item: Contenido, index: number) => {
    const icon = getIconForType(item.type);

    if (item.type === 'Objetivo') {
        return (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-full">
                <span className="text-xl">{icon}</span>
                <p className="text-sm font-medium"><span className="text-slate-500">Objetivo:</span> <span className="text-primary font-bold">{item.text}</span></p>
            </div>
        );
    }

    if (item.type === 'Contenido') {
        return (
            <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl">
                <span className="text-xl mt-1">{icon}</span>
                <div>
                    <p className="text-sm font-bold text-slate-700">{item.title || 'Contenido de la clase:'}</p>
                    <p className="text-sm text-slate-600 line-clamp-3 mt-1">{item.text}</p>
                </div>
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
                <button className="flex items-center justify-center gap-1 bg-pastel-lavender hover:bg-pastel-lavender/80 text-primary px-4 py-2 rounded-full text-xs font-bold transition-colors">
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    Material
                </button>
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
                <button className="flex items-center justify-center gap-1 bg-white hover:bg-slate-50 text-amber-600 border border-amber-200 px-4 py-2 rounded-full text-xs font-bold transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    Ir a la tarea
                </button>
            </div>
        );
    }

    return null;
};

export const ClassAccordionItem: React.FC<ClassAccordionItemProps> = ({ clase, isSelected, onSelect }) => {
    if (!clase.isAvailable) {
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
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                    <span className={`size-10 rounded-full ${isSelected ? 'bg-primary text-white' : 'bg-pastel-lavender text-primary'} flex items-center justify-center font-bold transition-colors`}>
                        {clase.id}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800">Clase {clase.id}: {clase.title}</h3>
                </div>
                <span className={`material-symbols-outlined transition-transform ${isSelected ? 'rotate-180' : ''} text-primary`}>expand_more</span>
            </summary>

            {isSelected && (
                <div className="px-6 pb-8 space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                        {clase.contenidos.map((contenido, idx) => renderContenido(contenido, idx))}
                    </div>
                </div>
            )}
        </details>
    );
};
