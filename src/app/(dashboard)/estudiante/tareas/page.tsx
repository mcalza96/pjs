import { TaskListContainer } from '@/features/tareas/components/TaskListContainer';

export const metadata = {
    title: 'Mis Tareas | Plataforma Procreate',
    description: 'Gestiona tus asignaciones y entregas de tu curso de Procreate.',
};

export default function TareasPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Mis Tareas</h1>
                <p className="mt-2 text-zinc-500">
                    Revisa tus asignaciones pendientes, sube tus archivos .procreate o tus exportaciones finales.
                </p>
            </div>

            <main>
                <TaskListContainer />
            </main>
        </div>
    );
}
