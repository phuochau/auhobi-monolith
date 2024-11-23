import { GoogleApi } from "@/lib/google-api"
import { Button } from "../../ui/button"
import { Text } from '../../ui/text'
import { Image } from 'react-native'
import { Toast } from "@/components/ui/toast"
import _ from "lodash"
import { statusCodes, User } from "@react-native-google-signin/google-signin"

export type GoogleSignInButtonProps = {
    text?: string,
    onAuthorized?: (user: User) => any,
    onCancelled?: () => any
}

const GoogleSignInButton = (props: GoogleSignInButtonProps) => {
    const {
        text = 'Sign in with Google',
        onAuthorized,
        onCancelled
    } = props

    async function signIn() {
        try {
            const response = await GoogleApi.googleSignIn()
            
            if (response.type === 'cancelled') {
                if (onCancelled) {
                    onCancelled()
                }
                return
            }

            if (onAuthorized) {
                onAuthorized(response.data)
            }
        } catch (err: any) {
            if (err?.code) {
                switch (err.code) {
                  case statusCodes.SIGN_IN_CANCELLED:
                    if (onCancelled) {
                        onCancelled()
                    }
                    return;
                case statusCodes.IN_PROGRESS:
                    Toast.error("In-progress...")
                    return;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    Toast.error("The play services is not available.")
                    return;
                case statusCodes.SIGN_IN_REQUIRED:
                    return;
                default:
                    Toast.error(_.get(err, 'message', 'Unknow'))
                }
            } else {
                Toast.error(_.get(err, 'message', 'Unknow'))
            }
        }
    }

    return (
        <Button onPress={signIn} size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <Image source={require('@/assets/icons/google.png')} className="w-7 h-7" />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

GoogleSignInButton.displayName = 'GoogleSignInButton'

export { GoogleSignInButton }
