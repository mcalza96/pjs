'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function forgotPasswordAction(formData: FormData) {
    const email = formData.get('email') as string
    const supabase = await createClient()
    const origin = (await headers()).get('origin')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/auth/confirmar-password`,
    })

    if (error) {
        return { error: error.message }
    }

    return { success: true }
}
