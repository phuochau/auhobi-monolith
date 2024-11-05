import { GuestGuard } from '@/guards/GuestGuard';
import { Stack } from 'expo-router/stack';

export default function AuthLayout() {
  return (
    <GuestGuard>
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: true,
          headerShadowVisible: false
        }} />
    </GuestGuard>
  );
}