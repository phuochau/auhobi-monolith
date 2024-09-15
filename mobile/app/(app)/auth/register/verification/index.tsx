import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, useLocalSearchParams, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { GraphQLError } from "@/components/graphql-error"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { DigitInput } from "@/components/digit-input"
import { verifyAccountAsync } from "@/store/user/actions/verify-account-async.action"
import { resendVerificationWithEmailAsync } from "@/store/user/actions/resend-verification-with-email-async.action"

const defaultValues = ['', '', '', '', '', '']

const VerificationScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const params = useLocalSearchParams<{ email: string, resent?: string }>();
    const [submitting, setSubmitting] = useState(false)
    const [resending, setResending] = useState(false)
    const [resent, setResent] = useState(params.resent ? Boolean(params.resent) : false )
    const [code, setCode] = useState(defaultValues)
    const [response, setResponse] = useState<GraphQLResponse<Boolean>>()
    
    async function onVerifyAccount() {
      setSubmitting(true)
      setResponse(undefined)
      setResent(false)
  
      const { payload } = await dispatch(verifyAccountAsync({
        email: params.email,
        code: code.join('')
      }))
  
      const response = payload as GraphQLResponse<Boolean>
      setResponse(response)
      if (!response.errors && response.data) {
        router.replace('/auth/register/verification/success')
      } else {
        setCode(defaultValues)
        setSubmitting(false)
      }
    }
    
    async function onResendCode() {
      if (resending) {
        return
      }

      setResending(true)
      setResent(false)
      setResponse(undefined)
  
      const { payload } = await dispatch(resendVerificationWithEmailAsync({
        email: params.email
      }))
  
      const response = payload as GraphQLResponse<Boolean>
      setResponse(response)
      if (!response.errors && response.data) {
        setResent(true)
      } else {
        setCode(defaultValues)
        setSubmitting(false)
      }
    }

    const valid = code.join('').length === 6

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Verify Account</CardTitle>
          <CardDescription>
          Please check your email inbox and enter the digits to activate your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <GraphQLError nativeID="RegisterError" response={response}></GraphQLError>

            {resent && <Text className={'text-success text-sm font-semibold'}>Resent the email activation successfully!</Text>}

            <DigitInput onComplete={(code) => setCode(code)}></DigitInput>

            <Button onPress={() => onVerifyAccount()} loading={submitting || resending} disabled={submitting || !valid || resending} className="w-full mt-2">
              <Text>Confirm Account</Text>
            </Button>

          <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
            <Text className="text-sm">Don't receive the email? </Text>
            <Text onPress={() => onResendCode()} className="underline">
              <Text className="font-semibold text-sm">Resend</Text>
            </Text>
          </View>

          <View className="text-center flex flex-row items-center justify-center flex-wrap">
            <Text className="text-sm">Already verified your account? </Text>
            <Link href={'/auth/login'} className="underline">
              <Text className="font-semibold text-sm">Login</Text>
            </Link>
          </View>
        </CardContent>
      </Card>
    )
}

export default VerificationScreen