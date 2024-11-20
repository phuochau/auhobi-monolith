import { FacebookApi } from "@/lib/facebook-api";
import { Button } from "../../ui/button"
import { Text } from '../../ui/text'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Toast } from "@/components/ui/toast";
import _ from "lodash";
import FBProfile from "react-native-fbsdk-next/lib/typescript/src/FBProfile";

export type FacebookSignInButtonProps = {
    text?: string,
    onAuthorized?: (profile: FBProfile) => any
}

const FacebookSignInButton = (props: FacebookSignInButtonProps) => {
    const {
        text = 'Sign in with Facebook',
        onAuthorized
    } = props

    async function signIn() {
        try {
            const result = await FacebookApi.login()
            if (result.isCancelled || result.declinedPermissions) {
                return
            }

            console.log(result)
            if (result.grantedPermissions) {
                const profile = await FacebookApi.getProfile()
                console.log(profile)
                if (profile && onAuthorized) {
                    onAuthorized(profile)
                }
            }
        } catch (err) {
            Toast.error(_.get(err, 'message', 'Unknow'))
        }
    }
    
    return (
        <Button onPress={signIn} size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="facebook-square" size={24} color={'#316FF6'} />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

FacebookSignInButton.displayName = 'FacebookSignInButton'

export { FacebookSignInButton }
