import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { registerAsync } from "@/store/user/actions/register-async.action"
import { GraphQLAPI } from "@/graphql/api"
import { ErrorCodes } from "@/graphql/gql/generated-models"
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
      message: 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    }),
  confirmPassword: z
    .string()
    .min(1, { message: 'Must have at least 1 character' })
    .regex(passwordValidation, {
      message: 'Your password is not matched',
    })
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  })

const RegisterScreen = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [submitting, setSubmitting] = useState(false)
  const [response, setResponse] = useState<GraphQLResponse<Boolean>>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const { payload } = await dispatch(registerAsync({
      email: values.email,
      password: values.password,
      useCode: true,
      createUser: true
    }))

    const response = payload as GraphQLResponse<Boolean>
    setResponse(response)
    if (!response.errors && response.data) {
      router.replace({ pathname: '/auth/register/verification', params: { email: values.email } })
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
      <View className="w-full h-full flex flex-col p-6">
        <Text className="text-4xl mb-2 text-primary-foreground font-semibold">Sign Up</Text>
        <Text className="text-secondary mb-8">Enter your information to create a new account.</Text>
        <View className="gap-4">
          <GraphQLError nativeID="RegisterError" response={response}></GraphQLError>

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

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="confirmPassword"
          />
          <FormMessage nativeID="ConfirmPasswordError" error={errors.confirmPassword}></FormMessage>

          <Button size={'lg'} loading={submitting} disabled={submitting} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
            <Text>Continue</Text>
          </Button>

          <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
            <Text className="text-secondary">Already have an account? </Text>
            <Link href={'/auth/login'} className="underline">
              <Text className="font-semibold text-secondary">Login</Text>
            </Link>
          </View>
        </View>
      </View>
    </>
  )
}

export default RegisterScreen