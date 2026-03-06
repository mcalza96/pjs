'use client';

import React, { useState } from 'react';
import { NotasHeader } from './ui/NotasHeader';
import { EvaluacionAccordionItem } from './ui/EvaluacionAccordionItem';
import { EvaluacionTarea } from '../types';

const MOCK_NOTAS: EvaluacionTarea[] = [
    {
        id: 't1',
        tituloTarea: 'Tarea 1: Dibujar un personaje',
        puntajeTotal: 85,
        maximoTotal: 100,
        feedbackGeneral: '¡Hiciste un trabajo maravilloso! Me encantó cómo usaste la paleta de colores. Solo hay un par de detalles en la composición, pero vas por excelente camino ✨',
        profesor: {
            nombre: 'Prof. Elena Art',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwEuvCecKzRiOWzrZ3VLo9Wbn--iyTzNvPjRvpy9RE2H2X7-RDD5O8ppxdCMMUrqinx4n7YkwkFA2NcloboTuoBtNHcW7MTZFW6t1f4RhcivLTxSqU3CPog1c_Ubu0VBunwX34vP0pqtLMPDqrUG5d32FV3gQI03M4GBuAiYZ2435nVaWRzSFCKa6dmv-xdymK2lWyWIsWLNsemGXFs7PcnXTK_tGXMHw2846p6QGtzdcQbqjZjRQE47YcVGTdtddGRDVelggOLd4'
        },
        isOpen: true,
        criterios: [
            {
                id: 'c1',
                nombre: 'Uso del Color',
                pesoPorcentaje: 40,
                puntajeObtenido: 35,
                puntajeMaximo: 40,
                colorTema: 'bg-pastel-yellow',
                comentario: 'Los tonos pasteles armonizan muy bien, pero el contraste podría mejorar.'
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
    },
    {
        id: 't2',
        tituloTarea: 'Tarea 2: Sombreado Básico',
        puntajeTotal: 96,
        maximoTotal: 100,
        feedbackGeneral: 'Gran dominio de las luces y sombras. Has comprendido perfectamente la teoría de volumen. Sigue practicando los degradados suaves con los pinceles texturizados.',
        profesor: {
            nombre: 'Prof. Leo Illustrator',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGb-jONxVh3DSelwYHS53lZbQdK2GrkexTQBkwf6aTKHumKMT30i4Mt1dTX3-byd1CbEZxZBCiuTfiyeCEZt521nKiGZv-v1pACpW1tVuda0vJ9i-gO7SGC2yAg4TuubgEYQddDMH1CuyqrwDroCAtRekF_aJX_i5F1LaObYc7sYePpUTpz-omTEzbo4_UoJ1dqdSSoz71Z3hANo8Grzi_zHencH859h5HoTFTDWhcSE6C1hreHerXju_Fz2go3Ssx9lqnbnR5NM'
        },
        isOpen: false,
        criterios: [
            {
                id: 'c4',
                nombre: 'Volumen y Luces',
                pesoPorcentaje: 50,
                puntajeObtenido: 48,
                puntajeMaximo: 50,
                colorTema: 'bg-pastel-lavender',
                comentario: 'Las esferas tienen excelente profundidad, la luz rebota casi perfecta.'
            },
            {
                id: 'c5',
                nombre: 'Degradados y Textura',
                pesoPorcentaje: 50,
                puntajeObtenido: 48,
                puntajeMaximo: 50,
                colorTema: 'bg-pastel-pink'
            }
        ]
    }
];

export const NotasContainer = () => {
    // Maneja cual layout está abierto (acordeòn principal)
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
                            isExpanded={expandedId === evaluacion.id}
                            onToggle={() => setExpandedId(expandedId === evaluacion.id ? null : evaluacion.id)}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};
