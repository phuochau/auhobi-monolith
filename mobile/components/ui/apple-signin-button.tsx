import { Button } from "./button"
import { Text } from './text'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AppleSignInButton = () => {
    return (
        <Button size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="apple" size={24} color="black" />
            <Text className="flex-1 text-center text-foreground">Sign in with Apple</Text>
        </Button>
    )
}

AppleSignInButton.displayName = 'AppleSignInButton'

export { AppleSignInButton }
