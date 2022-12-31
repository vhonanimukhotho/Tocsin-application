import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabNavigation from './HomeTabNavigation';
import SignUpScreen from '../screeens/SignUpScreen';
import LoginScreen from '../screeens/LoginScreen';
import HomeScreen from '../screeens/HomeScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeTabNavigation} 
        options={{ title: 'HomeScreen',  headerShown: false }}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: '', headerShown: true }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: '', headerShown: true }}/>
  </Stack.Navigator>
  )
}

export default Router