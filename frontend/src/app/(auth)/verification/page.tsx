'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Loader } from "@/components/ui/loader"
import { ClientApi } from "@/graphql/client-api"
import { MutationAuthVerifyArgs } from "@/graphql/gql/generated-models"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Verfication() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  async function verifyToken() {
    const res = await ClientApi.mutate<Boolean, MutationAuthVerifyArgs>({
      name: 'authVerify',
      variables: { input: { token: token! } }
    })

    if (!res.errors && res.data) {
      router.push('/verification/success')
    } else {
      router.push(`/verification/failure?token=${token}`)
    }
  }

  useEffect(() => {
    if (token) {
      verifyToken()
    }
  }, [token, verifyToken])

  if (!token) {
    return router.push('/not-found')
  }

  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <div className="flex flex-col items-center">
            <Loader className="text-primary"></Loader>
        </div>
        <CardTitle className="text-2xl">Wait for few seconds</CardTitle>
        <CardDescription>
          We&apos;re verifying your account...
        </CardDescription>
      </CardHeader>
    </Card>
  )
}