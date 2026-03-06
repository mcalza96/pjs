# Pastel Jam School - Plataforma de Procreate

Este proyecto es una plataforma educativa modular construida con Next.js, TypeScript y Supabase, siguiendo el patrón de **Componentes Inteligentes y Tontos** (Smart/Dumb) y arquitectura basada en **Features**.

## Estructura del Proyecto

- `src/app/`: Enrutamiento y layouts básicos (App Router).
- `src/components/ui/`: Componentes **Dumb** (reutilizables, sin lógica de negocio).
- `src/features/`: Módulos por funcionalidad. Contienen lógica de negocio, hooks y componentes **Smart**.
- `src/lib/`: Configuración de herramientas de terceros (Supabase).

## Cómo empezar

### 1. Configuración de Entorno

Renombra `.env.local` y añade tus claves de Supabase:
```bash
NEXT_PUBLIC_SUPABASE_URL=tu-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-key
```

### 2. Instalación

```bash
npm install
```

### 3. Desarrollo

Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

La plataforma estará disponible en [http://localhost:3000](http://localhost:3000). Navega a `/estudiante/tareas` para ver la implementación inicial.
