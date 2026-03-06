export type ContenidoType = 'Objetivo' | 'Contenido' | 'Material' | 'Tarea';

export interface Contenido {
    type: ContenidoType;
    text: string;
}

export interface Clase {
    id: number;
    title: string;
    isOpen: boolean;
    isAvailable: boolean;
    contenidos: Contenido[];
    summary: string;
    duration: string;
    videoThumb: string;
}
