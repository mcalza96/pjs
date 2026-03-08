import React from 'react';
import { Estudiante } from '../../types';
import { ProfileCard } from '@/components/ui/ProfileCard';

interface StudentCardProps {
    estudiante: Estudiante;
    colorBase: string;
    onClick: () => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({ estudiante, colorBase, onClick }) => {
    const tags = [
        <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full">
            Promedio: {estudiante.promedio}/100
        </span>,
        <span className="px-4 py-1.5 bg-pastel-yellow text-amber-700 text-xs font-bold rounded-full">
            Racha: 🔥 {estudiante.racha} Días
        </span>
    ];

    return (
        <ProfileCard
            colorBase={colorBase}
            avatar={estudiante.avatar}
            name={estudiante.nombre}
            course={estudiante.curso}
            tags={tags}
            buttonText="Ver Perfil"
            onButtonClick={onClick}
        />
    );
};
