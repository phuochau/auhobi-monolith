import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticatedTabs from './home/home.tabs';
import { AddServiceHistory } from './add-service-history/add-service-history';

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  'home': undefined;
  'add-service-log': undefined;
};

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={AuthenticatedTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="add-service-log"
        component={AddServiceHistory}
        options={{
          presentation: 'modal',
          title: 'Add Service History',
        }}
      />
    </Stack.Navigator>
  );
};
