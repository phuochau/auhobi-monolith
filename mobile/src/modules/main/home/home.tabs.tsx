import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { ServiceHistoriesScreen } from './service-histories/service-histories.screen';
import { SettingsScreen } from './settings/settings.screen';
import { MainStackParamList } from '../main.stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AddLogButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <TouchableOpacity
        style={{
          position: 'absolute', bottom: 30, alignSelf: 'center',
          backgroundColor: '#007AFF', padding: 15, borderRadius: 50, zIndex: 10
        }}
        onPress={() => navigation.navigate('add-service-log')}
      >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>+ Log</Text>
    </TouchableOpacity>
  )
};

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
