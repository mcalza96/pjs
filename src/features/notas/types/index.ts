export interface CriterioRubrica {
    id: string;
    nombre: string;
    pesoPorcentaje: number;
    puntajeObtenido: number;
    puntajeMaximo: number;
    colorTema: string;
    comentario?: string;
}

export interface EvaluacionTarea {
    id: string;
    tituloTarea: string;
    puntajeTotal: number;
    maximoTotal: number;
    feedbackGeneral: string;
    profesor: {
        nombre: string;
        avatar: string;
    };
    isOpen: boolean;
    criterios: CriterioRubrica[];
}
