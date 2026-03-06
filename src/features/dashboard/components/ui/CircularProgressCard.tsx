import React from 'react';

interface CircularProgressCardProps {
    title: string;
    titleColorClass: string;
    value: string;
    valueColorClass: string;
    subtitle: string;
    bottomText: string;
    bottomTextColorClass: string;
    percentage: number;
    circleBaseClass: string;
    circleProgressClass: string;
    containerBorderClass: string;
}

export const CircularProgressCard: React.FC<CircularProgressCardProps> = ({
    title,
    titleColorClass,
    value,
    valueColorClass,
    subtitle,
    bottomText,
    bottomTextColorClass,
    percentage,
    circleBaseClass,
    circleProgressClass,
    containerBorderClass
}) => {
    return (
        <div className={`bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border ${containerBorderClass} flex flex-col gap-3 min-w-[120px]`}>
            <div className="flex flex-col items-center gap-3">
                <span className={`text-[10px] font-bold ${titleColorClass} uppercase tracking-wider w-full text-center`}>{title}</span>

                <div className="relative size-24">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <circle className={circleBaseClass} cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                        <circle className={circleProgressClass} cx="18" cy="18" fill="none" r="16" strokeDasharray={`${percentage}, 100`} strokeLinecap="round" strokeWidth="3"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-sm font-bold ${valueColorClass}`}>{value}</span>
                        <span className="text-[8px] font-medium text-slate-500">{subtitle}</span>
                    </div>
                </div>

                <span className={`text-xs font-bold ${bottomTextColorClass} text-center`}>{bottomText}</span>
            </div>
        </div>
    );
};
