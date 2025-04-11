import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticationStack } from '../modules/authentication/authentication.stack';
import { OnboardingStack } from '../modules/onboarding/onboarding.stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { MainStack } from '../modules/main/main.stack';
import { useAppDispatch } from '../store/hooks';
import { initAuth, signOut } from '../store/auth/auth.actions';
import { Supabase } from '../lib/supabase/client';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const {
    initializing,
    user,
    isOnboarded
  } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(initAuth());
    const { data: authListener } = Supabase.client.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        dispatch(signOut());
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        dispatch(initAuth());
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
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
