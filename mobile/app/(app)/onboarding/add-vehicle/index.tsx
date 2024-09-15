import { useRouter } from "expo-router"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AddVehicle from "@/components/form/add-vehicle"
import { UserVehicle } from "@/graphql/gql/generated-models"

const AddVehicleScreen = () => {
    const router = useRouter()
 
    function onSuccess(vehicle: UserVehicle) {
      if (vehicle) {
        router.replace('/dashboard')
      }
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
        </CardContent>
      </Card>
    )
}

export default AddVehicleScreen