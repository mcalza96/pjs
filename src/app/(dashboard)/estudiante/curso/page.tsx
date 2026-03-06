import React from 'react';
import { CourseContainer } from '@/features/curso/components/CourseContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Malla Curricular | Design School',
    description: 'Temario y clases del curso de ilustración en Procreate.',
};

export default function CursoPage() {
    return <CourseContainer />;
}
