// src/components/HeaderButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function HeaderButton({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons name={iconName} size={24} color={COLORS.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
});