-- PROCREATE DATABASE SCHEMA
-- Esquema completo para plataforma educativa

-- 1. EXTENSIONS
create extension if not exists "uuid-ossp";

-- 2. TABLES

-- Profiles table (Extends auth.users)
create table public.perfiles (
  id uuid references auth.users on delete cascade not null primary key,
  nombre text not null,
  avatar_url text,
  rol text check (rol in ('estudiante', 'profesor', 'padre')) not null,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Familiares (Relation between parent and student)
create table public.familiares (
  id uuid default uuid_generate_v4() primary key,
  padre_id uuid references public.perfiles(id) on delete cascade not null,
  estudiante_id uuid references public.perfiles(id) on delete cascade not null,
  parentesco text,
  unique(padre_id, estudiante_id)
);

-- Cursos
create table public.cursos (
  id uuid default uuid_generate_v4() primary key,
  titulo text not null,
  descripcion text,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null,
  profesor_id uuid references public.perfiles(id) -- Opcional: El profesor que creó el curso
);

-- Clases
create table public.clases (
  id uuid default uuid_generate_v4() primary key,
  curso_id uuid references public.cursos(id) on delete cascade not null,
  titulo text not null,
  descripcion text,
  orden integer default 0,
  video_url text,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Materiales
create table public.materiales (
  id uuid default uuid_generate_v4() primary key,
  clase_id uuid references public.clases(id) on delete cascade not null,
  tipo text check (tipo in ('objetivo', 'contenido', 'descargable')) not null,
  texto text,
  archivo_url text,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tareas
create table public.tareas (
  id uuid default uuid_generate_v4() primary key,
  clase_id uuid references public.clases(id) on delete cascade not null,
  titulo text not null,
  descripcion text,
  fecha_limite timestamp with time zone,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Entregas
create table public.entregas (
  id uuid default uuid_generate_v4() primary key,
  tarea_id uuid references public.tareas(id) on delete cascade not null,
  estudiante_id uuid references public.perfiles(id) on delete cascade not null,
  archivo_url text not null,
  fecha_entrega timestamp with time zone default timezone('utc'::text, now()) not null,
  comentarios_estudiante text
);

-- Evaluaciones (Notas finales de entregas)
create table public.evaluaciones (
  id uuid default uuid_generate_v4() primary key,
  entrega_id uuid references public.entregas(id) on delete cascade not null,
  profesor_id uuid references public.perfiles(id) on delete cascade not null,
  nota_final numeric(4,2),
  feedback_general text,
  creada_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Criterios de Evaluación
create table public.criterios_evaluacion (
  id uuid default uuid_generate_v4() primary key,
  evaluacion_id uuid references public.evaluaciones(id) on delete cascade not null,
  criterio text not null,
  puntaje numeric(4,2),
  maximo numeric(4,2),
  feedback text
);

-- Prácticas Diarias
create table public.practicas_diarias (
  id uuid default uuid_generate_v4() primary key,
  estudiante_id uuid references public.perfiles(id) on delete cascade not null,
  fecha date default current_date not null,
  archivo_url text not null,
  comentarios text,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Asistencias
create table public.asistencias (
  id uuid default uuid_generate_v4() primary key,
  clase_id uuid references public.clases(id) on delete cascade not null,
  estudiante_id uuid references public.perfiles(id) on delete cascade not null,
  estado text check (estado in ('presente', 'ausente', 'tarde', 'justificado')) not null,
  fecha date default current_date not null
);

-- Mensajes de Chat (Estudiante -> Remitente)
create table public.mensajes_chat (
  id uuid default uuid_generate_v4() primary key,
  estudiante_id uuid references public.perfiles(id) on delete cascade not null, -- Chat de este estudiante
  remitente_id uuid references public.perfiles(id) on delete cascade not null,
  contenido text not null,
  creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. ROW LEVEL SECURITY (RLS)

alter table public.perfiles enable row level security;
alter table public.familiares enable row level security;
alter table public.cursos enable row level security;
alter table public.clases enable row level security;
alter table public.materiales enable row level security;
alter table public.tareas enable row level security;
alter table public.entregas enable row level security;
alter table public.evaluaciones enable row level security;
alter table public.criterios_evaluacion enable row level security;
alter table public.practicas_diarias enable row level security;
alter table public.asistencias enable row level security;
alter table public.mensajes_chat enable row level security;

-- Policies for 'perfiles'
create policy "Perfiles visibles para todos los autenticados" on public.perfiles
  for select using (auth.role() = 'authenticated');

create policy "Usuarios pueden editar su propio perfil" on public.perfiles
  for update using (auth.uid() = id);

-- Policies for 'entregas'
create policy "Estudiantes ven sus propias entregas" on public.entregas
  for select using (auth.uid() = estudiante_id);

create policy "Profesores ven todas las entregas" on public.entregas
  for select using (
    exists (select 1 from public.perfiles where id = auth.uid() and rol = 'profesor')
  );

create policy "Estudiantes pueden subir entregas" on public.entregas
  for insert with check (auth.uid() = estudiante_id);

-- Policies for 'evaluaciones'
create policy "Estudiantes ven sus propias evaluaciones" on public.evaluaciones
  for select using (
    exists (
      select 1 from public.entregas 
      where entregas.id = evaluaciones.entrega_id 
      and entregas.estudiante_id = auth.uid()
    )
  );

create policy "Profesores pueden gestionar evaluaciones" on public.evaluaciones
  for all using (
    exists (select 1 from public.perfiles where id = auth.uid() and rol = 'profesor')
  );

-- Policies for 'familiares' (Padres ven datos de sus hijos)
-- Ej: Si eres padre, puedes ver entregas de tus hijos
create policy "Padres ven entregas de sus hijos" on public.entregas
  for select using (
    exists (
      select 1 from public.familiares 
      where padre_id = auth.uid() 
      and estudiante_id = entregas.estudiante_id
    )
  );

-- (Se pueden añadir más políticas granulares según sea necesario)
