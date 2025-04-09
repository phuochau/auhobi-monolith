import { AuthGuard } from '@/guards/AuthGuard';
import { NavigationService } from '@/services/navigation.service';
import { Stack } from 'expo-router/stack';

export default function DashboardLayout() {
  return (
    <AuthGuard>
      <Stack screenOptions={NavigationService.getDefaultScreenOptions()}>
        <Stack.Screen name="(tabs)" options={NavigationService.getDefaultScreenOptions({ headerShown: false })} />
        <Stack.Screen
          name="/add-service-history"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </AuthGuard>
  );
}