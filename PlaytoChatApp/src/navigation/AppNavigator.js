// src/navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import CallScreen from '../screens/CallScreen'; // You correctly added this import

import ChatListScreen from '../screens/ChatListScreen';
import ConversationScreen from '../screens/ConversationScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          height: 84,
          paddingTop: 10,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter',
          fontSize: 12,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen
        name="Community"
        component={PlaceholderScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Discover"
        component={PlaceholderScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="compass-outline" size={size} color={color} /> }}
      />
       <Tab.Screen
        name="Create"
        component={PlaceholderScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatListScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="chatbubbles" size={size} color={color} /> }}
      />
       <Tab.Screen
        name="Profile"
        component={PlaceholderScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
      
      
      <Stack.Screen name="Call" component={CallScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}