'use server'

import { createClient } from '@/lib/supabase/server'
import { Clase, Contenido } from '../types'

export async function getStudentEnrollments(estudianteId: string) {
    const supabase = await createClient()

    try {
        // Obtenemos los cursos en los que el estudiante está inscrito
        const { data, error } = await supabase
            .from('inscripciones')
            .select(`
                curso:cursos (
                    id,
                    titulo,
                    descripcion,
                    clases (
                        id,
                        titulo,
                        descripcion,
                        orden,
                        video_url,
                        materiales (
                            id,
                            tipo,
                            texto,
                            archivo_url
                        ),
                        tareas (
                            id,
                            titulo,
                            descripcion
                        )
                    )
                )
            `)
            .eq('estudiante_id', estudianteId)

        if (error) throw error

        if (!data || data.length === 0) return null

        // Mapeamos el primer curso encontrado (asumiendo que la vista es para un curso específico)
        const cursoData = data[0].curso as any

        if (!cursoData) return null

        // Mapeamos las clases al formato que espera la UI (tipo Clase)
        const clases: Clase[] = cursoData.clases
            .sort((a: any, b: any) => a.orden - b.orden)
            .map((c: any, index: number) => {
                const contenidos: Contenido[] = []

                // Agregar descripción como Objetivo si existe
                if (c.descripcion) {
                    contenidos.push({
                        type: 'Objetivo',
                        text: c.descripcion
                    })
                }

                // Mapear materiales
                c.materiales?.forEach((m: any) => {
                    contenidos.push({
                        type: m.tipo === 'descargable' ? 'Material' : 'Contenido',
                        title: m.tipo === 'descargable' ? 'Recurso' : undefined,
                        text: m.texto || 'Archivo adjunto'
                    })
                })

                // Mapear tareas
                c.tareas?.forEach((t: any) => {
                    contenidos.push({
                        type: 'Tarea',
                        text: t.titulo
                    })
                })

                return {
                    id: c.id,
                    title: c.titulo,
                    isOpen: index === 0, // Abrir la primera por defecto
                    isAvailable: true,
                    summary: c.descripcion || '',
                    duration: 'N/A', // O podrías guardarlo en DB
                    videoThumb: '', // O podrías guardarlo en DB
                    contenidos
                }
            })

        return {
            cursoId: cursoData.id,
            titulo: cursoData.titulo,
            descripcion: cursoData.descripcion,
            clases
        }

    } catch (error) {
        console.error('Error fetching student course:', error)
        return null
    }
}
