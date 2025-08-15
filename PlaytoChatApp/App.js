// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  // CORRECT: Load the Inter font using the imported Inter variables
  let [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}