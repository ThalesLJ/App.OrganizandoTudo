import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from 'react-native-vector-icons';

import HomeScreen from './HomeScreen';
import ConfigsScreen from './ConfigsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {

    const navigation = useNavigation();

    React.useEffect(
        () => {
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
            }), [navigation]
        }
    );

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = 'home';
                    let iconColor = '#35C0ED';

                    if (route.name === 'Notas') {
                        iconName = 'book';
                        iconColor = focused ? '#35C0ED': '#C7C7C7';
                    } else {
                        iconName = 'settings';
                        iconColor = focused ? '#35C0ED': '#C7C7C7';
                    }

                    return <Feather name={iconName} color={iconColor} size={20} />
                },
                tabBarActiveTintColor: '#35C0ED',
                tabBarInactiveTintColor: '#C7C7C7',
                tabBarColor: '#35C0ED'
            })}>
                <Tab.Screen name="Notas" component={HomeScreen} />
                <Tab.Screen name="Configs" component={ConfigsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}