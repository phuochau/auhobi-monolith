import "./assets/styles/styles.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
