import { useState } from 'react';

export function useLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Simulando llamada real a backend / Supabase
            await new Promise<void>((resolve) => setTimeout(resolve, 1000));
            return { success: true };
        } catch (err) {
            setError("Error al iniciar sesión");
            return { success: false };
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
}
