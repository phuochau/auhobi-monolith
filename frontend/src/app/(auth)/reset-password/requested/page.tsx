import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Inbox } from "lucide-react"
import Link from "next/link"

export default function RequestPasswordResetSuccess() {
  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <div className="flex flex-col items-center mb-2">
            <Inbox size={48} className="text-primary"></Inbox>
        </div>
        <CardTitle className="text-2xl">One more step</CardTitle>
        <CardDescription>
          Your request has been created successfully. Please check your email inbox to reset your password.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">
        <div className="mt-4 text-center text-sm">
          Already reset your password?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}