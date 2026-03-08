import React from 'react';

interface ListCardProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export function ListCard<T>({ title, items, renderItem }: ListCardProps<T>) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-pastel-pink/50 flex flex-col">
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <div className="space-y-3 flex-1 overflow-y-auto pr-2">
                {items.map((item, index) => (
                    <div key={index}>
                        {renderItem(item)}
                    </div>
                ))}
            </div>
        </div>
    );
}
