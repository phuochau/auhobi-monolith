import { OnboardingGuard } from '@/guards/OnboardingGuard';
import { NavigationService } from '@/services/navigation.service';
import { Stack } from 'expo-router/stack';

export default function OnboardingLayout() {
  return (
    <OnboardingGuard>
      <Stack screenOptions={NavigationService.getDefaultScreenOptions()} />
    </OnboardingGuard>
  );
}