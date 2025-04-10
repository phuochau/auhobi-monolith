import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticationStack } from '../modules/authentication/authentication.stack';
import { OnboardingStack } from '../modules/onboarding/onboarding.stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MainStack } from '../modules/main/main.stack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isAuthenticated, isOnboarded } = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Authentication" component={AuthenticationStack} />
      ) : !isOnboarded ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Main" component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
