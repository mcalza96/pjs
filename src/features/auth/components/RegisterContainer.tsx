'use client';

import React, { useState } from 'react';
import { RegisterView } from '@/components/ui/auth/RegisterView';
import { registerAction } from '../actions/auth';

export const RegisterContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState<'estudiante' | 'profesor' | 'padre'>('estudiante');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('rol', rol);

        const result = await registerAction(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        }
        // Redirect es manejado por el Server Action
    };

    return (
        <RegisterView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            nombre={nombre}
            email={email}
            password={password}
            rol={rol}
            onNombreChange={(e) => setNombre(e.target.value)}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onRolChange={(newRol) => setRol(newRol)}
            error={error}
        />
    );
};
