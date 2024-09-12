import { AuthGuard } from '@/guards/AuthGuard';
import { Stack } from 'expo-router/stack';

export default function DashboardLayout() {
  return (
    <AuthGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="/order-import"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </AuthGuard>
  );
}