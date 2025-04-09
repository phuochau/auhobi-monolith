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
import { Stack, useRouter } from "expo-router"
import React from "react"
import { View } from "react-native"

export default function VerificationSuccessScreen() {
  const router = useRouter()

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: '' }} />
      <View className="p-6">
        <Card className="w-full text-center">
          <CardHeader>
            <View className="flex flex-col items-center mb-2">
                <BadgeCheck size={48} className="text-primary"></BadgeCheck>
            </View>
            <CardTitle className="text-2xl">Congratulations</CardTitle>
            <CardDescription>
              Your email has already been confirmed. You can now login to the application.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button size={'lg'} className="w-full" onPress={() => router.push({ pathname: '/auth/login' })}>
                <Text>Sign In</Text>
            </Button>
          </CardFooter>
        </Card>
      </View>
    </>
  )
}