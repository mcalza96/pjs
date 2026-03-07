'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateCourseView } from './CreateCourseView';
import { createCourseAction } from '../actions/courses';

export const CreateCourseContainer = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaInicio] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('fecha_inicio', fechaInicio);

        const result = await createCourseAction(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        } else {
            // La redirección es manejada por el Server Action
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <CreateCourseView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            titulo={titulo}
            descripcion={descripcion}
            fechaInicio={fechaInicio}
            onTituloChange={(e) => setTitulo(e.target.value)}
            onDescripcionChange={(e) => setDescripcion(e.target.value)}
            onFechaInicioChange={(e) => fechaInicio(e.target.value)}
            error={error}
            onBack={handleBack}
        />
    );
};
