import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { DigitInput } from "@/components/form-fields/digit-input"
import { verifyAccountAction } from "@/store/user/actions/verify-account.action"
import { resendVerificationWithEmailAction } from "@/store/user/actions/resend-verification-with-email.action"
import React from "react"

const defaultValues = ['', '', '', '', '', '']

const VerificationScreen = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const params = useLocalSearchParams<{ email: string, resent?: string }>();
  const [submitting, setSubmitting] = useState(false)
  const [resending, setResending] = useState(false)
  const [resent, setResent] = useState(params.resent ? Boolean(params.resent) : false)
  const [code, setCode] = useState(defaultValues)
  const [response, setResponse] = useState<GraphQLResponse<Boolean>>()

  async function onVerifyAccount() {
    setSubmitting(true)
    setResponse(undefined)
    setResent(false)

    const { payload } = await dispatch(verifyAccountAction({
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

    const { payload } = await dispatch(resendVerificationWithEmailAction({
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
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: '', headerBackButtonMenuEnabled: true }} />
      <View className="w-full h-full flex flex-col p-6">
        <Text className="text-4xl mb-2 text-foreground font-semibold">Activate Account</Text>
        <Text className="text-muted-foreground mb-8">Please check your email inbox to get verification code. Enter the verification code below to activate your account.</Text>
        <View className="flex-1 gap-4">
          <GraphQLError nativeID="VerificationError" response={response}></GraphQLError>

          {resent && <Text className={'text-success text-sm font-semibold'}>Resent the email activation successfully!</Text>}

          <DigitInput onComplete={(code) => setCode(code)}></DigitInput>

          <View className="mt-4 text-center flex flex-row items-center flex-wrap">
            <Text className="text-muted-foreground">Don't receive the email? </Text>
            <Text onPress={() => onResendCode()} className="underline">
              <Text className="font-semibold text-primary">Resend</Text>
            </Text>
          </View>

          <Button size={'lg'} onPress={() => onVerifyAccount()} loading={submitting || resending} disabled={submitting || !valid || resending} className="w-full mt-2">
            <Text>Confirm</Text>
          </Button>
        </View>

        <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
          <Text className="text-muted-foreground">Already verified your account? </Text>
          <Link href={'/auth/login'} className="underline">
            <Text className="font-semibold text-primary">Sign In</Text>
          </Link>
        </View>

      </View>
    </>
  )
}

export default VerificationScreen