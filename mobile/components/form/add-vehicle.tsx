import { Text } from '@/components/ui/text'
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { UserVehicle } from "@/graphql/gql/generated-models"
import { GraphQLError } from "@/components/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { addVehicleAsync } from '@/store/user/actions/add-vehicle-async.action'
 
const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Must have at least 1 character' }),
  customModel: z
    .string()
    .min(1, { message: 'Must have at least 1 character' })
})

export interface AddVehicleProps {
  onSuccess?: (userVehicle: UserVehicle) => any
}

const AddVehicle = (props: AddVehicleProps) => {
    const { onSuccess } = props
    const dispatch = useAppDispatch()
    const [submitting, setSubmitting] = useState(false)
    const [response, setResponse] = useState<GraphQLResponse<UserVehicle>>()

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: '',
        customModel: ''
      }
    })
 
    async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true)
      setResponse(undefined)
  
      const { payload } = await dispatch(addVehicleAsync({ userVehicle: values }))
      const response = payload as GraphQLResponse<UserVehicle>
      setResponse(response)
      if (!response.errors && response.data) {
        if (onSuccess) {
          onSuccess(response.data)
        }
      } 
      setSubmitting(false)
    }
    
    return (
      <>
        <GraphQLError nativeID="AddVehicleError" response={response}></GraphQLError>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <FormMessage nativeID="NameError" error={errors.name}></FormMessage>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="e.g: BMW 520i 2016 LCI"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="customModel"
        />
        <FormMessage nativeID="CustomModelError" error={errors.customModel}></FormMessage>

        <Button loading={submitting} disabled={submitting} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
          <Text>Add Vehicle</Text>
        </Button>
      </>
    )
}

export default AddVehicle