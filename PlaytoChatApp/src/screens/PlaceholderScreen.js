// src/screens/PlaceholderScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';

export default function PlaceholderScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{route.name} Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 24,
    fontFamily: 'InterSemiBold', // <--- Changed
    color: COLORS.textGray,
  },
});