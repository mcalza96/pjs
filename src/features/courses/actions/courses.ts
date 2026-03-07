'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createCourseAction(formData: FormData) {
    const titulo = formData.get('titulo') as string
    const descripcion = formData.get('descripcion') as string
    const fecha_inicio = formData.get('fecha_inicio') as string
    const imagen_url = formData.get('imagen_url') as string || null

    const supabase = await createClient()

    // Obtener el ID del usuario actual (el profesor)
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return { error: 'No estás autenticado como profesor.' }
    }

    // Insertar el curso
    const { data, error } = await supabase
        .from('cursos')
        .insert({
            titulo,
            descripcion,
            fecha_inicio,
            imagen_url,
            profesor_id: user.id
        })
        .select()
        .single()

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/profesor/mis-cursos')
    redirect('/profesor/mis-cursos')
}

export async function getTeacherCourses() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return []

    const { data, error } = await supabase
        .from('cursos')
        .select(`
            *,
            estudiantes:familiares(count)
        `)
        .eq('profesor_id', user.id)
        .order('creado_en', { ascending: false })

    if (error) {
        console.error('Error fetching courses:', error)
        return []
    }

    return data.map(course => ({
        id: course.id,
        titulo: course.titulo,
        descripcion: course.descripcion,
        imagen_url: course.imagen_url,
        estudiantes_count: course.estudiantes?.[0]?.count || 0
    }))
}
