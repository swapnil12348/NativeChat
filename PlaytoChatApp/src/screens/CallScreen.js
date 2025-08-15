// src/screens/CallScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/colors';
import HeaderButton from '../components/HeaderButton';

export default function CallScreen({ route }) {
  const { userName, avatarUrl } = route.params;
  const navigation = useNavigation();
  const [callDuration, setCallDuration] = useState(20); // Start at 0:20 as in the design

  // Effect to handle the call timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to format the time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <HeaderButton iconName="arrow-back" onPress={() => navigation.goBack()} />
        <View style={styles.headerCenter}>
          <Ionicons name="call-outline" size={16} color={COLORS.textDark} />
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.timer}>{formatTime(callDuration)}</Text>
        </View>
        <HeaderButton iconName="person-add-outline" />
      </View>

      {/* Main Content: Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </View>

      {/* Footer Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="videocam-outline" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="volume-high-outline" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <MaterialCommunityIcons name="microphone-off" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.controlButton, styles.endCallButton]} 
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="phone-hangup" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  headerCenter: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontFamily: 'InterSemiBold',
    color: COLORS.textDark,
  },
  timer: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: COLORS.textGray,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 50,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  controlButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  endCallButton: {
    backgroundColor: '#B52525',
  },
});