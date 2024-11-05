import { GuestGuard } from '@/guards/GuestGuard';
import { NavigationService } from '@/services/navigation.service';
import { Stack } from 'expo-router/stack';

export default function AuthLayout() {
  return (
    <GuestGuard>
      <Stack
        screenOptions={NavigationService.getDefaultScreenOptions()} />
    </GuestGuard>
  );
}