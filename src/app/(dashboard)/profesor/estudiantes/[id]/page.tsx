import React from 'react';
import { StudentManagementContainer } from '@/features/estudiantes-profesor/components/StudentManagementContainer';

type Props = {
    params: {
        id: string;
    };
};

export default function StudentProfilePage({ params }: Props) {
    return <StudentManagementContainer studentId={params.id} />;
}
