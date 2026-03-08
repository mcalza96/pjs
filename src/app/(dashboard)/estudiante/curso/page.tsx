import React from 'react';
import { CourseContainer } from '@/features/courses/components/CourseContainer';
import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { getStudentEnrollments } from '@/features/courses/actions/get-courses';

export const metadata: Metadata = {
    title: 'Malla Curricular | Design School',
    description: 'Temario y clases del curso de ilustración en Procreate.',
};

export default async function CursoPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Por favor, inicia sesión para ver tus cursos.</p>
            </div>
        );
    }

    const courseData = await getStudentEnrollments(user.id);

    return (
        <CourseContainer
            initialClases={courseData?.clases}
            courseTitle={courseData?.titulo}
            courseDescription={courseData?.descripcion}
        />
    );
}
