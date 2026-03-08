-- PASO 1: SEED DE DATOS REALES PARA EL CURSO PROCREATE 2026-01
-- Ejecutar este script en el SQL Editor de Supabase

-- 1. Asegurarse de que exista la tabla inscripciones
CREATE TABLE IF NOT EXISTS public.inscripciones (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    curso_id UUID REFERENCES public.cursos(id) ON DELETE CASCADE NOT NULL,
    estudiante_id UUID REFERENCES public.perfiles(id) ON DELETE CASCADE NOT NULL,
    fecha TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(curso_id, estudiante_id)
);

-- Habilitar RLS para inscripciones
ALTER TABLE public.inscripciones ENABLE ROW LEVEL SECURITY;

-- Políticas para inscripciones
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Estudiantes pueden ver sus propias inscripciones' AND tablename = 'inscripciones') THEN
        CREATE POLICY "Estudiantes pueden ver sus propias inscripciones" ON public.inscripciones
            FOR SELECT USING (auth.uid() = estudiante_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Profesores pueden ver todas las inscripciones' AND tablename = 'inscripciones') THEN
        CREATE POLICY "Profesores pueden ver todas las inscripciones" ON public.inscripciones
            FOR SELECT USING (EXISTS (SELECT 1 FROM public.perfiles WHERE id = auth.uid() AND rol = 'profesor'));
    END IF;
END $$;

-- AUDITORÍA: Asegurar RLS en la tabla cursos
ALTER TABLE public.cursos ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Profesores ven sus propios cursos' AND tablename = 'cursos') THEN
        CREATE POLICY "Profesores ven sus propios cursos" ON public.cursos
            FOR SELECT USING (auth.uid() = profesor_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Estudiantes ven cursos en los que están inscritos' AND tablename = 'cursos') THEN
        CREATE POLICY "Estudiantes ven cursos en los que están inscritos" ON public.cursos
            FOR SELECT USING (
                EXISTS (
                    SELECT 1 FROM public.inscripciones 
                    WHERE inscripciones.curso_id = public.cursos.id 
                    AND inscripciones.estudiante_id = auth.uid()
                )
            );
    END IF;
END $$;

-- 2. Insertar el curso "Procreate 2026-01" asociado al Profesor
DO $$
DECLARE
    v_curso_id UUID;
    v_estudiante_id UUID;
    v_profesor_id UUID;
BEGIN
    -- 2.1. Buscar el ID del profesor en auth.users
    SELECT id INTO v_profesor_id FROM auth.users WHERE email = 'cardozak8@gmail.com' LIMIT 1;

    IF v_profesor_id IS NULL THEN
        RAISE EXCEPTION 'ERROR CRÍTICO: No se encontró el usuario cardozak8@gmail.com en auth.users. ¿Ya te registraste?';
    END IF;

    -- 2.2. Asegurar que tenga un perfil con rol profesor
    INSERT INTO public.perfiles (id, nombre, rol)
    VALUES (v_profesor_id, 'Profesor Administrador', 'profesor')
    ON CONFLICT (id) DO UPDATE SET rol = 'profesor';

    -- 2.3. Insertar o actualizar el curso con el profesor_id
    INSERT INTO public.cursos (titulo, descripcion, profesor_id)
    VALUES ('Procreate 2026-01', 'Aprende ilustración digital desde cero', v_profesor_id)
    ON CONFLICT (id) DO NOTHING 
    RETURNING id INTO v_curso_id;

    -- Si ya existe, nos aseguramos de que el profesor esté asignado
    IF v_curso_id IS NULL THEN
        SELECT id INTO v_curso_id FROM public.cursos WHERE titulo = 'Procreate 2026-01' LIMIT 1;
        UPDATE public.cursos SET profesor_id = v_profesor_id WHERE id = v_curso_id;
    END IF;

    -- 3. Insertar Clases Reales
    INSERT INTO public.clases (curso_id, titulo, descripcion, orden)
    VALUES 
        (v_curso_id, 'Fundamentos', 'Introducción a la interfaz y herramientas básicas de Procreate.', 1),
        (v_curso_id, 'Teoría del Color', 'Como crear paletas armoniosas y el uso del disco cromático.', 2),
        (v_curso_id, 'Sombreado', 'Técnicas de luces y sombras para dar volumen a tus dibujos.', 3)
    ON CONFLICT DO NOTHING;

    -- 4. Matricular al estudiante "Marcelo Calzadilla"
    SELECT id INTO v_estudiante_id FROM public.perfiles WHERE nombre = 'Marcelo Calzadilla' LIMIT 1;

    IF v_estudiante_id IS NOT NULL THEN
        INSERT INTO public.inscripciones (curso_id, estudiante_id)
        VALUES (v_curso_id, v_estudiante_id)
        ON CONFLICT (curso_id, estudiante_id) DO NOTHING;
        
        RAISE NOTICE 'Estudiante Marcelo Calzadilla matriculado con éxito en Procreate 2026-01';
    ELSE
        RAISE NOTICE 'ADVERTENCIA: No se encontró al estudiante Marcelo Calzadilla.';
    END IF;

    IF v_profesor_id IS NOT NULL THEN
        RAISE NOTICE 'Curso asociado al profesor cardozak8@gmail.com';
    ELSE
        RAISE NOTICE 'ADVERTENCIA: No se encontró el usuario cardozak8@gmail.com para asignar como profesor.';
    END IF;

END $$;
