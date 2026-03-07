'use client';

import React, { useState } from 'react';
import { ResetPasswordView } from '@/components/ui/auth/ResetPasswordView';
import { resetPasswordAction } from '../actions/reset-password';

export const ResetPasswordContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('password', password);
        formData.append('confirmPassword', confirmPassword);

        const result = await resetPasswordAction(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        }
    };

    return (
        <ResetPasswordView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            password={password}
            confirmPassword={confirmPassword}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
            error={error}
        />
    );
};
