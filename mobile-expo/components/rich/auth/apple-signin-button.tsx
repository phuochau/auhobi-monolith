import { Toast } from "@/components/ui/toast";
import { Button } from "../../ui/button"
import { Text } from '../../ui/text'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as AppleAuthentication from 'expo-apple-authentication';
import _ from "lodash";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/store.hooks";
import { signInByAppleAction } from "@/store/user/actions/sign-in-by-apple.action";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { LoginResult } from "@/graphql/gql/generated-models";
import { Navigation } from "@/lib/navigation";

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

    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const dispatch = useAppDispatch()

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

            if (credential) {
                if (onAuthorized) {
                    onAuthorized(credential)
                }
                
                const { payload } = await dispatch(signInByAppleAction({
                    userId: credential.user,
                    firstName: credential.fullName?.givenName,
                    lastName: credential.fullName?.familyName,
                    email: credential.email
                }))

                const response = payload as GraphQLResponse<LoginResult>
                if (!response.errors && response.data) {
                    setSubmitting(false)
                    Navigation.resetToIndex(router)
                } else {
                    Toast.error(_.get(response.errors?.[0], 'message', 'There was an error. Please try again.'))
                }
            }
          } catch (err: any) {
            if (err?.code === 'ERR_REQUEST_CANCELED') {
                if (onCancelled) {
                    onCancelled()
                }
            } else {
                Toast.error(_.get(err, 'message', 'There was an error. Please try again.'))
            }
          } finally {
            setSubmitting(false)
          }
    }

    return (
        <Button onPress={signIn} loading={submitting} size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="apple" size={24} color="black" />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

AppleSignInButton.displayName = 'AppleSignInButton'

export { AppleSignInButton }
