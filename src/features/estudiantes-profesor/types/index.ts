export interface Estudiante {
    id: string;
    nombre: string;
    avatar: string;
    curso: string;
    promedio: number;
    racha: number;
}

export interface Asistencia {
    total: number;
    asistidas: number;
    detalle: ('attended' | 'missed' | 'upcoming')[];
}

export interface Mensaje {
    id: string;
    remitente: string;
    rol: 'profesor' | 'padre' | 'estudiante';
    texto: string;
    hora: string;
}
