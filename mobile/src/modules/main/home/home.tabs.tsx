import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { ServiceHistoriesScreen } from './service-histories/service-histories.screen';
import { SettingsScreen } from './settings/settings.screen';

const Tab = createBottomTabNavigator();

const AddLogButton = () => (
  <TouchableOpacity style={{
    position: 'absolute', bottom: 30, alignSelf: 'center',
    backgroundColor: '#007AFF', padding: 15, borderRadius: 50, zIndex: 10
  }}>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>+ Log</Text>
  </TouchableOpacity>
);

const AuthenticatedTabs = () => {
  return (
    <>
      <AddLogButton />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="service-histories" component={ServiceHistoriesScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default AuthenticatedTabs;
