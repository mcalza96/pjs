import React from 'react';
import { StudentDashboardContainer } from '@/features/dashboard/components/StudentDashboardContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard Estudiante | Design School',
    description: 'Resumen de progreso, tareas y clases para estudiantes de Procreate.',
};

export default function EstudianteDashboardPage() {
    return <StudentDashboardContainer />;
}
