'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { StudentCard } from './ui/StudentCard';
import { Estudiante } from '../types';

const MOCK_STUDENTS: Estudiante[] = [
    {
        id: '1',
        nombre: 'Leo',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Cx2Ioz2cgnSj-suTehnoIACGc6uTDuF374VbZUhJLVaE7ByUqlzekanb2_15vql0p_T5v_8k2SSAIRjybmldJLjJFgfR4PE9XHF7B0LxJuwr5ymGEUn4pHwFQHeaWut0up8_kw98cbGVDjO02QORoYzrG0XrjIOElWxxGx9u9nUGYkIKLAbyv_jR2gMHf7ZagK1DzS7BDB7xkYXNBrQOFDoh0ACLFVQwGSUr5yrZDh2nU6JIc2VALwttujA9Btue1wW0pAs9OCs',
        curso: 'Diseño Digital II',
        promedio: 85,
        racha: 5
    },
    {
        id: '2',
        nombre: 'Mia',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXJ6cjf3cqsZhUP4uIVsFauzy2LmGvDt5AwDhdabI9trkunNqYoLDFNXj1Hgytgcltsy9mDIFRe2vrmdKtcLEId9NKhMv7hM-Oglh0AmFQ2lIrVELKMukIMzOpfrW7G9yd8NXho7qkzc_jPAL4AmU9c9HURYa5JipSCqH2Y8m6T6GwPIHglNPQa1NHgd9a0a5_NOcBwozQwmC3MW9uOpAMkj0IBUuDV-BgsaAm3trPMI8YQI6VKhRGyvdVQVritDWjB2SBrEpd_4U',
        curso: 'Diseño Digital II',
        promedio: 92,
        racha: 12
    },
    {
        id: '3',
        nombre: 'Sam',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjfCozAsCdf348vy_qKQmEoop2edp2G5-d7hwUyWD1Kp6hPS8mS1GPhQ00XxtnqUPk823Ud_cBU88rUDfndYuDWjsmHfP_EAjLfEorDHXWYpHDqNB97wcM60b5_THe8vNuCIqycGlHJ8zWXdKd_IfXTpHtP3N_rcK3z-mCgyIn-wAVcYIOiRwPf2Dm-7yO_82AMhv-bhqQX89p2HQrvHhCqp01_Q9W3St0j_KFQlFekIqk566mOEkiQRFL-TfNPaOnWDgk5BABas',
        curso: 'Diseño Digital II',
        promedio: 78,
        racha: 2
    }
];

const cardColors = ['bg-pastel-lavender', 'bg-pastel-pink', 'bg-pastel-yellow'];

export const StudentsDirectoryContainer = () => {
    const router = useRouter();

    return (
        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-white/50 dark:bg-background-dark/50 pb-24 relative z-10 w-full flex flex-col items-center">
            <header className="mb-10 space-y-6 w-full max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-primary drop-shadow-[0_0_10px_rgba(153,71,235,0.4)] text-center font-display">
                    Mis Estudiantes
                </h1>
                <div className="relative max-w-md mx-auto">
                    <input
                        className="w-full py-4 px-6 rounded-full border border-pastel-lavender focus:ring-2 focus:ring-primary focus:border-primary bg-white shadow-sm transition-all text-sm outline-none"
                        placeholder="Buscar por nombre..."
                        type="text"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
                        <span className="material-symbols-outlined text-xl">search</span>
                    </div>
                </div>
            </header>

            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {MOCK_STUDENTS.map((student, index) => (
                        <StudentCard
                            key={student.id}
                            estudiante={student}
                            colorBase={cardColors[index % cardColors.length]}
                            onClick={() => router.push(`/profesor/estudiantes/${student.id}`)}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};
