import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { useRouter } from "expo-router"
import { Button } from "@/components/ui/button"

const RegisterScreen = () => {
    const router = useRouter()
    
    return (
        <View>
          <Text>Register</Text>
          <Button onPress={() => router.replace({ pathname: '/auth/login' })}>
            <Text>Login</Text>
          </Button>
        </View>
    )
}

export default RegisterScreen