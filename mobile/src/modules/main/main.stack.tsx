import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticatedTabs from './home/home.tabs';
import { AddServiceHistory } from './add-service-history/add-service-history';
import { SummaryScreen } from './summary/summary.screen';

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  'home': undefined;
  'add-service-log': undefined;
  'summary': undefined;
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
      <Stack.Screen
        name="summary"
        component={SummaryScreen}
        options={{
          title: 'Summary',
        }}
      />
    </Stack.Navigator>
  );
};
