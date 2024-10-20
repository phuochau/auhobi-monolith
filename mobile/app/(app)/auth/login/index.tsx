import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ErrorCodes, LoginResult } from "@/graphql/gql/generated-models"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { loginAsync } from "@/store/user/actions/login-async.action"
import { GraphQLAPI } from "@/graphql/api"
import { Navigation } from "@/lib/navigation"
import React from "react"
 
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Must have at least 1 character' })
    .email({
      message: 'Must be a valid email',
    }),
  password: z
    .string()
    .min(1, { message: 'Must have at least 1 character' })
    .regex(passwordValidation, {
      message: 'Your password is not valid',
    })
})

const LoginScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [submitting, setSubmitting] = useState(false)
    const [response, setResponse] = useState<GraphQLResponse<LoginResult>>()

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: '',
        password: ''
      }
    })
 
    async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true)
      setResponse(undefined)
  
      const { payload } = await dispatch(loginAsync({ ...values, useCode: true }))
  
      const response = payload as GraphQLResponse<LoginResult>
      setResponse(response)
      if (!response.errors && response.data) {
        Navigation.reset(router, { pathname: '/dashboard'})
      } else {
        const errorCode = GraphQLAPI.getErrorString(response)
        if (errorCode === ErrorCodes.AuthAccountPendingActivation) {
          router.replace({ pathname: '/auth/register/verification', params: { email: values.email, resent: 'true' }})
        } else {
          setSubmitting(false)
        }
      }
    }
    
    return (
      <>
        <Stack.Screen options={{ headerShown: true, title: 'Login', headerBackButtonMenuEnabled: true }} />
        <Card className="w-full rounded-none mt-4">
          <CardHeader>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
              <GraphQLError nativeID="LoginError" response={response}></GraphQLError>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize="none"
                  />
                )}
                name="email"
              />
              <FormMessage nativeID="EmailError" error={errors.email}></FormMessage>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name="password"
              />
              <FormMessage nativeID="PasswordError" error={errors.password}></FormMessage>

              <Button loading={submitting} disabled={submitting} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
                <Text>Log In</Text>
              </Button>

              <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
                <Text className="text-sm">Don't have an account? </Text>
                <Link href={'/auth/register'} className="underline">
                  <Text className="font-semibold text-sm">Register</Text>
                </Link>
              </View>

              <View className="text-center flex flex-row items-center justify-center flex-wrap">
                <Link href={'/auth/forgot-password'} className="underline">
                  <Text className="font-semibold text-sm">Forgot password</Text>
                </Link>
              </View>
          </CardContent>
        </Card>
      </>
    )
}

export default LoginScreen