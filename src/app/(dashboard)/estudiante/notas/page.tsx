import React from 'react';
import { NotasContainer } from '@/features/notas/components/NotasContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Notas y Feedback | Design School',
    description: 'Revisa tus calificaciones y feedback de los instructores.',
};

export default function NotasPage() {
    return <NotasContainer />;
}
