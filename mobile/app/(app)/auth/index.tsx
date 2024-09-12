import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"

const AuthScreen = () => {
    const router = useRouter()
    return (
        <View>
          <Stack.Screen options={{ headerShown: false }} />
          <Text>Auth Screen</Text>
          <Button onPress={() => router.push({ pathname: '/auth/login' })}>
            <Text>Login</Text>
          </Button>
          <Button onPress={() => router.push({ pathname: '/auth/register' })}>
            <Text>Register</Text>
          </Button>
        </View>
    )
}

export default AuthScreen