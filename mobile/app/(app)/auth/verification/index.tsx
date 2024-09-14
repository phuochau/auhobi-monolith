import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { GraphQLError } from "@/components/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { registerAsync } from "@/store/auth/actions/register-async.action"

const VerificationScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [submitting, setSubmitting] = useState(false)
    const [response, setResponse] = useState<GraphQLResponse<Boolean>>()
    
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Verify Account</CardTitle>
          <CardDescription>
          Please check your email inbox and enter the digits to activate your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <GraphQLError nativeID="RegisterError" response={response}></GraphQLError>

            <Button loading={submitting} disabled={submitting} className="w-full mt-2">
              <Text>Confirm Account</Text>
            </Button>

          <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
            <Text className="text-sm">Don't receive the email? </Text>
            <Link href={'/auth/login'} className="underline">
              <Text className="font-semibold text-sm">Resend</Text>
            </Link>
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