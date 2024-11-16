import { ScrollView, View } from "react-native"
import { Text } from '@/components/ui/text'
import { Button } from "@/components/ui/button"
import { User } from '@/lib/icons/User'
import { LogOut } from '@/lib/icons/LogOut'

const Settings = () => {
    return (
        <View className="flex-1 flex flex-col">
          <ScrollView className={'flex-1'}>
            <Button
              variant={'menu'}
              size={'menu'}
              className="px-20"
              leftIcon={
                <View className="bg-secondary rounded-md p-2">
                  <User className="text-foreground" />
                </View>
              }
            >
              <Text>hau.vophuoc@gmail.com</Text>
            </Button>
            <Button
              variant={'menu'}
              size={'menu'}
              className="px-20"
              leftIcon={
                <View className="bg-secondary rounded-md p-2">
                <LogOut className="text-destructive" />
                </View>
              }
            >
              <Text className="text-destructive">Sign Out</Text>
            </Button>
          </ScrollView>
        </View>
    )
}

export default Settings