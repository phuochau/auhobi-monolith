import { Button } from "./button"
import { Text } from './text'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export type FacebookSignInButtonProps = {
    text?: string
}

const FacebookSignInButton = (props: FacebookSignInButtonProps) => {
    const {
        text = 'Sign in with Facebook'
    } = props
    
    return (
        <Button size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="facebook-square" size={24} color={'#316FF6'} />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

FacebookSignInButton.displayName = 'FacebookSignInButton'

export { FacebookSignInButton }
