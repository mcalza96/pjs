'use client';

import React, { useState } from 'react';
import { ForgotPasswordView } from '@/components/ui/auth/ForgotPasswordView';
import { forgotPasswordAction } from '../actions/forgot-password';

export const ForgotPasswordContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('email', email);

        const result = await forgotPasswordAction(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        } else {
            setSuccess(true);
            setIsLoading(false);
        }
    };

    return (
        <ForgotPasswordView
            onSubmit={handleSubmit}
            isLoading={isLoading}
            email={email}
            onEmailChange={(e) => setEmail(e.target.value)}
            error={error}
            success={success}
        />
    );
};
