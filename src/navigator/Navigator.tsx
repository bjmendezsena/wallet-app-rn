import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { MainNavigator } from './MainNavigator';
import { WelcomeScreen } from '../screens/welcome/WelcomeScreen';
import { AuthContext } from '../context/authContext/AuthContext';

export type RootStackParams = {
    WelcomeScreen: undefined;
    LoginScreen: undefined;
    RegisterScreen: undefined;
    MainNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const headerOptions = {
    headerShown: false,
    cardStyle: {
        backgroundColor: 'white'
    }
};

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={headerOptions}
                name="WelcomeScreen"
                component={WelcomeScreen}
            />
            <Stack.Screen
                options={headerOptions}
                name="MainNavigator"
                component={MainNavigator}
            />
        </Stack.Navigator>
    );
};
