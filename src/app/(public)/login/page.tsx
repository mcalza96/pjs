import React from 'react';
import { LoginContainer } from '@/features/auth/components/LoginContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Iniciar Sesión | Design School',
    description: 'Ingresa a tu cuenta para continuar con tus clases de Procreate.',
};

export default function LoginPage() {
    return <LoginContainer />;
}
