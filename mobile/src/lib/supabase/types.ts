export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      garages: {
        Row: {
          address_country: string | null
          address_district: string | null
          address_full: string | null
          address_postal_code: string | null
          address_str_and_no: string | null
          address_ward: string | null
          created_at: string
          description: string | null
          gplace_id: string | null
          id: number
          is_blocked: boolean
          is_hidden: boolean
          latitude: number | null
          longitude: number | null
          media: string[] | null
          name: string
          phone_number: string | null
        }
        Insert: {
          address_country?: string | null
          address_district?: string | null
          address_full?: string | null
          address_postal_code?: string | null
          address_str_and_no?: string | null
          address_ward?: string | null
          created_at?: string
          description?: string | null
          gplace_id?: string | null
          id?: number
          is_blocked?: boolean
          is_hidden?: boolean
          latitude?: number | null
          longitude?: number | null
          media?: string[] | null
          name: string
          phone_number?: string | null
        }
        Update: {
          address_country?: string | null
          address_district?: string | null
          address_full?: string | null
          address_postal_code?: string | null
          address_str_and_no?: string | null
          address_ward?: string | null
          created_at?: string
          description?: string | null
          gplace_id?: string | null
          id?: number
          is_blocked?: boolean
          is_hidden?: boolean
          latitude?: number | null
          longitude?: number | null
          media?: string[] | null
          name?: string
          phone_number?: string | null
        }
        Relationships: []
      }
      ref_service_types: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      service_histories: {
        Row: {
          created_at: string
          custom_garage_name: string | null
          date: string | null
          diy: boolean | null
          garage_id: number | null
          id: number
          media: string[] | null
          mileage: number | null
          note: string | null
          service_details: string | null
          service_type_id: number
          user_vehicle_id: number | null
        }
        Insert: {
          created_at?: string
          custom_garage_name?: string | null
          date?: string | null
          diy?: boolean | null
          garage_id?: number | null
          id?: number
          media?: string[] | null
          mileage?: number | null
          note?: string | null
          service_details?: string | null
          service_type_id: number
          user_vehicle_id?: number | null
        }
        Update: {
          created_at?: string
          custom_garage_name?: string | null
          date?: string | null
          diy?: boolean | null
          garage_id?: number | null
          id?: number
          media?: string[] | null
          mileage?: number | null
          note?: string | null
          service_details?: string | null
          service_type_id?: number
          user_vehicle_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_vehicle_service_histories_garage_id_fkey"
            columns: ["garage_id"]
            isOneToOne: false
            referencedRelation: "garages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_vehicle_service_histories_service_type_id_fkey"
            columns: ["service_type_id"]
            isOneToOne: false
            referencedRelation: "ref_service_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_vehicle_service_histories_user_vehicle_id_fkey"
            columns: ["user_vehicle_id"]
            isOneToOne: false
            referencedRelation: "user_vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      service_history_bills: {
        Row: {
          created_at: string
          currency: string | null
          id: number
          photo: string[] | null
          service_history_id: number | null
          total: number | null
        }
        Insert: {
          created_at?: string
          currency?: string | null
          id?: number
          photo?: string[] | null
          service_history_id?: number | null
          total?: number | null
        }
        Update: {
          created_at?: string
          currency?: string | null
          id?: number
          photo?: string[] | null
          service_history_id?: number | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "service_history_bills_service_history_id_fkey"
            columns: ["service_history_id"]
            isOneToOne: false
            referencedRelation: "service_histories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_vehicles: {
        Row: {
          brand_id: number | null
          created_at: string
          id: number
          model: string | null
          owner_id: string | null
          year: string | null
        }
        Insert: {
          brand_id?: number | null
          created_at?: string
          id?: number
          model?: string | null
          owner_id?: string | null
          year?: string | null
        }
        Update: {
          brand_id?: number | null
          created_at?: string
          id?: number
          model?: string | null
          owner_id?: string | null
          year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_vehicles_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "vehicle_brands"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_brands: {
        Row: {
          created_at: string
          id: number
          is_hidden: boolean
          logo: string | null
          metadata: Json | null
          name: string
          ref_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_hidden?: boolean
          logo?: string | null
          metadata?: Json | null
          name: string
          ref_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_hidden?: boolean
          logo?: string | null
          metadata?: Json | null
          name?: string
          ref_id?: string | null
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
