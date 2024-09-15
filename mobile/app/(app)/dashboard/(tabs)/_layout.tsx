import { Button } from '@/components/ui/button';
import { Home } from '@/lib/icons/Home';
import { Sun } from '@/lib/icons/Sun';
import { Plus } from '@/lib/icons/Plus';
import { useTheme } from '@react-navigation/native';
import { Tabs, useRouter } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  const { colors } = useTheme();
  const router = useRouter()
  
  return (
    <View className="w-full h-full relative">
      <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
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
      <Button onPress={() => router.push({ pathname: '/dashboard/add-service-history' })} className="absolute w-12 h-12 p-0 m-0 -ml-6 rounded-full bottom-6 left-1/2">
        <Plus className='text-primary-foreground'></Plus>
      </Button>
    </View>
  );
}