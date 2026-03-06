import React from 'react';

export const HabitTrackerCard = () => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-pastel-lavender/50 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Procreate Streaks 🔥</h3>
                <span className="text-xs font-bold bg-pastel-lavender text-primary px-3 py-1 rounded-full">Semana 12</span>
            </div>
            <div className="flex justify-between items-center flex-1 bg-background-light dark:bg-slate-900/50 rounded-xl px-6">
                <div className="flex flex-col items-center gap-1">
                    <div className="size-10 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">check</span>
                    </div>
                    <span className="text-[10px] font-bold">Lun</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="size-10 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">check</span>
                    </div>
                    <span className="text-[10px] font-bold">Mar</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="size-10 rounded-full border-2 border-primary/30 flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Mie</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="size-10 rounded-full border-2 border-primary/30 flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Jue</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="size-10 rounded-full border-2 border-primary/30 flex items-center justify-center"></div>
                    <span className="text-[10px] font-bold">Vie</span>
                </div>
            </div>
        </div>
    );
};
