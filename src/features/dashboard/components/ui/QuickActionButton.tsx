import React from 'react';

interface QuickActionButtonProps {
    icon: string;
    title: string;
    containerClassName: string;
    iconContainerClassName: string;
    iconClassName: string;
    titleClassName: string;
    onClick?: () => void;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
    icon,
    title,
    containerClassName,
    iconContainerClassName,
    iconClassName,
    titleClassName,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`${containerClassName} p-6 rounded-xl flex flex-col items-center gap-3 border border-white shadow-sm`}
        >
            <div className={`size-16 rounded-xl ${iconContainerClassName} flex items-center justify-center shadow-sm`}>
                <span className={`material-symbols-outlined text-4xl ${iconClassName}`}>{icon}</span>
            </div>
            <span className={`font-bold text-sm ${titleClassName}`}>{title}</span>
        </button>
    );
};
