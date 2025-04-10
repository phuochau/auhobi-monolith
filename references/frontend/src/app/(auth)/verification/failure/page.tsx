'use client'

import { GraphQLError } from "@/components/graphql-error"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GraphQLAPI } from "@/graphql/api"
import { ClientApi } from "@/graphql/client-api"
import { MutationAuthResendVerificationArgs } from "@/graphql/gql/generated-models"
import { CircleX } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function VerficationFailure() {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [response, setResponse] = useState<GraphQLAPI.Response<Boolean>>()
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')

  async function resendVerification() {
    setSubmitting(true)
    setResponse(undefined)
    
    const res = await ClientApi.mutate<Boolean, MutationAuthResendVerificationArgs>({
      name: 'authResendVerification',
      variables: {
        input: { token: token! }
      }
    })

    setResponse(res)
    if (!res.errors && res.data) {
      router.push('/verification/resent')
    } else {
      setSubmitting(false)
    }
  }
  
  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <div className="flex flex-col items-center mb-2">
            <CircleX size={48} className="text-destructive"></CircleX>
        </div>
        <CardTitle className="text-2xl">Failed to verify your account</CardTitle>
        <CardDescription>
          The link has been expired or your verification is invalid. Please try to register again or login!
        </CardDescription>
        <GraphQLError response={response}></GraphQLError>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" loading={submitting} onClick={resendVerification}>Send activation link again</Button>
      </CardFooter>
    </Card>
  )
}