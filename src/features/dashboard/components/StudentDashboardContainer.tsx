'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { WelcomeBanner } from './ui/WelcomeBanner';
import { MiniCalendarWidget } from './ui/MiniCalendarWidget';
import { QuickActionButton } from './ui/QuickActionButton';
import { HabitTrackerCard } from './ui/HabitTrackerCard';
import { MessagesCard } from './ui/MessagesCard';
import { CircularProgressCard } from './ui/CircularProgressCard';

export const StudentDashboardContainer = () => {
    const router = useRouter();
    // Hardcoded mock data por ahora (En el futuro provendrá de un hook como useStudentDashboard)
    const studentInfo = {
        name: 'Leo',
        nextClassDate: 'Miércoles 18:00',
        progress: 75,
        tasksCompleted: 12,
        tasksTotal: 15,
        attendance: 90
    };

    return (
        <>
            <main className="flex-1 flex flex-col p-6 overflow-y-auto gap-6 relative z-10">
                {/* Top Header Row */}
                <div className="flex flex-col xl:flex-row gap-6 xl:h-48">
                    <WelcomeBanner name={studentInfo.name} nextClassDate={studentInfo.nextClassDate} />
                    <MiniCalendarWidget />
                </div>

                {/* Middle Row: 4 Rounded Icons */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <QuickActionButton
                        icon="video_chat"
                        title="Entrar a clase"
                        containerClassName="bg-pastel-pink hover:bg-pink-200 transition-colors dark:bg-pink-900/30"
                        iconContainerClassName="bg-white dark:bg-slate-700"
                        iconClassName="text-pink-500"
                        titleClassName="text-pink-600 dark:text-pink-300"
                    />
                    <QuickActionButton
                        icon="task"
                        title="Ver tareas"
                        containerClassName="bg-pastel-yellow hover:bg-amber-100 transition-colors dark:bg-amber-900/30"
                        iconContainerClassName="bg-white dark:bg-slate-700"
                        iconClassName="text-amber-500"
                        titleClassName="text-amber-700 dark:text-amber-200"
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
                    />
                </div>

                {/* Bottom Row: Large Blocks */}
                <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6 pb-6">
                    <HabitTrackerCard />
                    <MessagesCard />
                </div>
            </main>

            {/* Right Side: Circular Stack Buttons */}
            <aside className="w-full md:w-44 flex flex-col items-center gap-8 p-4 md:pt-6 relative z-10 border-t md:border-t-0 md:border-l border-pastel-lavender/30 dark:border-primary/10">
                <div className="flex flex-row md:flex-col gap-6 w-full px-2 overflow-x-auto pb-4 md:pb-0">
                    <CircularProgressCard
                        title="Progreso"
                        titleColorClass="text-pink-500"
                        value={`${studentInfo.progress}%`}
                        valueColorClass="text-pink-600"
                        subtitle="Completado"
                        bottomText="Curso de Arte"
                        bottomTextColorClass="text-slate-700 dark:text-pink-100"
                        percentage={studentInfo.progress}
                        circleBaseClass="stroke-pastel-pink"
                        circleProgressClass="stroke-pink-400"
                        containerBorderClass="border-pastel-pink/30"
                    />
                    <CircularProgressCard
                        title="Tareas"
                        titleColorClass="text-amber-500"
                        value={`${studentInfo.tasksCompleted}/${studentInfo.tasksTotal}`}
                        valueColorClass="text-amber-700"
                        subtitle="Entregas"
                        bottomText="Mis Tareas"
                        bottomTextColorClass="text-slate-700 dark:text-amber-100"
                        percentage={Math.round((studentInfo.tasksCompleted / studentInfo.tasksTotal) * 100)}
                        circleBaseClass="stroke-pastel-yellow"
                        circleProgressClass="stroke-amber-400"
                        containerBorderClass="border-pastel-yellow/30"
                    />
                    <CircularProgressCard
                        title="Asistencia"
                        titleColorClass="text-primary"
                        value={`${studentInfo.attendance}%`}
                        valueColorClass="text-primary"
                        subtitle="Asistencia"
                        bottomText="Clases"
                        bottomTextColorClass="text-slate-700 dark:text-indigo-100"
                        percentage={studentInfo.attendance}
                        circleBaseClass="stroke-pastel-lavender"
                        circleProgressClass="stroke-primary"
                        containerBorderClass="border-pastel-lavender/30"
                    />
                </div>
            </aside>
        </>
    );
};
