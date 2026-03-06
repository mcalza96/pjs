'use client';

import React from 'react';
import { useTareas } from '../hooks/useTareas';
import { TaskCard } from '@/components/ui/TaskCard';

export const TaskListContainer = () => {
    const { tareas, isLoading, error } = useTareas();

    const handleEntregar = (id: string, titulo: string) => {
        alert(`Preparando modal para entregar: ${titulo} (ID: ${id})`);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-8 w-8 bg-zinc-200 rounded-full mb-4"></div>
                    <p className="text-zinc-500 font-medium">Cargando tus tareas de Procreate...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                <p className="font-medium">Vaya, tuvimos un problema:</p>
                <p className="text-sm">{error.message}</p>
            </div>
        );
    }

    if (tareas.length === 0) {
        return (
            <div className="text-center p-12 bg-zinc-50 border border-zinc-100 rounded-xl">
                <p className="text-zinc-500 font-medium">¡Todo al día! No tienes tareas pendientes.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tareas.map((tarea) => (
                <TaskCard
                    key={tarea.id}
                    titulo={tarea.titulo}
                    fecha_limite={tarea.fecha_limite}
                    onEntregar={() => handleEntregar(tarea.id, tarea.titulo)}
                />
            ))}
        </div>
    );
};
