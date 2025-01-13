import { Text } from '@/components/ui/text'
import { Button } from "@/components/ui/button"
import { useForm, Controller, FieldError } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { UserVehicle, VehicleModel } from "@/graphql/gql/generated-models"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { FormMessage } from "@/components/ui/form"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { addVehicleAction } from '@/store/user/actions/add-vehicle.action'
import { VehicleInput } from '../form-fields/vehicle-input'
import { Image, ImageSourcePropType, ScrollView, View } from 'react-native'
import _ from 'lodash'

const VEHICLE_PLACEHOLDER = require('@/assets/icons/car-side-view.png')

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Must have at least 1 character' }),
  vehicle: z.any()
})

export type AddVehicleProps = {
  onSuccess: (userVehicle: UserVehicle) => any
}

const AddVehicle = (props: AddVehicleProps) => {
  const { onSuccess } = props
  const dispatch = useAppDispatch()
  const [vehicleImage, setVehicleImage] = useState<ImageSourcePropType | undefined>(VEHICLE_PLACEHOLDER)
  const [submitting, setSubmitting] = useState(false)
  const [response, setResponse] = useState<GraphQLResponse<UserVehicle>>()

  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof formSchema>>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const { payload } = await dispatch(addVehicleAction({
      userVehicle: {
        name: values.name,
        model: values.vehicle?.model,
        customModel: values.vehicle?.customModel
      }
    }))
    const response = payload as GraphQLResponse<UserVehicle>
    setResponse(response)
    if (!response.errors && response.data) {
      onSuccess(response.data)
    }
    setSubmitting(false)
  }

  function onSelectModel(item: VehicleModel): void {
    console.log('onSelectModel', item)
    if (item?.images?.length) {
      setVehicleImage({ uri: item.images[0] })
    } else {
      setVehicleImage(VEHICLE_PLACEHOLDER)
    }
  }

  const values = getValues()
  const formValid = isValid && (values?.vehicle?.model || values?.vehicle?.customModel?.length)

  return (
    <View className="w-full h-full flex flex-col">
      <ScrollView className="flex-1">

        <View className='gap-4'>
          {/* <View className='flex flex-col items-center justify-center'>
            <Image
              className='w-full h-48'
              source={vehicleImage}
              resizeMode='cover'
            />
          </View> */}
          <GraphQLError nativeID="AddVehicleError" response={response}></GraphQLError>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Nick Name of your car (e.g: Speed Hunter)"
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
              <VehicleInput
                value={value}
                onBlur={onBlur}
                onChange={(v) => {
                  onChange(v)
                  trigger('vehicle')
                }}
                onSelectModel={onSelectModel}
              />
            )}
            name="vehicle"
          />
          <FormMessage nativeID="VehicleError" error={errors.vehicle as FieldError}></FormMessage>
        </View>
      </ScrollView>

      <Button size={'lg'} loading={submitting} disabled={submitting || !formValid} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
        <Text>Add Car</Text>
      </Button>
    </View>
  )
}

export default AddVehicle