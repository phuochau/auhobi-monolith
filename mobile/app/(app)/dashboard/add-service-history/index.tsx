import { ScrollView, View } from "react-native"
import { Stack, useRouter } from "expo-router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Text } from '@/components/ui/text'
import { z } from "zod"
import { Controller, FieldError, useForm } from "react-hook-form"
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
import { addServiceLog } from "@/store/service-log/actions/add-service-log.action"
import { selectCurrentVehicle } from "@/store/user/user.selectors"
import { MediaInput } from "@/components/form-fields/media-input"
import { Label } from "@/components/ui/label"
import { GarageInput } from "@/components/form-fields/garage-input"
import { GaragePickerResult, GarageType } from "@/components/dialogs/garare-picker-dialog"
import { BillInput } from "@/components/form-fields/bill-input"
import React from "react"
import { Textarea } from "@/components/ui/textarea"
import { LinkInput } from "@/components/form-fields/link-input"
import { Toast } from "@/components/ui/toast-config"

const formSchema = z.object({
  type: z.string(),
  description: z.string().optional(),
  date: z.string(),
  mileage: z.string(),
  garage: z.object({
    type: z.nativeEnum(GarageType),
    data: z.any()
  }).optional(),
  links: z.string().url().array().optional(),
  media: z.string().array().optional(),
  bills: z.object({
    total: z.number(),
    media: z.string()
  }).array().optional()
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

    const { payload } = await dispatch(addServiceLog({
      ...values,
      vehicle: vehicle!
    }))

    const response = payload as GraphQLResponse<ServiceLog>
    setResponse(response)
    if (!response.errors && response.data) {
      Toast.success('Successfully added the service history!');
      router.dismiss()
    }
    setSubmitting(false)
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: '' }} />
      <View className="w-full h-full flex flex-col">
        <ScrollView className="flex-1" contentContainerClassName="p-6">
          <Text className="text-4xl mb-2 text-foreground font-semibold">Add Service History</Text>
          <Text className="text-muted-foreground mb-8">It's better to remember everything</Text>
          <View className="flex-1 gap-4">
            <GraphQLError nativeID="AddServiceHistoryError" response={response}></GraphQLError>

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

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Textarea
                  placeholder="Description (optional)"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            <FormMessage nativeID="DescriptionError" error={errors.description}></FormMessage>
            
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
                  keyboardType="numeric"
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
                <GarageInput
                  value={(value as GaragePickerResult | undefined)}
                  textInput={{
                    onBlur: onBlur,
                    placeholder: "Garage (optional)"
                  }}
                  onChange={onChange}
                />
              )}
              name="garage"
            />
            <FormMessage nativeID="GarageError" error={errors.garage as FieldError}></FormMessage>

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Textarea
                  placeholder="Description"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            <FormMessage nativeID="DescriptionError" error={errors.description}></FormMessage>

            <Label nativeID="LinkLabel">Links</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <LinkInput
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
              name="links"
            />
            <FormMessage nativeID="LinkError" error={errors?.links?.length ? errors.links.pop!() : undefined}></FormMessage>

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
            <FormMessage nativeID="MediaError" error={errors?.media?.length ? errors.media.pop!() : undefined}></FormMessage>

            <Label nativeID="BillsLabel">Bills</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <BillInput
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
              name="bills"
            />
            <FormMessage nativeID="BillsError" error={errors?.bills?.length ? errors.bills.pop!()?.total : undefined}></FormMessage>

            <Button loading={submitting} disabled={submitting} size={'lg'} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
              <Text>Save</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default AddServiceHistory