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
import { Controller, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { confirmPasswordResetByCodeAsync } from "@/store/user/actions/confirm-password-reset-by-code-async.action"

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
      formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        password: '',
        confirmPassword: ''
      }
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true)
      setResponse(undefined)
  
      const { payload } = await dispatch(confirmPasswordResetByCodeAsync({
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
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Verify Request</CardTitle>
          <CardDescription>
            Please check your email inbox to get verification code. Enter the verification code and new passwords to update your password
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <GraphQLError nativeID="RegisterError" response={response}></GraphQLError>

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

            <Button onPress={handleSubmit(onSubmit)} loading={submitting} disabled={submitting || !valid} className="w-full mt-2">
              <Text>Update password</Text>
            </Button>

            <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
              <Text className="text-sm">Remember your account? </Text>
              <Link href={'/auth/login'} className="underline">
                <Text className="font-semibold text-sm">Login</Text>
              </Link>
            </View>
        </CardContent>
      </Card>
    )
}

export default ForgotVerificationScreen