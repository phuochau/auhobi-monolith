'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GraphQLAPI } from "@/graphql/api"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { passwordValidation } from "@/lib/validations"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { GraphQLError } from "@/components/graphql-error"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ClientApi } from "@/graphql/client-api"
import { MutationAuthConfirmPasswordResetArgs } from "@/graphql/gql/generated-models"

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

export default function RequestPasswordVerfication() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [response, setResponse] = useState<GraphQLAPI.Response<Boolean>>()
  const token = searchParams.get('token')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const res = await ClientApi.mutate<Boolean, MutationAuthConfirmPasswordResetArgs>({
      name: 'authConfirmPasswordReset',
      variables: {
        input: {
          token: token!,
          ...values
        }
      }
    })

    setResponse(res)
    if (!res.errors && res.data) {
      router.replace('/reset-password/success')
    } else {
      setSubmitting(false)
    }
  }

  if (!token) {
    return router.push('/not-found')
  }

  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <CardTitle className="text-xl">Change Password</CardTitle>
        <CardDescription>
          Enter your new password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <GraphQLError response={response}></GraphQLError>

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button loading={submitting} disabled={submitting} type="submit" className="w-full mt-2">
              Update Password
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}