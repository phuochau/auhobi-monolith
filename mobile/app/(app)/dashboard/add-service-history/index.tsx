import { View } from "react-native"
import { Stack, useRouter } from "expo-router"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Text } from '@/components/ui/text'
import { date, z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { GraphQLError } from "@/components/form-fields/graphql-error"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/hooks/store.hooks"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { ServiceLog, ServiceLogType } from "@/graphql/gql/generated-models"
import { FormMessage } from "@/components/ui/form"
import { DateTimeInput } from "@/components/form-fields/date-time-input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DataUtils } from "@/lib/data-utils"
import { cn } from "@/lib/utils"
 
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
      date: ''
    }
  })

  function getLabelFromTypeValue(value: string) {
    return types.find(type => type[1] === value)?.[0] || ''
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
                    onValueChange={(option) => onChange(option?.value)}
                  >
                    <SelectTrigger>
                      <SelectValue
                        className={cn("text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground", !value?.length && 'text-muted-foreground')}
                        placeholder={'Select Type'}
                      />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {types.map(type =>
                        <SelectItem label={type[0]} value={type[1]!}>
                          {type[0]}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
                name="type"
              />
              <FormMessage nativeID="TypeError" error={errors.type}></FormMessage>

          </CardContent>
        </Card>
    </View>
  )
}

export default AddServiceHistory