import { Text } from '@/components/ui/text'
import { Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { SafeAreaView } from "react-native-safe-area-context"

const AuthScreen = () => {
    const router = useRouter()
    return (
        <SafeAreaView>
          <Stack.Screen options={{ headerShown: false }} />
          <Text>Auth Screen</Text>
          <Button onPress={() => router.push({ pathname: '/auth/login' })}>
            <Text>Login</Text>
          </Button>
          <Button onPress={() => router.push({ pathname: '/auth/register' })}>
            <Text>Register</Text>
          </Button>
        </SafeAreaView>
    )
}

export default AuthScreen