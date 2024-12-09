import { Stack, useRouter } from "expo-router"
import AddVehicle from "@/components/forms/add-vehicle"
import { UserVehicle } from "@/graphql/gql/generated-models"
import { View, Text } from "react-native"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/hooks/store.hooks"
import { Navigation } from "@/lib/navigation"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { signOutAction } from "@/store/user/actions/sign-out.action"

const AddVehicleScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
 
    function onSuccess(vehicle: UserVehicle) {
      if (vehicle) {
        Navigation.resetToDashboard(router)
      }
    }

    function onSwitchAccount() {
      dispatch(signOutAction())
      Navigation.resetToAuth(router)
    }

    return (
      <SafeAreaView>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="w-full h-full flex flex-col p-6">
          <Text className="text-4xl mb-2 text-foreground font-semibold">Add Your Car</Text>
          <Text className="text-muted-foreground mb-8">Let's choose your dream car.</Text>
          <View className="gap-4 flex-1">
            <AddVehicle onSuccess={onSuccess} />
          </View>

          <View className="text-center flex flex-row items-center justify-center flex-wrap">
            <Button onPress={onSwitchAccount} variant={'link'} className="underline">
              <Text className="font-semibold text-sm underline text-primary">Switch to another account</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    )
}

export default AddVehicleScreen