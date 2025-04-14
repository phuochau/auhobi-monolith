import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddCarScreen } from './add-car/add-car.screen';

const Stack = createNativeStackNavigator();

export type OnboardingStackParamList = {
    'add-car': undefined;
    'home': undefined;
};

export const OnboardingStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="add-car"
                component={AddCarScreen}
                options={{
                    title: 'Add Car',
                }}
            />
        </Stack.Navigator>
    );
};
