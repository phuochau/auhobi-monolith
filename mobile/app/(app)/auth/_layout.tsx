import { GuestGuard } from '@/guards/GuestGuard';
import { Stack } from 'expo-router/stack';

export default function AuthLayout() {
  return (
    <GuestGuard>
      <Stack>
        <Stack.Screen name="/" />
        <Stack.Screen name="/login" options={{ headerShown: true, title: 'Login' }} />
        <Stack.Screen name="/register" options={{ headerShown: true, title: 'Register' }} />
        <Stack.Screen name="/register/verification" options={{ headerShown: true, title: 'Confirmation' }} />
        <Stack.Screen name="/register/verification/success" options={{ headerShown: true, title: 'Confirmed' }} />
        <Stack.Screen name="/forgot-password" options={{ headerShown: true, title: 'Forgot Password' }} />
        <Stack.Screen name="/forgot-password/verification" options={{ headerShown: true, title: 'Confirmation' }} />
        <Stack.Screen name="/forgot-password/verification/success" options={{ headerShown: true, title: 'Confirmed' }} />
      </Stack>
    </GuestGuard>
  );
}