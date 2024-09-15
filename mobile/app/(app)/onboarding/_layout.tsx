import { OnboardingGuard } from '@/guards/OnboardingGuard';
import { Stack } from 'expo-router/stack';

export default function OnboardingLayout() {
  return (
    <OnboardingGuard>
      <Stack id='onboarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/add-vehicle" options={{ headerShown: false }} />
      </Stack>
    </OnboardingGuard>
  );
}