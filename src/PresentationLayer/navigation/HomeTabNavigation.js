import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Foundation, FontAwesome, MaterialIcons, Octicons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from '../screeens/LoginScreen';
import SignUpScreen from '../screeens/SignUpScreen';
import HomeScreen from '../screeens/HomeScreen';
import { COLOURS } from '../../../assets/utilities/COLOURS';

const BottonTabOptions = {
    "tabBarHideOnKeyboard": true,
    "tabBarActiveTintColor": 'white',
    "tabBarInactiveTintColor": 'lightgray',
    "tabBarShowLabel": true,
    "tabBarLabelPosition": "beside-icon",
    "tabBarStyle": [
      {
        "display": "flex",
        "backgroundColor": COLOURS.primary,
        "borderTopColor": 'black',
        "borderColor": "green",
        padding: 15,
        paddingBottom: 20,
        margin: 5,
        borderRadius: 15,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
      },
      null
    ],
    tabBarLabelStyle: { fontWeight: '700'},
  }

const focusedColor =  COLOURS.gold;
const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={BottonTabOptions}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name="home" size={24} color={focused?focusedColor:color} />
        ),headerShown: false
      }}
      />
      <Tab.Screen name="Alerts" component={SignUpScreen} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="alarm-light" size={24} color={focused?focusedColor:color} />
            ),headerShown: false
        }}
      />
      <Tab.Screen name="Reports" component={LoginScreen} 
        options={{
          tabBarIcon: ({ color, focused }) => (
          <FontAwesome name="list-ul" size={24} color={focused?focusedColor:color} />
            ),headerShown: false
        }}
      />

      <Tab.Screen name="Profile" component={LoginScreen} 
        options={{
          tabBarIcon: ({ color, focused }) => (
          <Ionicons name="ios-person" size={24} color={focused?focusedColor:color} />
            ),headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabNavigation