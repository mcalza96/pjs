'use client';

import React, { useState } from 'react';
import { Mensaje } from '../../types';

interface FamilyChatProps {
    mensajes: Mensaje[];
    studentName: string;
}

export const FamilyChat: React.FC<FamilyChatProps> = ({ mensajes: initialMensajes, studentName }) => {
    const [mensajes, setMensajes] = useState(initialMensajes);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMsg: Mensaje = {
            id: Date.now().toString(),
            remitente: 'Profesor',
            rol: 'profesor',
            texto: inputValue,
            hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMensajes([...mensajes, newMsg]);
        setInputValue('');
    };

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 h-[450px] lg:h-full flex flex-col overflow-hidden">
            <div className="p-4 bg-pastel-lavender/30 border-b border-pastel-lavender flex items-center justify-between">
                <h3 className="font-bold text-slate-700">Chat Familiar</h3>
                <span className="text-xs font-bold text-primary uppercase">{studentName} & Padre</span>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto w-full p-6 space-y-4">
                {mensajes.map((msg) => {
                    const isProfesor = msg.rol === 'profesor';
                    const isPadre = msg.rol === 'padre';

                    return (
                        <div key={msg.id} className={`flex flex-col ${isProfesor ? 'items-end' : 'items-start'}`}>
                            {/* Role Label */}
                            <span className="text-[10px] text-slate-400 font-bold uppercase mb-1 px-1">
                                {msg.remitente}
                            </span>

                            {/* Message Bubble */}
                            <div className={`
                                max-w-[85%] p-4 text-sm text-slate-800 shadow-sm
                                ${isProfesor ? 'bg-pastel-lavender rounded-2xl rounded-tr-none' : ''}
                                ${isPadre ? 'bg-pastel-yellow/60 rounded-2xl rounded-tl-none' : ''}
                                ${!isProfesor && !isPadre ? 'bg-slate-100/80 italic rounded-2xl rounded-tl-none' : ''}
                            `}>
                                {msg.texto}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1">{msg.hora}</span>
                        </div>
                    );
                })}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white">
                <div className="relative flex items-center">
                    <input
                        className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
                        placeholder="Escribe un mensaje..."
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-2 p-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
