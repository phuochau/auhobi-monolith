import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { DigitInput } from "@/components/form-fields/digit-input"
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { confirmPasswordResetByCodeAction } from "@/store/user/actions/confirm-password-reset-by-code.action"
import React from "react"

const defaultValues = ['', '', '', '', '', '']

const formSchema = z.object({
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

const ForgotVerificationScreen = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const params = useLocalSearchParams<{ email: string }>();
  const [submitting, setSubmitting] = useState(false)
  const [code, setCode] = useState(defaultValues)
  const [response, setResponse] = useState<GraphQLResponse<Boolean>>()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const { payload } = await dispatch(confirmPasswordResetByCodeAction({
      email: params.email,
      code: code.join(''),
      password: values.password
    }))

    const response = payload as GraphQLResponse<Boolean>
    setResponse(response)
    if (!response.errors && response.data) {
      router.replace('/auth/forgot-password/verification/success')
    } else {
      setCode(defaultValues)
      setSubmitting(false)
    }
  }

  const valid = code.join('').length === 6

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: '' }} />
      <View className="w-full h-full flex flex-col p-6">
        <Text className="text-4xl mb-2 text-foreground font-semibold">Verify</Text>
        <Text className="text-muted-foreground mb-8">Please check your email inbox to get verification code. Enter the verification code and new passwords to update your password.</Text>
        <View className="flex-1 gap-4">
          <GraphQLError nativeID="ForgotPasswordVerificationError" response={response}></GraphQLError>

          <DigitInput onComplete={(code) => setCode(code)}></DigitInput>

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

          <Button size={'lg'} onPress={handleSubmit(onSubmit)} loading={submitting} disabled={submitting || !valid || !isValid} className="w-full mt-2">
            <Text>Update password</Text>
          </Button>
        </View>

        <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
          <Text className="text-muted-foreground">Remember your account? </Text>
          <Link href={'/auth/login'} className="underline">
            <Text className="font-semibold text-primary">Login</Text>
          </Link>
        </View>
      </View>
    </>
  )
}

export default ForgotVerificationScreen