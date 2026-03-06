import React from 'react';

export const MiniCalendarWidget = () => {
    return (
        <div className="w-72 bg-pastel-yellow dark:bg-amber-900/20 rounded-xl p-4 flex flex-col shadow-sm border border-white/50">
            <div className="flex justify-between items-center mb-2 px-2">
                <span className="font-bold text-slate-700 dark:text-amber-200">Octubre 2023</span>
                <div className="flex gap-1">
                    <span className="material-symbols-outlined text-sm cursor-pointer">chevron_left</span>
                    <span className="material-symbols-outlined text-sm cursor-pointer">chevron_right</span>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-[10px] text-center font-bold text-slate-400">
                <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-1 text-xs">
                {/* Simplified Calendar Grid */}
                <div className="aspect-square flex items-center justify-center rounded-full">1</div>
                <div className="aspect-square flex items-center justify-center rounded-full">2</div>
                <div className="aspect-square flex items-center justify-center rounded-full bg-white dark:bg-slate-700 font-bold shadow-sm">3</div>
                <div className="aspect-square flex items-center justify-center rounded-full">4</div>
                <div className="aspect-square flex items-center justify-center rounded-full bg-primary text-white font-bold">5</div>
                <div className="aspect-square flex items-center justify-center rounded-full">6</div>
                <div className="aspect-square flex items-center justify-center rounded-full">7</div>
            </div>
        </div>
    );
};
