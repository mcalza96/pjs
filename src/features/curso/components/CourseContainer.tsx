'use client';

import React, { useState } from 'react';
import { CourseHeader } from './ui/CourseHeader';
import { ClassAccordionItem } from './ui/ClassAccordionItem';
import { ClassDetailsSidebar } from './ui/ClassDetailsSidebar';
import { Clase } from '../types';

const MOCK_CLASSES: Clase[] = [
    {
        id: 1,
        title: 'Introducción y fundamentos',
        isOpen: true,
        isAvailable: true,
        duration: '45 mins',
        summary: 'En esta primera sesión, exploraremos el lienzo digital. Aprenderás a configurar tu área de trabajo, personalizar la interfaz para zurdos o diestros y dominar el sistema de capas que hace de Procreate una herramienta tan potente.',
        videoThumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Fx0i4ppC7zPxMdSNFkrIERl8RakojSHGu5Gv4MRv8fLKA5UVfS6ep1_oy-4xD7KMSSA1c2t2NHZPC52tLQE6VUTh78vgkJT9Az8PYnaJgktm3W8CEwuuaiKHHF9mms1YDm-W1YJ8C11DPdDXvrG3Bd0sKxqZhig6zPOYIV7F8yjOa5KmMkQBXlX-aRtjtUcxG8WVGsNtTsK0ExPOAPtmLUYnBKQS_cC9Gn_C-QiftbJlnDTQuKuVDyoZn0nzav3z5nwZGhq_S3Q',
        contenidos: [
            { type: 'Objetivo', text: 'Conocer la interfaz a fondo.' },
            { type: 'Contenido', title: 'Fundamentos de la Interfaz', text: 'Aprenderemos a crear lienzos, navegar por la galería, comprender los menús principales y el panel de ajustes rápidos.' },
            { type: 'Material', text: 'Pinceles base' },
            { type: 'Material', text: 'Paleta de colores' },
            { type: 'Tarea', text: 'Dibujar un personaje simple usando solo 3 colores' }
        ]
    },
    {
        id: 2,
        title: 'Teoría del color y paletas',
        isOpen: false,
        isAvailable: false,
        duration: '35 mins',
        summary: 'Aprende a combinar colores como un profesional. Descubre el disco de color, valores tonales y cómo importar paletas.',
        videoThumb: '',
        contenidos: []
    },
    {
        id: 3,
        title: 'Sombreado y texturas',
        isOpen: false,
        isAvailable: false,
        duration: '50 mins',
        summary: 'Dale vida a tus ilustraciones con luces, sombras dinámicas y texturas de papel realistas utilizando máscaras de recorte.',
        videoThumb: '',
        contenidos: []
    },
    {
        id: 4,
        title: 'Composición final',
        isOpen: false,
        isAvailable: false,
        duration: '60 mins',
        summary: 'Cierra el curso creando una ilustración completa paso a paso, aplicando todos los conceptos aprendidos.',
        videoThumb: '',
        contenidos: []
    }
];

export const CourseContainer = () => {
    const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
    const selectedClass = selectedClassId ? (MOCK_CLASSES.find(c => c.id === selectedClassId) || null) : null;

    const handleSubirTarea = () => {
        alert(`Preparando modal para subir tarea de la clase ${selectedClassId}`);
    };

    return (
        <div className="flex-1 flex overflow-hidden">
            {/* Center Content: Curriculum Accordion */}
            <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-white/50 dark:bg-background-dark/50 z-10 relative">
                <CourseHeader />

                <div className="space-y-6 max-w-3xl pb-10">
                    {MOCK_CLASSES.map((clase) => (
                        <ClassAccordionItem
                            key={clase.id}
                            clase={clase}
                            isSelected={selectedClassId === clase.id}
                            onSelect={() => clase.isAvailable && setSelectedClassId(selectedClassId === clase.id ? null : clase.id)}
                        />
                    ))}
                </div>
            </main>

            {/* Right Sidebar */}
            <ClassDetailsSidebar
                clase={selectedClass}
                onSubirTarea={handleSubirTarea}
            />
        </div>
    );
};
