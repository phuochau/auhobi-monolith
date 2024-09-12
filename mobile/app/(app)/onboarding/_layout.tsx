import { AuthGuard } from '@/guards/AuthGuard';
import { Stack } from 'expo-router/stack';

export default function OnboardingLayout() {
  return (
    <AuthGuard>
      <Stack>
        <Stack.Screen name="create-organization" options={{ headerShown: false }} />
      </Stack>
    </AuthGuard>
  );
}