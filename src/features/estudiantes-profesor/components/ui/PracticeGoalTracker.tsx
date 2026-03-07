import React from 'react';

interface PracticeGoalTrackerProps {
    metaCumplida: number; // e.g., 3
}

export const PracticeGoalTracker: React.FC<PracticeGoalTrackerProps> = ({ metaCumplida }) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col justify-center">
            <h3 className="text-lg font-bold mb-4 text-slate-700">Práctica Semanal</h3>
            <div className="flex gap-2 mb-4">
                {[...Array(metaCumplida)].map((_, i) => (
                    <span key={`filled-${i}`} className="material-symbols-outlined text-4xl text-amber-400 font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
            </div>
            <p className="text-sm font-medium text-slate-500">Meta cumplida: {metaCumplida} semanas consecutivas</p>
        </div>
    );
};
