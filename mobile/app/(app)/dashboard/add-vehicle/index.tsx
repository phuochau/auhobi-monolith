import { View } from "react-native"
import { Text } from '@/components/ui/text'
import { Stack, useRouter } from "expo-router"
import { GraphQLError } from "@/components/graphql-error"
import { Card, CardContent } from "@/components/ui/card"
import { FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
 
const formSchema = z.object({
  saleChannel: z.string(),
  fileOrMediaIds: z.array(z.string())
})

const Orders = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [submitting, setSubmitting] = useState(false)
    const [response, setResponse] = useState<GraphQLResponse<any>>()

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
      defaultValues: {
        saleChannel: '',
        fileOrMediaIds: []
      },
      resolver: zodResolver(formSchema)
    })
 
    async function onSubmit(values: z.infer<typeof formSchema>) {
      setSubmitting(true)
      setResponse(undefined)
  
      // setResponse(res)
      // if (!res.errors && res.data) {
      //   // dispatch(login(res.data))
      //   // router.replace('/dashboard')
      // } else {
      //   setSubmitting(false)
      // }
    }

    return (
        <View className="w-full h-full">
            <Stack.Screen options={{ title: 'Import Order' }} />

            <Card className="w-full max-w-sm">
                <CardContent className="grid gap-4">
                    <GraphQLError nativeID="ImportOrderError" response={response}></GraphQLError>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="saleChannel"
                    />
                    <FormMessage nativeID="SaleChannelError" error={errors.saleChannel}></FormMessage>

                    <Button loading={submitting} disabled={submitting} className="w-full mt-2" onPress={handleSubmit(onSubmit)}>
                        <Text>Log In</Text>
                    </Button>
                </CardContent>
            </Card>
        </View>
    )
}

export default Orders