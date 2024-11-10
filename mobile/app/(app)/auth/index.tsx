import { Text } from '@/components/ui/text'
import { Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { ImageBackground, View, Image } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';

const AuthScreen = () => {
  const router = useRouter()
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
            onPress={() => router.push({ pathname: '/auth/test' })}
          >
            <Text>Getting Started</Text>
            <View className='absolute top-2.5 right-4'>
              <MaterialIcons name="arrow-right-alt" size={32} color="white" />
            </View>
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

export default AuthScreen