'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function loginAction(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    // Obtener el perfil para saber a dónde redirigir
    const { data: profile } = await supabase
        .from('perfiles')
        .select('rol')
        .eq('id', data.user.id)
        .single()

    if (profile) {
        const rolePath = `/${profile.rol}`
        revalidatePath('/', 'layout')
        redirect(rolePath)
    }

    // Si no tiene perfil (no debería pasar), rura por defecto
    redirect('/')
}

export async function registerAction(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const nombre = formData.get('nombre') as string
    const rol = formData.get('rol') as 'estudiante' | 'profesor' | 'padre'

    const supabase = await createClient()

    // 1. Sign Up en Auth
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                nombre,
                rol,
            },
        },
    })

    if (error) {
        return { error: error.message }
    }

    if (data.user) {
        // 2. Insertar en public.perfiles
        // Nota: Si usas Triggers en la DB esto podría ser redundante, 
        // pero aquí lo hacemos explícito como pidió el usuario.
        const { error: profileError } = await supabase.from('perfiles').insert({
            id: data.user.id,
            nombre,
            rol,
        })

        if (profileError) {
            return { error: profileError.message }
        }

        revalidatePath('/', 'layout')
        redirect(`/${rol}`)
    }

    return { success: true }
}

export async function logoutAction() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/login')
}
