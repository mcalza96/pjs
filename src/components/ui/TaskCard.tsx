import React from 'react';

interface TaskCardProps {
    titulo: string;
    fecha_limite: string;
    onEntregar: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ titulo, fecha_limite, onEntregar }) => {
    return (
        <div className="p-5 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-1">{titulo}</h3>
                <p className="text-sm text-zinc-500 mb-5">
                    Fecha límite: <span className="font-medium text-zinc-700">{fecha_limite}</span>
                </p>
            </div>

            <button
                onClick={onEntregar}
                className="w-full py-2.5 px-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
                Entregar Proyecto
            </button>
        </div>
    );
};
