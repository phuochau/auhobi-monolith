import { View } from "react-native"
import { Stack } from "expo-router"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Text } from '@/components/ui/text'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const AddServiceHistory = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    console.log(event, selectedDate)
  };

    return (
        <View className="w-full h-full">
            <Stack.Screen options={{ title: 'Import Order' }} />

            <Card className="w-full">
                <CardContent className="grid gap-4">
                  <Button onPress={() => setOpen(true)}><Text>Open</Text></Button>
                  {open && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                  />}
                </CardContent>
            </Card>
        </View>
    )
}

export default AddServiceHistory