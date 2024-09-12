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
import { passwordValidation } from "@/lib/validations"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { GraphQLAPI } from "@/graphql/api"
import { HttpService } from "@/lib/http"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { GraphQLError } from "@/components/graphql-error"
 
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

export default function Login() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [response, setResponse] = useState<GraphQLAPI.Response<Boolean>>()
  const pathname = usePathname()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const res = await HttpService.post<GraphQLAPI.Response<Boolean>>({
      uri: `${pathname}/api`,
      data: values
    })

    setResponse(res)
    if (!res.errors && res.data) {
      router.replace('/dashboard')
    } else {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
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

            <Button loading={submitting} disabled={submitting} type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>
        <div className="text-center text-sm">
          <Link href="/reset-password" className="underline">
            Forgot password
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}