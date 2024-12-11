import { FacebookApi } from "@/lib/facebook-api";
import { Button } from "../../ui/button"
import { Text } from '../../ui/text'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Toast } from "@/components/ui/toast";
import _ from "lodash";
import FBProfile from "react-native-fbsdk-next/lib/typescript/src/FBProfile";
import { useAppDispatch } from "@/hooks/store.hooks";
import { useState } from "react";
import { signInByFacebookAction } from "@/store/user/actions/sign-in-by-facebook.action";
import { useRouter } from "expo-router";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { LoginResult } from "@/graphql/gql/generated-models";
import { Navigation } from "@/lib/navigation";

export type FacebookSignInButtonProps = {
    text?: string,
    onAuthorized?: (profile: FBProfile) => any,
    onCancelled?: () => any
}

const FacebookSignInButton = (props: FacebookSignInButtonProps) => {
    const {
        text = 'Sign in with Facebook',
        onAuthorized,
        onCancelled
    } = props
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)

    const dispatch = useAppDispatch()

    async function signIn() {
        try {
            setSubmitting(false)
            const result = await FacebookApi.login()

            if (result.isCancelled) {
                if (onCancelled) {
                    onCancelled()
                }
                return
            }

            if (result.declinedPermissions?.length) {
                Toast.warn(`${result.declinedPermissions.join(', ')} not granted.`)
            }

            if (result.grantedPermissions?.length) {
                const profile = await FacebookApi.getProfile()
                if (profile) {
                    if (onAuthorized) {
                        onAuthorized(profile)
                    }

                    const { payload } = await dispatch(signInByFacebookAction({
                        userId: profile.userID!,
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        photo: profile.imageURL
                    }))
                    const response = payload as GraphQLResponse<LoginResult>

                    console.log(response)
                    if (!response.errors && response.data) {
                        setSubmitting(false)
                        Navigation.resetToDashboard(router)
                    } else {
                        Toast.error(_.get(response.errors?.[0], 'message', 'There was an error. Please try again.'))
                    }
                }
            }
        } catch (err) {
            Toast.error(_.get(err, 'message', 'There was an error. Please try again.'))
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Button onPress={signIn} loading={submitting} size={'lg'} variant={'outline'} className="flex flex-row items-center">
            <FontAwesome name="facebook-square" size={24} color={'#316FF6'} />
            <Text className="flex-1 text-center text-foreground">{text}</Text>
        </Button>
    )
}

FacebookSignInButton.displayName = 'FacebookSignInButton'

export { FacebookSignInButton }
