import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Auth/Login';
import History from './SleepApp/History';
import SyncData from './SleepApp/SyncData';
import Stats from './SleepApp/Stats';
import Profile from './SleepApp/Profile';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

export const sendDate = (username: string, password: string, navigation: any) => {
    fetch('https://localhost:49153/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': username, 'password': password }),
    })
    .then(response => response.json())
    .then(data => {
        navigation.navigate('Bottom');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const BottomTabs = () => {
    return (
        <Bottom.Navigator screenOptions={({ route }: any) => ({
            tabBarIcon: ({ focused, color, size }: any) => {
                let iconName: string = "chevron-up";

                if (route.name === 'Sync') {
                    iconName = 'watch';
                } else if (route.name === 'History') {
                    iconName =  'bookmark';
                }
                else if (route.name === 'Statistics') {
                    iconName = 'stats-chart';
                }
                else if (route.name === 'My profile') {
                    iconName = 'person-circle';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#aba9bf',
                style: { backgroundColor: 'rgba(77, 30, 91, 0.75)' }
            }}
            initialRouteName="History"
        >
            <Bottom.Screen name="Sync" component={SyncData} />
            <Bottom.Screen name="History" component={History} />
            <Bottom.Screen name="Statistics" component={Stats} />
            <Bottom.Screen name="My profile" component={Profile} />

        </Bottom.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Bottom" component={BottomTabs} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

