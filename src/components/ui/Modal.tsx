import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/20 backdrop-blur-sm p-6">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl shadow-primary/30 flex flex-col overflow-hidden relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined font-bold">close</span>
                </button>
                {children}
            </div>
        </div>
    );
};
