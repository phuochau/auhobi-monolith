import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddCarScreen } from './add-car/add-car.screen';

const Stack = createNativeStackNavigator();

export const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="add-car" component={AddCarScreen} />
  </Stack.Navigator>
);
