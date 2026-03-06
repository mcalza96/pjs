#!/bin/bash

# Script para crear la estructura inicial del proyecto
# Uso: bash create-structure.sh

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "📁 Creando estructura de directorios..."

mkdir -p "$PROJECT_ROOT/src/lib/supabase"
mkdir -p "$PROJECT_ROOT/src/components/ui"
mkdir -p "$PROJECT_ROOT/src/features/tareas/types"
mkdir -p "$PROJECT_ROOT/src/features/tareas/hooks"
mkdir -p "$PROJECT_ROOT/src/features/tareas/components"
mkdir -p "$PROJECT_ROOT/src/app/(dashboard)/estudiante/tareas"

echo "✅ Estructura creada exitosamente"
echo ""
echo "Estructura:"
find "$PROJECT_ROOT/src" -type d | sort
