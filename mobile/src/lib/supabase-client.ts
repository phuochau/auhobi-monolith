import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = 'https://npppcmzbledbczbjyvrr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcHBjbXpibGVkYmN6Ymp5dnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NTEyNjYsImV4cCI6MjA1OTUyNzI2Nn0.0teIidLHRc2DJ7w7_n1p65Ju6_UCJLglBXgnll84xaA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false, // Not needed in mobile
  },
})
