'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { StudentProfileHeader } from './ui/StudentProfileHeader';
import { AttendanceTracker } from './ui/AttendanceTracker';
import { PracticeGoalTracker } from './ui/PracticeGoalTracker';
import { FamilyChat } from './ui/FamilyChat';
import { Asistencia, Mensaje } from '../types';

interface StudentManagementContainerProps {
    studentId: string;
}

const MOCK_ASISTENCIA: Asistencia = {
    total: 10,
    asistidas: 8,
    detalle: [
        'attended', 'attended', 'attended', 'attended', 'attended',
        'attended', 'attended', 'attended', 'missed', 'upcoming'
    ]
};

const MOCK_MENSAJES: Mensaje[] = [
    {
        id: 'm1',
        remitente: 'Profesor',
        rol: 'profesor',
        texto: '¡Hola! Leo hizo un excelente trabajo hoy con su proyecto de paletas de colores.',
        hora: '10:30 AM'
    },
    {
        id: 'm2',
        remitente: 'Papá',
        rol: 'padre',
        texto: '¡Muchas gracias! Estaba muy emocionado practicando en casa el fin de semana.',
        hora: '10:45 AM'
    },
    {
        id: 'm3',
        remitente: 'Leo',
        rol: 'estudiante',
        texto: '¡Mañana llevo mi cuaderno nuevo para el boceto!',
        hora: '11:02 AM'
    }
];

export const StudentManagementContainer: React.FC<StudentManagementContainerProps> = ({ studentId }) => {
    const router = useRouter();

    // En un caso real, buscaríamos al estudiante por studentId
    const student = {
        nombre: 'Leo',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Cx2Ioz2cgnSj-suTehnoIACGc6uTDuF374VbZUhJLVaE7ByUqlzekanb2_15vql0p_T5v_8k2SSAIRjybmldJLjJFgfR4PE9XHF7B0LxJuwr5ymGEUn4pHwFQHeaWut0up8_kw98cbGVDjO02QORoYzrG0XrjIOElWxxGx9u9nUGYkIKLAbyv_jR2gMHf7ZagK1DzS7BDB7xkYXNBrQOFDoh0ACLFVQwGSUr5yrZDh2nU6JIc2VALwttujA9Btue1wW0pAs9OCs'
    };

    return (
        <main className="flex-1 overflow-y-auto p-4 md:p-10 bg-white/50 dark:bg-background-dark/50 pb-24 relative z-10 w-full flex flex-col items-center">
            <div className="w-full max-w-6xl">
                <StudentProfileHeader
                    nombre={student.nombre}
                    avatar={student.avatar}
                    onBack={() => router.push('/profesor/estudiantes')}
                    onEvaluar={() => router.push('/profesor/notas')}
                />

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-8">
                    {/* Left Column */}
                    <div className="xl:col-span-5 space-y-6 flex flex-col">
                        <AttendanceTracker asistencia={MOCK_ASISTENCIA} />
                        <PracticeGoalTracker metaCumplida={3} />
                    </div>

                    {/* Right Column */}
                    <div className="xl:col-span-7 h-full">
                        <FamilyChat mensajes={MOCK_MENSAJES} studentName={student.nombre} />
                    </div>
                </div>
            </div>
        </main>
    );
};
