import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import TabRoutes from '../TabRoutes/TabRoutes';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <SafeAreaProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="TabRoutes" component={TabRoutes} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}