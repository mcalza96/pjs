'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { WelcomeBanner } from './ui/WelcomeBanner';
import { ActionButton } from '@/components/ui/ActionButton';
import { MessagesCard } from './ui/MessagesCard';
import { CircularProgressCard } from '@/components/ui/CircularProgressCard';
import { DailyPracticeWidget } from './ui/DailyPracticeWidget';

export const StudentDashboardContainer = () => {
    const router = useRouter();
    // Hardcoded mock data por ahora (En el futuro provendrá de un hook como useStudentDashboard)
    const studentMetrics = {
        name: 'Leo', // mantenido para WelcomeBanner
        nextClassDate: 'Miércoles 18:00', // mantenido para WelcomeBanner
        notaPromedio: { actual: 63, maximo: 70 }, // Equivale a un 6.3 de un máximo de 7.0
        tareas: { completadas: 12, total: 15 },
        progresoCurso: { clasesRealizadas: 8, totales: 24 },
        trackerPractica: { semanasMetaCumplida: 3, semanasCursadas: 4 } // Ignora semanas futuras
    };

    return (
        <>
            <main className="flex-1 flex flex-col p-6 overflow-y-auto gap-6 relative z-10">
                {/* Top Header Row */}
                <WelcomeBanner name={studentMetrics.name} nextClassDate={studentMetrics.nextClassDate} />

                <div className="flex flex-col xl:flex-row gap-6 flex-1">
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Rounded Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <QuickActionButton
                                icon="video_chat"
                                title="Entrar a clase"
                                containerClassName="bg-pastel-pink hover:bg-pink-200 transition-colors dark:bg-pink-900/30"
                                iconContainerClassName="bg-white dark:bg-slate-700"
                                iconClassName="text-pink-500"
                                titleClassName="text-pink-600 dark:text-pink-300"
                            />
                            <QuickActionButton
                                icon="play_circle"
                                title="Entrar Curso"
                                containerClassName="bg-pastel-lavender hover:bg-indigo-100 transition-colors dark:bg-indigo-900/30"
                                iconContainerClassName="bg-white dark:bg-slate-700"
                                iconClassName="text-primary"
                                titleClassName="text-primary dark:text-indigo-200"
                                onClick={() => router.push('/estudiante/curso')}
                            />
                            <QuickActionButton
                                icon="sticky_note_2"
                                title="Notas"
                                containerClassName="bg-blue-50 hover:bg-blue-100 transition-colors dark:bg-blue-900/30"
                                iconContainerClassName="bg-white dark:bg-slate-700"
                                iconClassName="text-blue-400"
                                titleClassName="text-blue-600 dark:text-blue-200"
                                onClick={() => router.push('/estudiante/notas')}
                            />
                        </div>

                        {/* Bottom Row: Messages */}
                        <div className="flex-1 flex flex-col pb-6">
                            <MessagesCard />
                        </div>
                    </div>

                    {/* Right Side: Daily Practice Widget */}
                    <div className="w-full xl:w-[450px] flex-shrink-0 flex justify-center pb-6">
                        <DailyPracticeWidget onSavePractice={() => alert('¡Práctica subida con éxito!')} />
                    </div>
                </div>
            </main>

            {/* Right Side: Circular Stack Buttons */}
            <aside className="w-full md:w-44 flex flex-col items-center gap-8 p-4 md:pt-6 relative z-10 border-t md:border-t-0 md:border-l border-pastel-lavender/30 dark:border-primary/10">
                <div className="flex flex-row md:flex-col gap-6 w-full px-2 overflow-x-auto pb-4 md:pb-0">
                    <CircularProgressCard
                        title="Promedio"
                        titleColorClass="text-primary"
                        value={(studentMetrics.notaPromedio.actual / 10).toFixed(1)}
                        valueColorClass="text-primary"
                        subtitle="Ponderación"
                        bottomText="Nota Actual"
                        bottomTextColorClass="text-slate-700 dark:text-indigo-100"
                        percentage={(studentMetrics.notaPromedio.actual / studentMetrics.notaPromedio.maximo) * 100}
                        circleBaseClass="stroke-pastel-lavender"
                        circleProgressClass="stroke-primary"
                        containerBorderClass="border-pastel-lavender/30"
                    />
                    <CircularProgressCard
                        title="Tareas"
                        titleColorClass="text-amber-500"
                        value={`${studentMetrics.tareas.completadas}/${studentMetrics.tareas.total}`}
                        valueColorClass="text-amber-700"
                        subtitle="Semestre"
                        bottomText="Avance Tareas"
                        bottomTextColorClass="text-slate-700 dark:text-amber-100"
                        percentage={(studentMetrics.tareas.completadas / studentMetrics.tareas.total) * 100}
                        circleBaseClass="stroke-pastel-yellow"
                        circleProgressClass="stroke-amber-400"
                        containerBorderClass="border-pastel-yellow/30"
                    />
                    <CircularProgressCard
                        title="Progreso"
                        titleColorClass="text-pink-500"
                        value={`${studentMetrics.progresoCurso.clasesRealizadas}/${studentMetrics.progresoCurso.totales}`}
                        valueColorClass="text-pink-600"
                        subtitle="Realizado"
                        bottomText="Clases"
                        bottomTextColorClass="text-slate-700 dark:text-pink-100"
                        percentage={(studentMetrics.progresoCurso.clasesRealizadas / studentMetrics.progresoCurso.totales) * 100}
                        circleBaseClass="stroke-pastel-pink"
                        circleProgressClass="stroke-pink-400"
                        containerBorderClass="border-pastel-pink/30"
                    />
                    <CircularProgressCard
                        title="Práctica"
                        titleColorClass="text-blue-500"
                        value={`${studentMetrics.trackerPractica.semanasMetaCumplida}/${studentMetrics.trackerPractica.semanasCursadas}`}
                        valueColorClass="text-blue-500"
                        subtitle="Semanas"
                        bottomText="Metas Cumplidas"
                        bottomTextColorClass="text-slate-700 dark:text-blue-100"
                        percentage={(studentMetrics.trackerPractica.semanasMetaCumplida / studentMetrics.trackerPractica.semanasCursadas) * 100}
                        circleBaseClass="stroke-blue-100 dark:stroke-slate-800"
                        circleProgressClass="stroke-blue-400"
                        containerBorderClass="border-blue-100 dark:border-blue-800/20"
                    />
                </div>
            </aside>
        </>
    );
};
