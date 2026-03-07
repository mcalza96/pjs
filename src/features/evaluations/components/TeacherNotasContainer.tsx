'use client';

import React, { useState } from 'react';
import { NotasHeader } from '@/features/evaluations/components/ui/NotasHeader';
import { EvaluacionAccordionItem } from '@/features/evaluations/components/ui/EvaluacionAccordionItem';
import { EvaluacionTarea } from '@/features/evaluations/types';

const MOCK_NOTAS: EvaluacionTarea[] = [
    {
        id: 't1',
        tituloTarea: 'Tarea 1: Dibujar un personaje',
        puntajeTotal: 85,
        maximoTotal: 100,
        feedbackGeneral: 'Me encantó cómo usaste la paleta de colores. Solo hay un par de detalles en la composición, pero vas por excelente camino ✨',
        profesor: { nombre: 'Prof. Ana', avatar: '' },
        isOpen: true,
        criterios: [
            {
                id: 'c1',
                nombre: 'Uso del Color',
                pesoPorcentaje: 40,
                puntajeObtenido: 35,
                puntajeMaximo: 40,
                colorTema: 'bg-pastel-yellow',
                comentario: 'Los tonos pasteles armonizan muy bien.'
            },
            {
                id: 'c2',
                nombre: 'Composición',
                pesoPorcentaje: 30,
                puntajeObtenido: 20,
                puntajeMaximo: 30,
                colorTema: 'bg-pastel-lavender'
            },
            {
                id: 'c3',
                nombre: 'Limpieza del Trazo',
                pesoPorcentaje: 30,
                puntajeObtenido: 30,
                puntajeMaximo: 30,
                colorTema: 'bg-pastel-pink',
                comentario: '¡Impecable! Ni un solo pixel fuera de lugar.'
            }
        ]
    }
];

export const TeacherNotasContainer = () => {
    const [expandedId, setExpandedId] = useState<string | null>('t1');

    return (
        <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-white/50 dark:bg-background-dark/50 z-10 relative">
            <div className="max-w-4xl mx-auto">
                <NotasHeader />

                <div className="space-y-6 pb-12">
                    {MOCK_NOTAS.map((evaluacion) => (
                        <EvaluacionAccordionItem
                            key={evaluacion.id}
                            evaluacion={evaluacion}
                            isEditable={true}
                            isExpanded={expandedId === evaluacion.id}
                            onToggle={() => setExpandedId(expandedId === evaluacion.id ? null : evaluacion.id)}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};
