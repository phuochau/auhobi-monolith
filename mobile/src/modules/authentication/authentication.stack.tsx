import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from './welcome/welcome.screen';
import { SignInScreen } from './sign-in/sign-in.screen';
import { SignUpScreen } from './sign-up/sign-up.screen';

const Stack = createNativeStackNavigator();

export const AuthenticationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="welcome" component={WelcomeScreen} />
    <Stack.Screen name="sign-in" component={SignInScreen} />
    <Stack.Screen name="sign-up" component={SignUpScreen} />
  </Stack.Navigator>
);
