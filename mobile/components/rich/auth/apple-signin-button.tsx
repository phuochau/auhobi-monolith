import { Toast } from "@/components/ui/toast";
import { Button } from "../../ui/button"
import { Text } from '../../ui/text'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as AppleAuthentication from 'expo-apple-authentication';
import _ from "lodash";
import { Platform } from "react-native";

export type AppleSignInButtonProps = {
    text?: string,
    onAuthorized?: (credential: AppleAuthentication.AppleAuthenticationCredential) => any,
    onCancelled?: () => any
}

const AppleSignInButton = (props: AppleSignInButtonProps) => {
    const {
        text = 'Sign in with Apple',
        onAuthorized,
        onCancelled
    } = props

    if (!(Platform.OS === 'ios' || Platform.OS === 'macos')) {
        return null
    }

    async function signIn() {
        try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });

            if (onAuthorized) {
                onAuthorized(credential)
            }
          } catch (err: any) {
            if (err?.code === 'ERR_REQUEST_CANCELED') {
                if (onCancelled) {
                    onCancelled()
                }
            } else {
                Toast.error(_.get(err, 'message', 'Unknow'))
            }
          }
    }

    return (
        <Button onPress={signIn} size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="apple" size={24} color="black" />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

AppleSignInButton.displayName = 'AppleSignInButton'

export { AppleSignInButton }
