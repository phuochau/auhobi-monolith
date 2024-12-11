import { GoogleApi } from "@/lib/google-api"
import { Button } from "../../ui/button"
import { Text } from '../../ui/text'
import { Image } from 'react-native'
import { Toast } from "@/components/ui/toast"
import _ from "lodash"
import { statusCodes, User } from "@react-native-google-signin/google-signin"
import { useAppDispatch } from "@/hooks/store.hooks"
import { useRouter } from "expo-router"
import { useState } from "react"
import { signInByGoogleAction } from "@/store/user/actions/sign-in-by-google.action"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { LoginResult } from "@/graphql/gql/generated-models"
import { Navigation } from "@/lib/navigation"

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

    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const dispatch = useAppDispatch()

    async function signIn() {
        try {
            const result = await GoogleApi.googleSignIn()
            
            if (result.type === 'cancelled') {
                if (onCancelled) {
                    onCancelled()
                }
                return
            }

            if (result.data) {
                const ggUserData = result.data
                if (onAuthorized) {
                    onAuthorized(ggUserData)
                }

                if (ggUserData.user) {
                    const ggUser = ggUserData.user
                    const { payload } = await dispatch(signInByGoogleAction({
                        userId: ggUser.id,
                        firstName: ggUser.givenName,
                        lastName: ggUser.familyName,
                        email: ggUser.email,
                        photo: ggUser.photo
                    }))

                    const response = payload as GraphQLResponse<LoginResult>

                    if (!response.errors && response.data) {
                        setSubmitting(false)
                        Navigation.resetToDashboard(router)
                    } else {
                        Toast.error(_.get(response.errors?.[0], 'message', 'There was an error. Please try again.'))
                    }
                }
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
                    Toast.error(_.get(err, 'message', 'There was an error. Please try again.'))
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
            <Image source={require('@/assets/icons/google.png')} className="w-7 h-7 -ml-0.5" />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

GoogleSignInButton.displayName = 'GoogleSignInButton'

export { GoogleSignInButton }
