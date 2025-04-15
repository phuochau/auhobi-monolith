import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { environment } from '../../config/environment'
import { AppState } from 'react-native'
import { Database } from './types'

export namespace Supabase {
  let fetchCount = 0
  let launchTime = 0

  const ourFetch = async (...args: Parameters<typeof fetch>) => {
    if (!launchTime) {
      launchTime = Date.now()
    }
    console.log("url", args[0])
    console.log("fetchCount ms", fetchCount++, Date.now() - launchTime)
    return fetch(...args)
  }

  export const client = createClient<Database>(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY, {
    auth: {
      storage: AsyncStorage,
      persistSession: true,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    global: {
      fetch: ourFetch
    }
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

  export const getStorage = () => {
    return Supabase.client.storage.from(environment.SUPABASE_STORAGE_ID)
  }

  export const uploadImage = async (remoteDirPath: string, file: string): Promise<string> => {
    const response = await fetch(file);
    const blob = await response.blob();
    const filename = file.split('/').pop() || 'image.jpg';
    const { data, error } = await Supabase.getStorage().upload(`${remoteDirPath}/${Date.now()}-${filename}`, blob);

    if (error) {
      throw error;
    }

    const { data: { publicUrl } } = Supabase.getStorage().getPublicUrl(data.path);
    return publicUrl;
  }
}
