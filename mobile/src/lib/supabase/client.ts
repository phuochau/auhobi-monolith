import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { environment } from '../../config/environment'
import { AppState } from 'react-native'
import { Database } from './types'

const supabaseUrl = environment.SUPABASE_URL!
const supabaseAnonKey = environment.SUPABASE_ANON_KEY!

export namespace Supabase {
  export const client = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  })
  
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      client.auth.startAutoRefresh()
    } else {
      client.auth.stopAutoRefresh()
    }
  })
  export const getSession = () => {
    return client.auth.getSession()
  }
  
  export const signOut = () => {
    return client.auth.signOut()
  }
}
