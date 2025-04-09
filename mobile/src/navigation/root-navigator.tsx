import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticationStack } from '../modules/authentication/authentication.stack';
import { OnboardingStack } from '../modules/onboarding/onboarding.stack';
import AuthenticatedTabs from '../modules/main/home/home.tabs';

const Stack = createNativeStackNavigator();

// For now, let's mock auth state:
const isAuthenticated = true;
const isOnboarded = true;

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Authentication" component={AuthenticationStack} />
      ) : !isOnboarded ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Authenticated" component={AuthenticatedTabs} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
