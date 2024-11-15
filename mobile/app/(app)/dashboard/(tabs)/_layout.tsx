import { Button } from '@/components/ui/button';
import { Home } from '@/lib/icons/Home';
import { Sun } from '@/lib/icons/Sun';
import { Plus } from '@/lib/icons/Plus';
import { useTheme } from '@react-navigation/native';
import { Tabs, useRouter } from 'expo-router';
import { View } from 'react-native';
import { NavigationService } from '@/services/navigation.service';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter()
  
  return (
    <View className="flex-1 w-full h-full relative pb-2">
      <Tabs screenOptions={NavigationService.getDefaultBottomTabScreenOptions({ tabBarActiveTintColor: colors.primary })}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Service History',
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <Sun color={color} />,
          }}
        />
      </Tabs>
      <Button
        onPress={() => router.push({ pathname: '/dashboard/add-service-history' })}
        className="absolute w-12 h-12 p-0 m-0 -ml-6 rounded-full left-1/2"
        style={{ bottom: insets.bottom + 35 }}
      >
        <Plus className='text-primary-foreground'></Plus>
      </Button>
    </View>
  );
}