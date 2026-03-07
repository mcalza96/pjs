'use client';

import React, { useState } from 'react';

interface DailyPracticeWidgetProps {
    onSavePractice: () => void;
}

export const DailyPracticeWidget: React.FC<DailyPracticeWidgetProps> = ({ onSavePractice }) => {
    const [activeDay, setActiveDay] = useState<number | null>(null);

    const handleSave = () => {
        onSavePractice();
        setActiveDay(null);
    };

    return (
        <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-xl overflow-visible border border-slate-100 dark:border-slate-800 relative">
            {/* Header Section */}
            <div className="p-6 pb-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    Mi Práctica Diaria <span className="text-xl">🎨</span>
                </h1>
            </div>

            {/* Streak Stats */}
            <div className="flex gap-3 px-6 py-4">
                <div className="flex-1 bg-pastel-yellow dark:bg-amber-900/30 p-4 rounded-2xl flex flex-col items-center justify-center border border-amber-100 dark:border-amber-800/20">
                    <span className="text-xs font-semibold text-amber-800 dark:text-amber-200 uppercase tracking-wider mb-1">Racha Actual</span>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">🔥 5 Días</p>
                </div>
                <div className="flex-1 bg-pastel-pink dark:bg-rose-900/30 p-4 rounded-2xl flex flex-col items-center justify-center border border-rose-100 dark:border-rose-800/20">
                    <span className="text-xs font-semibold text-rose-800 dark:text-rose-200 uppercase tracking-wider mb-1">Racha Más Larga</span>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">⭐ 12 Días</p>
                </div>
            </div>

            {/* Calendar Header & Controls */}
            <div className="px-6 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-400">chevron_left</span>
                    </button>
                    <span className="text-base font-bold text-slate-700 dark:text-slate-300">Octubre 2023</span>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                    </button>
                </div>
                {/* Toggle Pill */}
                <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex">
                    <button className="px-4 py-1 text-xs font-bold bg-white dark:bg-slate-700 shadow-sm rounded-full text-slate-900 dark:text-white">Mes</button>
                    <button className="px-4 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400">Semana</button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="px-6 pt-4 pb-8 relative">
                <div className="grid grid-cols-7 gap-y-2 text-center mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Lu</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Ma</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Mi</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Ju</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Vi</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Sá</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Do</span>

                    {/* Empty slots for Oct 1st (assuming starts Sunday/Monday offset) */}
                    <div className="h-10"></div>
                    <div className="h-10"></div>
                    <div className="h-10"></div>
                    <div className="h-10"></div>
                    <div className="h-10"></div>

                    {/* Days with Completed States */}
                    <div className="h-10 flex items-center justify-center">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                    </div>
                    <div className="h-10 flex items-center justify-center">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                    </div>

                    {/* Week 2 */}
                    <div className="h-10 flex items-center justify-center">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                    </div>
                    <div className="h-10 flex items-center justify-center">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                    </div>
                    <div className="h-10 flex items-center justify-center">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">check</span>
                        </div>
                    </div>

                    {/* Today Highlight (Day 5 of the streak) */}
                    <div className="h-10 flex items-center justify-center relative">
                        <button
                            className="w-10 h-10 flex items-center justify-center rounded-full border-[3px] border-primary bg-pastel-lavender dark:bg-primary/20 text-primary font-bold z-10 hover:brightness-110 transition-all cursor-pointer"
                            onClick={() => setActiveDay(12)}
                        >
                            12
                        </button>

                        {/* Popover */}
                        {activeDay === 12 && (
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-56 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-2xl border border-primary/20 z-20">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-slate-800 dark:text-slate-100">Sube tu práctica de hoy ✨</span>
                                    <button
                                        className="text-slate-400 hover:text-slate-600 cursor-pointer"
                                        onClick={() => setActiveDay(null)}
                                    >
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                                {/* Upload Zone */}
                                <div className="w-full h-24 border-2 border-dashed border-primary/40 bg-pastel-lavender/30 dark:bg-primary/5 rounded-xl flex flex-col items-center justify-center mb-3 cursor-pointer hover:bg-pastel-lavender/50 transition-colors">
                                    <span className="material-symbols-outlined text-primary mb-1">cloud_upload</span>
                                    <span className="text-[10px] text-slate-500 font-medium">Click para subir</span>
                                </div>
                                <button
                                    className="w-full bg-primary text-white text-xs font-bold py-2 rounded-full hover:brightness-110 transition-all shadow-md cursor-pointer"
                                    onClick={handleSave}
                                >
                                    Guardar Práctica
                                </button>
                                {/* Popover Arrow */}
                                <div className="popover-arrow dark:border-t-slate-800"></div>
                            </div>
                        )}
                    </div>

                    {/* Remaining Days */}
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">13</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">14</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">15</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">16</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">17</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">18</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">19</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">20</div>
                    <div className="h-10 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm font-medium">21</div>
                </div>
            </div>
        </div>
    );
};
