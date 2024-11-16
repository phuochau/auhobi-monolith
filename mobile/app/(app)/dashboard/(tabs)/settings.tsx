import { ScrollView, View } from "react-native"
import { Text } from '@/components/ui/text'
import { Button } from "@/components/ui/button"
import { User } from '@/lib/icons/User'
import { LogOut } from '@/lib/icons/LogOut'
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { signOutAction } from "@/store/user/actions/sign-out.action"
import { Navigation } from "@/lib/navigation"
import { useRouter } from "expo-router"
import { selectCurrentAccount } from "@/store/user/user.selectors"

const Settings = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const currentAccount = useAppSelector(selectCurrentAccount)

  async function signOut() {
    const success = await dispatch(signOutAction())
    if (success) {
      Navigation.reset(router, { pathname: '/auth'})
    }
  }

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
          <Text>{currentAccount?.email}</Text>
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
          onPress={signOut}
        >
          <Text className="text-destructive">Sign Out</Text>
        </Button>
      </ScrollView>
    </View>
  )
}

export default Settings