import React from 'react';

interface StudentProfileHeaderProps {
    nombre: string;
    avatar: string;
    onBack: () => void;
    onEvaluar: () => void;
}

export const StudentProfileHeader: React.FC<StudentProfileHeaderProps> = ({ nombre, avatar, onBack, onEvaluar }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="p-2 sm:p-3 bg-white border border-slate-200 rounded-full shadow-sm text-primary hover:bg-slate-50 transition-colors"
                    title="Volver"
                >
                    <span className="material-symbols-outlined sm:text-2xl">arrow_back</span>
                </button>
                <div className="flex items-center gap-3">
                    <img
                        alt={nombre}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-sm"
                        src={avatar}
                    />
                    <h1 className="text-xl sm:text-3xl font-bold text-slate-800">Perfil de {nombre}</h1>
                </div>
            </div>

            <button
                onClick={onEvaluar}
                className="px-6 py-3 bg-primary text-white rounded-full font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
            >
                <span className="material-symbols-outlined text-[18px]">edit_note</span> Evaluar Tareas
            </button>
        </div>
    );
};
