import { GuestGuard } from '@/guards/GuestGuard';
import { Stack } from 'expo-router/stack';

export default function AuthLayout() {
  return (
    <GuestGuard>
      <Stack>
        <Stack.Screen name="/" />
        <Stack.Screen name="/login" options={{ headerShown: true, title: 'Login' }} />
        <Stack.Screen name="/register" options={{ headerShown: true, title: 'Register' }} />
        <Stack.Screen name="/verification" options={{ headerShown: true, title: 'Verify Account' }} />
      </Stack>
    </GuestGuard>
  );
}