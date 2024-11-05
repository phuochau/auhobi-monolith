import { Button } from "./button"
import { Text } from './text'
import { Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const FacebookSignInButton = () => {
    return (
        <Button size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="facebook-square" size={24} color={'#316FF6'} />
            <Text className="flex-1 text-center text-foreground">Sign in with Facebook</Text>
        </Button>
    )
}

FacebookSignInButton.displayName = 'FacebookSignInButton'

export { FacebookSignInButton }
