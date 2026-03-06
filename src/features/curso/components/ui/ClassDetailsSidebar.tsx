import React from 'react';
import { Clase } from '../../types';

interface ClassDetailsSidebarProps {
    clase: Clase | null;
    onSubirTarea: () => void;
}

export const ClassDetailsSidebar: React.FC<ClassDetailsSidebarProps> = ({ clase, onSubirTarea }) => {
    if (!clase) {
        return (
            <aside className="w-80 flex-shrink-0 bg-white border-l border-primary/10 flex flex-col p-8 gap-8 justify-center items-center">
                <p className="text-slate-400 text-center">Selecciona una clase para ver sus detalles.</p>
            </aside>
        );
    }

    return (
        <aside className="w-80 flex-shrink-0 bg-white border-l border-primary/10 flex flex-col p-8 gap-8 overflow-y-auto hidden md:flex">
            {/* Video Placeholder */}
            <div className="relative w-full aspect-video bg-slate-200 rounded-xl overflow-hidden group shadow-lg">
                {clase.videoThumb ? (
                    <img
                        alt={`Previsualización lección ${clase.id}`}
                        className="w-full h-full object-cover"
                        title="Digital art example"
                        src={clase.videoThumb}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <span className="material-symbols-outlined text-4xl text-primary/30">video_library</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center cursor-pointer">
                    <div className="size-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-xl">
                        <span className="material-symbols-outlined scale-150 fill-1">play_arrow</span>
                    </div>
                </div>
            </div>

            {/* Class Summary */}
            <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-800">Clase {clase.id} Resumen</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                    {clase.summary}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Duración: {clase.duration}</span>
                </div>
            </div>

            {/* Action Button */}
            <div className="mt-auto pt-6">
                <button
                    onClick={onSubirTarea}
                    className="w-full py-5 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform"
                >
                    <span className="material-symbols-outlined">cloud_upload</span>
                    Subir Tarea
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 font-medium italic">Formatos permitidos: .procreate, .png, .jpg</p>
            </div>
        </aside>
    );
};
