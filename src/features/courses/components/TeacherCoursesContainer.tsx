'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TeacherCoursesView, CourseCard } from './TeacherCoursesView';

import { getTeacherCourses } from '../actions/courses';

export const TeacherCoursesContainer = () => {
    const router = useRouter();
    const [courses, setCourses] = useState<CourseCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getTeacherCourses();
                setCourses(data);
            } catch (err) {
                setError('No se pudieron cargar los cursos. Intenta de nuevo.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleCreateCourse = () => {
        router.push('/profesor/crear-curso');
    };

    const handleCourseClick = (id: string) => {
        // Aquí podrías redirigir a los detalles de un curso específico
        console.log(`Abriendo curso ${id}`);
        router.push('/profesor');
    };

    return (
        <TeacherCoursesView
            courses={courses}
            onCreateCourse={handleCreateCourse}
            onCourseClick={handleCourseClick}
        />
    );
};
