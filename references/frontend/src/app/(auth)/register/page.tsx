"use client"

import Link from "next/link"
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { GraphQLAPI } from "@/graphql/api"
import { GraphQLError } from "@/components/graphql-error"
import { Loader } from "@/components/ui/loader"
import { ClientApi } from "@/graphql/client-api"
import { MutationAuthRegisterArgs, MutationAuthResendVerificationWithEmailArgs } from "@/graphql/gql/generated-models"
 
const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'Must have at least 1 character' }),
  lastName: z.string().optional(),
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

export default function Register() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [resending, setResending] = useState(false)
  const [formValue, setFormValue] = useState<z.infer<typeof formSchema>>()
  const [response, setResponse] = useState<GraphQLAPI.Response<Boolean>>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormValue(values)
    setSubmitting(true)
    setResponse(undefined)

    const res = await ClientApi.mutate<Boolean, MutationAuthRegisterArgs>({
      name: 'authRegister',
      variables: {
        input: values
      }
    })

    setResponse(res)
    if (!res.errors && res.data) {
      router.replace('/register/success')
    } else {
      setSubmitting(false)
    }
  }

  async function resendActivationLink() {
    if (formValue?.email) {
      setResending(true)

      const res = await ClientApi.mutate<Boolean, MutationAuthResendVerificationWithEmailArgs>({
        name: 'authResendVerificationWithEmail',
        variables: { 
          input: { email: formValue.email }
        }
      })
      
      setResponse(res)
      if (!res.errors && res.data) {
        router.replace('/verification/resent')
      } else {
        setResending(false)
      }
    }
  }

  let errorString = null
  if (response) {
    errorString = GraphQLAPI.getErrorString(response)
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Register</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            {!resending && <GraphQLError response={response}>
              {
                errorString && <a onClick={resendActivationLink} className="ml-1 underline cursor-pointer">Click here to resend activation link</a>
              }
            </GraphQLError>}

            {resending &&
              <div className="flex flex-col items-center justify-center gap-2">
                <Loader className="text-primary"></Loader>
                <div className="text-sm text-muted-foreground">Sending a new activation link...</div>
              </div>
            }

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

            <Button loading={submitting} disabled={submitting || resending} type="submit" className="w-full mt-2">
              Create an account
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
