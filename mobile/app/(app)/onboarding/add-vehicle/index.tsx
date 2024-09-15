import { useRouter } from "expo-router"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AddVehicle from "@/components/form/add-vehicle"
import { UserVehicle } from "@/graphql/gql/generated-models"
import { View, Text } from "react-native"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/hooks/store.hooks"
import { logout } from "@/store/user/user.slice"
import { Navigation } from "@/lib/navigation"

const AddVehicleScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
 
    function onSuccess(vehicle: UserVehicle) {
      if (vehicle) {
        Navigation.reset(router, { pathname: '/dashboard'})
      }
    }

    function onSwitchAccount() {
      dispatch(logout())
      router.push('/auth/login')
    }

    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Add Vehicle</CardTitle>
          <CardDescription>
            Add your first vehicle
          </CardDescription>
        </CardHeader>
        <CardContent>
            <AddVehicle onSuccess={onSuccess} />

          <View className="mt-4 text-center flex flex-row items-center justify-center flex-wrap">
            <Button onPress={onSwitchAccount} variant={'link'} className="underline">
              <Text className="font-semibold text-sm">Switch to another account</Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    )
}

export default AddVehicleScreen