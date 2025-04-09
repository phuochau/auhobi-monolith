import { Text } from '@/components/ui/text'
import { Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { ImageBackground, View, Image } from 'react-native'
import { MoveRight } from '@/lib/icons/MoveRight';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { FacebookApi } from '@/lib/facebook-api';
import { GoogleApi } from '@/lib/google-api';

const AuthScreen = () => {
  const router = useRouter()

  async function initSDKs() {
    await FacebookApi.initSDK()
    GoogleApi.initSignInSDK()
  }

  useEffect(() => {
    initSDKs()
  }, [])

  return (
    <View>
      <StatusBar style={'light'} />
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground source={require('@/assets/images/home/bg.jpg')} resizeMode="cover" className='w-full h-full flex flex-col p-6'>
        <View className="flex-1 flex flex-col gap-y-2 pt-12">
          <Image source={require('@/assets/images/branding/logo.png')} resizeMode='contain' className='w-16 h-16 mb-6' />
          <Text className="text-3xl font-semibold text-primary">Automobile, Hobbyists, Home</Text>
          <Text className="text-accent text-lg">The go-to app for car enthusiasts! Connect, share builds, join clubs, and fuel your passion for all things automotive.</Text>
        </View>
        <View className="flex-1 flex flex-col justify-end gap-4 pb-4">
          <Button
            size={'lg'}
            className="bg-primary relative"
            onPress={() => router.push({ pathname: '/auth/login' })}
          >
            <Text>Getting Started</Text>
            <View className='absolute top-3.5 right-6'>
              <MoveRight className='text-primary-foreground' />
            </View>
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

export default AuthScreen