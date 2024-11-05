import { Button } from "./button"
import { Text } from './text'
import { Image } from 'react-native'

export type GoogleSignInButtonProps = {
    text?: string
}

const GoogleSignInButton = (props: GoogleSignInButtonProps) => {
    const {
        text = 'Sign in with Google'
    } = props

    return (
        <Button size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <Image source={require('@/assets/icons/google.png')} className="w-7 h-7" />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

GoogleSignInButton.displayName = 'GoogleSignInButton'

export { GoogleSignInButton }
