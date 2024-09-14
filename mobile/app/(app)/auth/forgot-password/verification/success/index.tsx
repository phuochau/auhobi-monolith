import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { BadgeCheck } from "@/lib/icons/BadgeCheck"
import { useRouter } from "expo-router"

export default function VerificationSuccessScreen() {
  const router = useRouter()

  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader>
        <div className="flex flex-col items-center mb-2">
            <BadgeCheck size={48} className="text-primary"></BadgeCheck>
        </div>
        <CardTitle className="text-2xl">Congratulations</CardTitle>
        <CardDescription>
          Your password has been reset. You can now login to the application.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onPress={() => router.push({ pathname: '/auth/login' })}>
            <Text>Login</Text>
        </Button>
      </CardFooter>
    </Card>
  )
}