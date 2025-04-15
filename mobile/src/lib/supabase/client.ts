import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppState } from 'react-native'
import RNFS from 'react-native-fs';
import { environment } from '../../config/environment'
import { Database } from './types'
import mime from 'mime';
import { decode } from 'base64-arraybuffer'

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

  export const uploadImage = async (remoteDirPath: string, localFilePath: string, base64Data?: string): Promise<string> => {
    const base64 = base64Data || await RNFS.readFile(localFilePath, 'base64')
    const filename = localFilePath.split('/').pop() || 'image.jpg';
    const { data, error } = await Supabase.getStorage().upload(
      `${remoteDirPath}/${Date.now()}-${filename}`,
      decode(base64),
      {
        contentType: mime.getType(filename) || 'image/jpeg'
      }
    );

    if (error) {
      throw error;
    }

    const { data: { publicUrl } } = Supabase.getStorage().getPublicUrl(data.path);
    return publicUrl;
  }
}
