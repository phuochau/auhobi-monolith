import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticationStack } from '../modules/authentication/authentication.stack';
import { OnboardingStack } from '../modules/onboarding/onboarding.stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MainStack } from '../modules/main/main.stack';
import { useAppDispatch } from '../store/hooks';
import { initAuth, signOut, fetchUserVehicles } from '../store/auth/auth.actions';
import { Supabase } from '../lib/supabase/client';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Authentication: undefined;
  Onboarding: undefined;
  Main: undefined;
};

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const {
    initializing,
    user,
    vehicles
  } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const initializeAuth = async () => {
      await dispatch(initAuth());
      if (user) {
        await dispatch(fetchUserVehicles())
      }
    };

    initializeAuth();
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  console.log('user', user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Authentication" component={AuthenticationStack} />
      ) : !vehicles || vehicles.length === 0 ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Main" component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
