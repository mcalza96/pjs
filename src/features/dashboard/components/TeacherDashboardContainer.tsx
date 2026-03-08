'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { WelcomeBanner } from '@/features/dashboard/components/ui/WelcomeBanner';
import { ActionButton } from '@/components/ui/ActionButton';
import { MessagesCard } from '@/features/dashboard/components/ui/MessagesCard';
import { CircularProgressCard } from '@/components/ui/CircularProgressCard';

export const TeacherDashboardContainer = () => {
    const router = useRouter();

    const teacherMetrics = {
        name: 'Prof. Ana',
        nextClassDate: 'Lunes 10:00 (Arte Avanzado)',
        tareasPorCalificar: 14,
        cursoProgreso: 60
    };

    return (
        <>
            <main className="flex-1 flex flex-col p-6 overflow-y-auto gap-6 relative z-10">
                <WelcomeBanner name={teacherMetrics.name} nextClassDate={teacherMetrics.nextClassDate} />

                <div className="flex flex-col xl:flex-row gap-6 flex-1">
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ActionButton
                                icon="video_chat"
                                title="Entrar a clase"
                                containerClassName="bg-pastel-pink hover:bg-pink-200 transition-colors dark:bg-pink-900/30"
                                iconContainerClassName="bg-white dark:bg-slate-700"
                                iconClassName="text-pink-500"
                                titleClassName="text-pink-600 dark:text-pink-300"
                                onClick={() => router.push('/profesor/clases')}
                            />
                            <ActionButton
                                icon="play_circle"
                                title="Entrar Curso"
                                containerClassName="bg-pastel-lavender hover:bg-indigo-100 transition-colors dark:bg-indigo-900/30"
                                iconContainerClassName="bg-white dark:bg-slate-700"
                                iconClassName="text-primary"
                                titleClassName="text-primary dark:text-indigo-200"
                                onClick={() => router.push('/profesor/curso')}
                            />
                            <ActionButton
                                icon="group"
                                title="Mis Estudiantes"
                                containerClassName="bg-blue-50 hover:bg-blue-100 transition-colors dark:bg-blue-900/30"
                                iconContainerClassName="bg-white dark:bg-slate-700"
                                iconClassName="text-blue-400"
                                titleClassName="text-blue-600 dark:text-blue-200"
                                onClick={() => router.push('/profesor/estudiantes')}
                            />
                        </div>

                        <div className="flex-1 flex flex-col pb-6">
                            <MessagesCard />
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Side: Circular Stack Buttons */}
            <aside className="w-full md:w-44 flex flex-col items-center gap-8 p-4 md:pt-6 relative z-10 border-t md:border-t-0 md:border-l border-pastel-lavender/30 dark:border-primary/10">
                <div className="flex flex-row md:flex-col gap-6 w-full px-2 overflow-x-auto pb-4 md:pb-0">
                    <CircularProgressCard
                        title="Tareas"
                        titleColorClass="text-amber-500"
                        value={`${teacherMetrics.tareasPorCalificar}`}
                        valueColorClass="text-amber-700"
                        subtitle="Pendientes"
                        bottomText="Por Calificar"
                        bottomTextColorClass="text-slate-700 dark:text-amber-100"
                        percentage={Math.min(100, (teacherMetrics.tareasPorCalificar / 20) * 100)}
                        circleBaseClass="stroke-pastel-yellow"
                        circleProgressClass="stroke-amber-400"
                        containerBorderClass="border-pastel-yellow/30"
                    />
                    <CircularProgressCard
                        title="Progreso"
                        titleColorClass="text-pink-500"
                        value={`${teacherMetrics.cursoProgreso}%`}
                        valueColorClass="text-pink-600"
                        subtitle="General"
                        bottomText="Del Curso"
                        bottomTextColorClass="text-slate-700 dark:text-pink-100"
                        percentage={teacherMetrics.cursoProgreso}
                        circleBaseClass="stroke-pastel-pink"
                        circleProgressClass="stroke-pink-400"
                        containerBorderClass="border-pastel-pink/30"
                    />
                </div>
            </aside>
        </>
    );
};
