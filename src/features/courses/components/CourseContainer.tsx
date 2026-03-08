'use client';

import React, { useState } from 'react';
import { CourseHeader } from './ui/CourseHeader';
import { ClassAccordionItem } from './ui/ClassAccordionItem';
import { TaskDetailModal } from './ui/TaskDetailModal';
import { Clase } from '../types';

interface CourseContainerProps {
    initialClases?: Clase[];
    courseTitle?: string;
    courseDescription?: string;
}

export const CourseContainer = ({
    initialClases = [],
    courseTitle,
    courseDescription
}: CourseContainerProps) => {
    const [selectedClassId, setSelectedClassId] = useState<number | string | null>(null);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [selectedTaskName, setSelectedTaskName] = useState('Tarea');

    const handleSubirTarea = () => {
        alert('Subiendo tarea');
        setIsTaskModalOpen(false);
    };

    const handleOpenTask = (taskName: string) => {
        setSelectedTaskName(taskName);
        setIsTaskModalOpen(true);
    };

    return (
        <div className="flex-1 flex overflow-hidden">
            {/* Center Content: Curriculum Accordion */}
            <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-white/50 dark:bg-background-dark/50 z-10 relative">
                <CourseHeader
                    title={courseTitle}
                    description={courseDescription}
                />

                <div className="space-y-6 max-w-3xl pb-10">
                    {initialClases.length > 0 ? (
                        initialClases.map((clase, index) => (
                            <ClassAccordionItem
                                key={clase.id}
                                clase={clase}
                                displayIndex={index + 1}
                                isSelected={selectedClassId === clase.id}
                                onSelect={() => clase.isAvailable && setSelectedClassId(selectedClassId === clase.id ? null : clase.id)}
                                onOpenTask={() => handleOpenTask(clase.title)}
                            />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/30 rounded-3xl border-2 border-dashed border-stone-200">
                            <p className="text-stone-500 font-medium">No se encontraron clases para este curso.</p>
                            <p className="text-stone-400 text-sm mt-1">Asegúrate de estar matriculado y que el curso tenga contenido.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Task Detail Modal */}
            <TaskDetailModal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                taskName={selectedTaskName}
                taskSubtitle="Sube tu avance para recibir feedback"
                onSubmit={handleSubirTarea}
            />
        </div>
    );
};
