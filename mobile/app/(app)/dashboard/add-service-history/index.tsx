import { View } from "react-native"
import { Stack, useRouter } from "expo-router"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Text } from '@/components/ui/text'
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { ServiceLog, ServiceLogType } from "@/graphql/gql/generated-models"
import { FormMessage } from "@/components/ui/form"
import { DateTimeInput } from "@/components/form-fields/date-time-input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DataUtils } from "@/lib/data-utils"
import { addServiceLogAsync } from "@/store/service-log/actions/add-service-log-async.action"
import { selectCurrentVehicle } from "@/store/user/user.selectors"
import { MediaInput } from "@/components/form-fields/media-input"
import { Label } from "@/components/ui/label"
 
const formSchema = z.object({
  date: z.string(),
  mileage: z.string(),
  type: z.string(),
  media: z.string().array().optional(),
  garage: z.string().optional(),
  bills: z.string().array().optional()
})

const AddServiceHistory = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const vehicle = useAppSelector(selectCurrentVehicle)
  const [submitting, setSubmitting] = useState(false)
  const [response, setResponse] = useState<GraphQLResponse<ServiceLog>>()
  const types = DataUtils.enumToKeyValueArray(ServiceLogType)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: (new Date()).toISOString()
    }
  })

  function getLabelFromTypeValue(value: string) {
    return types.find(type => type[1] === value)?.[0] || ''
  }
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)
    setResponse(undefined)

    const { payload } = await dispatch(addServiceLogAsync({
      serviceLog: {
        date: values.date,
        type: values.type as ServiceLogType,
        mileage: parseInt(values.mileage),
        vehicle: vehicle!.id
      }
    }))

    const response = payload as GraphQLResponse<ServiceLog>
    setResponse(response)
    if (!response.errors && response.data) {
      // TODO: Show Toast message
      router.dismiss()
    }
    setSubmitting(false)
  }

  return (
    <View className="w-full h-full">
        <Stack.Screen options={{ title: 'Import Order' }} />

        <Card className="w-full">
          <CardHeader>
            <CardDescription>Add a service history of your car</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
              <GraphQLError nativeID="LoginError" response={response}></GraphQLError>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DateTimeInput
                    placeholder="Date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="date"
              />
              <FormMessage nativeID="DateError" error={errors.date}></FormMessage>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Mileage"
                    keyboardType="number-pad"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="mileage"
              />
              <FormMessage nativeID="MileageError" error={errors.mileage}></FormMessage>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Select
                    value={value ? { value, label: getLabelFromTypeValue(value) } : undefined}
                    onValueChange={(option) => {
                      onChange(option?.value)
                      onBlur()
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={'Select Type'}
                        value={value}
                      />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {types.map(type =>
                        <SelectItem key={type[1]} label={type[0]} value={type[1]!}>
                          {type[0]}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
                name="type"
              />
              <FormMessage nativeID="TypeError" error={errors.type}></FormMessage>

              <Label nativeID="MediaLabel">Images</Label>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MediaInput
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                  />
                )}
                name="media"
              />

              <Button loading={submitting} disabled={submitting} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
                <Text>Save</Text>
              </Button>

          </CardContent>
        </Card>
    </View>
  )
}

export default AddServiceHistory