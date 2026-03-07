export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      asistencias: {
        Row: {
          clase_id: string
          estado: string
          estudiante_id: string
          fecha: string
          id: string
        }
        Insert: {
          clase_id: string
          estado: string
          estudiante_id: string
          fecha?: string
          id?: string
        }
        Update: {
          clase_id?: string
          estado?: string
          estudiante_id?: string
          fecha?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "asistencias_clase_id_fkey"
            columns: ["clase_id"]
            isOneToOne: false
            referencedRelation: "clases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "asistencias_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
        ]
      }
      clases: {
        Row: {
          creado_en: string
          curso_id: string
          descripcion: string | null
          id: string
          orden: number | null
          titulo: string
          video_url: string | null
        }
        Insert: {
          creado_en?: string
          curso_id: string
          descripcion?: string | null
          id?: string
          orden?: number | null
          titulo: string
          video_url?: string | null
        }
        Update: {
          creado_en?: string
          curso_id?: string
          descripcion?: string | null
          id?: string
          orden?: number | null
          titulo?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clases_curso_id_fkey"
            columns: ["curso_id"]
            isOneToOne: false
            referencedRelation: "cursos"
            referencedColumns: ["id"]
          },
        ]
      }
      criterios_evaluacion: {
        Row: {
          criterio: string
          evaluacion_id: string
          feedback: string | null
          id: string
          maximo: number | null
          puntaje: number | null
        }
        Insert: {
          criterio: string
          evaluacion_id: string
          feedback?: string | null
          id?: string
          maximo?: number | null
          puntaje?: number | null
        }
        Update: {
          criterio?: string
          evaluacion_id?: string
          feedback?: string | null
          id?: string
          maximo?: number | null
          puntaje?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "criterios_evaluacion_evaluacion_id_fkey"
            columns: ["evaluacion_id"]
            isOneToOne: false
            referencedRelation: "evaluaciones"
            referencedColumns: ["id"]
          },
        ]
      }
      cursos: {
        Row: {
          creado_en: string
          descripcion: string | null
          id: string
          profesor_id: string | null
          titulo: string
        }
        Insert: {
          creado_en?: string
          descripcion?: string | null
          id?: string
          profesor_id?: string | null
          titulo: string
        }
        Update: {
          creado_en?: string
          descripcion?: string | null
          id?: string
          profesor_id?: string | null
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "cursos_profesor_id_fkey"
            columns: ["profesor_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
        ]
      }
      entregas: {
        Row: {
          archivo_url: string
          comentarios_estudiante: string | null
          estudiante_id: string
          fecha_entrega: string
          id: string
          tarea_id: string
        }
        Insert: {
          archivo_url: string
          comentarios_estudiante?: string | null
          estudiante_id: string
          fecha_entrega?: string
          id?: string
          tarea_id: string
        }
        Update: {
          archivo_url?: string
          comentarios_estudiante?: string | null
          estudiante_id?: string
          fecha_entrega?: string
          id?: string
          tarea_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entregas_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entregas_tarea_id_fkey"
            columns: ["tarea_id"]
            isOneToOne: false
            referencedRelation: "tareas"
            referencedColumns: ["id"]
          },
        ]
      }
      evaluaciones: {
        Row: {
          creada_en: string
          entrega_id: string
          feedback_general: string | null
          id: string
          nota_final: number | null
          profesor_id: string
        }
        Insert: {
          creada_en?: string
          entrega_id: string
          feedback_general?: string | null
          id?: string
          nota_final?: number | null
          profesor_id: string
        }
        Update: {
          creada_en?: string
          entrega_id?: string
          feedback_general?: string | null
          id?: string
          nota_final?: number | null
          profesor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "evaluaciones_entrega_id_fkey"
            columns: ["entrega_id"]
            isOneToOne: false
            referencedRelation: "entregas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evaluaciones_profesor_id_fkey"
            columns: ["profesor_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
        ]
      }
      familiares: {
        Row: {
          estudiante_id: string
          id: string
          padre_id: string
          parentesco: string | null
        }
        Insert: {
          estudiante_id: string
          id?: string
          padre_id: string
          parentesco?: string | null
        }
        Update: {
          estudiante_id?: string
          id?: string
          padre_id?: string
          parentesco?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "familiares_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "familiares_padre_id_fkey"
            columns: ["padre_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
        ]
      }
      materiales: {
        Row: {
          archivo_url: string | null
          clase_id: string
          creado_en: string
          id: string
          texto: string | null
          tipo: string
        }
        Insert: {
          archivo_url?: string | null
          clase_id: string
          creado_en?: string
          id?: string
          texto?: string | null
          tipo: string
        }
        Update: {
          archivo_url?: string | null
          clase_id?: string
          creado_en?: string
          id?: string
          texto?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "materiales_clase_id_fkey"
            columns: ["clase_id"]
            isOneToOne: false
            referencedRelation: "clases"
            referencedColumns: ["id"]
          },
        ]
      }
      mensajes_chat: {
        Row: {
          contenido: string
          creado_en: string
          estudiante_id: string
          id: string
          remitente_id: string
        }
        Insert: {
          contenido: string
          creado_en?: string
          estudiante_id: string
          id?: string
          remitente_id: string
        }
        Update: {
          contenido?: string
          creado_en?: string
          estudiante_id?: string
          id?: string
          remitente_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mensajes_chat_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mensajes_chat_remitente_id_fkey"
            columns: ["remitente_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
        ]
      }
      perfiles: {
        Row: {
          avatar_url: string | null
          creado_en: string
          id: string
          nombre: string
          rol: string
        }
        Insert: {
          avatar_url?: string | null
          creado_en?: string
          id: string
          nombre: string
          rol: string
        }
        Update: {
          avatar_url?: string | null
          creado_en?: string
          id?: string
          nombre?: string
          rol?: string
        }
        Relationships: []
      }
      practicas_diarias: {
        Row: {
          archivo_url: string
          comentarios: string | null
          creado_en: string
          estudiante_id: string
          fecha: string
          id: string
        }
        Insert: {
          archivo_url: string
          comentarios?: string | null
          creado_en?: string
          estudiante_id: string
          fecha?: string
          id?: string
        }
        Update: {
          archivo_url?: string
          comentarios?: string | null
          creado_en?: string
          estudiante_id?: string
          fecha?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "practicas_diarias_estudiante_id_fkey"
            columns: ["estudiante_id"]
            isOneToOne: false
            referencedRelation: "perfiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tareas: {
        Row: {
          clase_id: string
          creado_en: string
          descripcion: string | null
          fecha_limite: string | null
          id: string
          titulo: string
        }
        Insert: {
          clase_id: string
          creado_en?: string
          descripcion?: string | null
          fecha_limite?: string | null
          id?: string
          titulo: string
        }
        Update: {
          clase_id?: string
          creado_en?: string
          descripcion?: string | null
          fecha_limite?: string | null
          id?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "tareas_clase_id_fkey"
            columns: ["clase_id"]
            isOneToOne: false
            referencedRelation: "clases"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
