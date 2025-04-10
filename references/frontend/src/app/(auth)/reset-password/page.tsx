'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { GraphQLAPI } from "@/graphql/api"
import { GraphQLError } from "@/components/graphql-error"
import { ClientApi } from "@/graphql/client-api"
import { MutationAuthRequestPasswordResetArgs } from "@/graphql/gql/generated-models"
 
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Must have at least 1 character' })
    .email({
      message: 'Must be a valid email',
    })
})

export default function ForgotPassword() {
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [response, setResponse] = useState<GraphQLAPI.Response<Boolean>>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const res = await ClientApi.mutate<Boolean, MutationAuthRequestPasswordResetArgs>({
      name: 'authRequestPasswordReset',
      variables: { input: values }
    })

    setResponse(res)
    if (!res.errors && res.data) {
      router.replace('/reset-password/requested')
    } else {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email below to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <GraphQLError response={response}></GraphQLError>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" loading={submitting} disabled={submitting} className="w-full mt-2">
                    Reset Password
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