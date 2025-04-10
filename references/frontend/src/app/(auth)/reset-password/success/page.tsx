'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Verfication() {
  const router = useRouter()

  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <div className="flex flex-col items-center mb-2">
            <BadgeCheck size={48} className="text-primary"></BadgeCheck>
        </div>
        <CardTitle className="text-2xl">Congratulations</CardTitle>
        <CardDescription>
          Your password has already been reset. You can now login to the application.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={() => router.push('/login')}>Sign in</Button>
      </CardFooter>
    </Card>
  )
}