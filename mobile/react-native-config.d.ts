declare module 'react-native-config' {
    export interface NativeConfig {
        SUPABASE_URL?: string;
        SUPABASE_ANON_KEY?: string;
        SUPABASE_STORAGE_ID?: string;
    }
    
    export const Config: NativeConfig
    export default Config
  }