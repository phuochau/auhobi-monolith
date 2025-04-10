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

export default function ResentVerification() {
  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <div className="flex flex-col items-center mb-2">
            <Inbox size={48} className="text-primary"></Inbox>
        </div>
        <CardTitle className="text-2xl">Resent Activation Link</CardTitle>
        <CardDescription>
          The activation link has been sent successfully. Please check your email inbox to activate your account.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">
        <div className="mt-4 text-center text-sm">
          Already confirm your account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}