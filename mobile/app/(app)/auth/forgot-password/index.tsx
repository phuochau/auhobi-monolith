import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, Stack, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { requestPasswordResetAsync } from "@/store/user/actions/request-password-reset-async.action"
import React from "react"

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Must have at least 1 character' })
    .email({
      message: 'Must be a valid email',
    })
})

const LoginScreen = () => {
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
      email: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const { payload } = await dispatch(requestPasswordResetAsync({ ...values, useCode: true }))

    const response = payload as GraphQLResponse<Boolean>
    setResponse(response)
    if (!response.errors && response.data) {
      router.replace({ pathname: '/auth/forgot-password/verification', params: { email: values.email } })
    }
    setSubmitting(false)
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: '', headerBackButtonMenuEnabled: true }} />
      <View className="w-full h-full flex flex-col p-6">
        <Text className="text-4xl mb-2 text-primary-foreground font-semibold">Forgot password</Text>
        <Text className="text-secondary mb-8">Enter your email below to reset your password.</Text>
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
              />
            )}
            name="email"
          />
          <FormMessage nativeID="EmailError" error={errors.email}></FormMessage>

          <Button size={'lg'} loading={submitting} disabled={submitting} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
            <Text>Reset password</Text>
          </Button>

          <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
            <Text className="text-secondary">Remember your account? </Text>
            <Link href={'/auth/login'} className="underline">
              <Text className="font-semibold text-secondary">Login</Text>
            </Link>
          </View>
        </View>
      </View>
    </>
  )
}

export default LoginScreen