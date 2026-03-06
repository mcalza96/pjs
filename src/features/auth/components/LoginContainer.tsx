'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogin } from '../hooks/useLogin';
import { LoginView } from '@/components/ui/auth/LoginView';

export const LoginContainer = () => {
    const router = useRouter();
    const { login, isLoading, error } = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await login();

        if (result.success) {
            router.push('/estudiante/tareas');
        }
    };

    return (
        <LoginView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            email={email}
            password={password}
            remember={remember}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onRememberChange={(e) => setRemember(e.target.checked)}
            error={error}
        />
    );
};
