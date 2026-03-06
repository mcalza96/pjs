import { useState, useEffect } from 'react';
import { Tarea } from '../types';

export function useTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchTareas = async () => {
      try {
        setIsLoading(true);
        // Simulación de latencia de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockData: Tarea[] = [
          { id: '1', titulo: 'Boceto de Personaje Fantástico', fecha_limite: '10 Nov, 2026', is_completada: false },
          { id: '2', titulo: 'Práctica de Pinceles de Acuarela', fecha_limite: '14 Nov, 2026', is_completada: false },
          { id: '3', titulo: 'Teoría del Color: Retrato', fecha_limite: '21 Nov, 2026', is_completada: false },
        ];

        if (mounted) setTareas(mockData);
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Ocurrió un error inesperado al cargar las tareas'));
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    fetchTareas();

    return () => {
      mounted = false;
    };
  }, []);

  return { tareas, isLoading, error };
}
