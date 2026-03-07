import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet: { name: string; value: string; options: any }[]) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // refrescar la sesión si ha expirado
    const {
        data: { user },
    } = await supabase.auth.getUser()

    const url = request.nextUrl.clone()

    // Redirección para rutas login/registro si ya está autenticado
    const authPaths = ['/login', '/registro']
    const isAuthPath = authPaths.some((path) =>
        request.nextUrl.pathname.startsWith(path)
    )

    if (isAuthPath && user) {
        // Consultar el rol para redirigir al dashboard correcto
        const { data: profile } = await supabase
            .from('perfiles')
            .select('rol')
            .eq('id', user.id)
            .single()

        if (profile) {
            url.pathname = `/${profile.rol}`
            return NextResponse.redirect(url)
        }
    }

    // Protección de rutas protegidas
    const protectedPaths = ['/estudiante', '/profesor', '/padre']
    const isProtectedPath = protectedPaths.some((path) =>
        request.nextUrl.pathname.startsWith(path)
    )

    if (isProtectedPath && !user) {
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    return supabaseResponse
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
