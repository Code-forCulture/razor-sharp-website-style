export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          appointment_type: string
          buyer_id: string
          car_id: string
          created_at: string | null
          id: string
          location: string | null
          message: string | null
          seller_id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          appointment_type: string
          buyer_id: string
          car_id: string
          created_at?: string | null
          id?: string
          location?: string | null
          message?: string | null
          seller_id: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          appointment_type?: string
          buyer_id?: string
          car_id?: string
          created_at?: string | null
          id?: string
          location?: string | null
          message?: string | null
          seller_id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
      cars: {
        Row: {
          color: string | null
          condition: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          features: string[] | null
          fuel_type: string
          id: string
          images: string[] | null
          location: string | null
          make: string
          mileage: number
          model: string
          model_3d_url: string | null
          price: number
          seller_id: string
          status: string | null
          transmission: string
          updated_at: string | null
          verified: boolean | null
          year: number
        }
        Insert: {
          color?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          features?: string[] | null
          fuel_type: string
          id?: string
          images?: string[] | null
          location?: string | null
          make: string
          mileage: number
          model: string
          model_3d_url?: string | null
          price: number
          seller_id: string
          status?: string | null
          transmission: string
          updated_at?: string | null
          verified?: boolean | null
          year: number
        }
        Update: {
          color?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          features?: string[] | null
          fuel_type?: string
          id?: string
          images?: string[] | null
          location?: string | null
          make?: string
          mileage?: number
          model?: string
          model_3d_url?: string | null
          price?: number
          seller_id?: string
          status?: string | null
          transmission?: string
          updated_at?: string | null
          verified?: boolean | null
          year?: number
        }
        Relationships: []
      }
      offers: {
        Row: {
          buyer_id: string
          car_id: string
          created_at: string | null
          id: string
          message: string | null
          offer_amount: number
          seller_id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          buyer_id: string
          car_id: string
          created_at?: string | null
          id?: string
          message?: string | null
          offer_amount: number
          seller_id: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          buyer_id?: string
          car_id?: string
          created_at?: string | null
          id?: string
          message?: string | null
          offer_amount?: number
          seller_id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "offers_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string
          id: string
          phone_number: string | null
          seller_verified: boolean | null
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          created_at?: string | null
          full_name: string
          id: string
          phone_number?: string | null
          seller_verified?: boolean | null
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string
          id?: string
          phone_number?: string | null
          seller_verified?: boolean | null
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: []
      }
      seller_availability: {
        Row: {
          created_at: string | null
          day_of_week: number | null
          end_time: string | null
          id: string
          is_available: boolean | null
          seller_id: string
          start_time: string | null
        }
        Insert: {
          created_at?: string | null
          day_of_week?: number | null
          end_time?: string | null
          id?: string
          is_available?: boolean | null
          seller_id: string
          start_time?: string | null
        }
        Update: {
          created_at?: string | null
          day_of_week?: number | null
          end_time?: string | null
          id?: string
          is_available?: boolean | null
          seller_id?: string
          start_time?: string | null
        }
        Relationships: []
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
