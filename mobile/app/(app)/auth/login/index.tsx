import { View, ScrollView } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { Input } from "@/components/ui/input"
import { useCallback, useState } from "react"
import { ErrorCodes, LoginResult } from "@/graphql/gql/generated-models"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { signInAction } from "@/store/user/actions/sign-in.action"
import { GraphQLAPI } from "@/graphql/api"
import { Navigation } from "@/lib/navigation"
import React from "react"
import { GoogleSignInButton } from "@/components/rich/auth/google-signin-button"
import { FacebookSignInButton } from "@/components/rich/auth/facebook-signin-button"
import { AppleSignInButton } from "@/components/rich/auth/apple-signin-button"
import { Separator } from "@/components/ui/separator"
import { AvoidSoftInput } from "react-native-avoid-softinput";
import { useFocusEffect } from "@react-navigation/native";

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

  useFocusEffect(useCallback(() => {
    AvoidSoftInput.setEnabled(true);
    return () => {
      AvoidSoftInput.setEnabled(false);
    };
  }, []));

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
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

    const { payload } = await dispatch(signInAction({ ...values, useCode: true }))

    const response = payload as GraphQLResponse<LoginResult>
    setResponse(response)
    if (!response.errors && response.data) {
      Navigation.resetToDashboard(router)
    } else {
      const errorCode = GraphQLAPI.getErrorString(response)
      if (errorCode === ErrorCodes.AuthAccountPendingActivation) {
        router.replace({ pathname: '/auth/register/verification', params: { email: values.email, resent: 'true' } })
      } else {
        setSubmitting(false)
      }
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: '', headerBackButtonMenuEnabled: true }} />
      <View className="w-full h-full flex flex-col">
        <ScrollView className="flex-1" contentContainerClassName="p-6">
          <Text className="text-4xl mb-2 text-foreground font-semibold">Sign in to Auhobi</Text>
          <Text className="text-muted-foreground mb-8">Enter your credentials below to login to your account.</Text>
          <View className="gap-4">
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
                  keyboardType="email-address"
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

            <View className="flex flex-row items-center flex-wrap">
              <Text className="text-muted-foreground">Forgot your password? </Text>
              <Link href={'/auth/forgot-password'} className="underline">
                <Text className="font-semibold text-primary">Reset it</Text>
              </Link>
            </View>

            <Button size={'lg'} loading={submitting} disabled={submitting || !isValid} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
              <Text>Sign In</Text>
            </Button>

            <View className="relative flex flex-col items-center justify-center my-4">
              <Separator />
              <View className="absolute px-6 bg-background">
                <Text className="text-muted-foreground">or</Text>
              </View>
            </View>

            <FacebookSignInButton />

            <GoogleSignInButton />

            <AppleSignInButton />
          </View>

          <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
            <Text className="text-muted-foreground">Don't have an account? </Text>
            <Link href={'/auth/register'} className="underline">
              <Text className="font-semibold text-primary">Sign up</Text>
            </Link>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default LoginScreen