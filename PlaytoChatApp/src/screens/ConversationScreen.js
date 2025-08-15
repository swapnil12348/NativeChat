// src/screens/ConversationScreen.js
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { MESSAGES } from '../constants/mockData';
import MessageBubble from '../components/MessageBubble';
import HeaderButton from '../components/HeaderButton';

export default function ConversationScreen({ route, navigation }) {
  const { chatId, userName, avatarUrl } = route.params;
  const messages = MESSAGES[chatId] || [];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Image source={{ uri: avatarUrl }} style={styles.headerAvatar} />
          <Text style={styles.headerTitleText}>{userName}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <HeaderButton iconName="videocam-outline" />
          
          {/* --- MODIFIED THIS BUTTON --- */}
          <HeaderButton 
            iconName="call-outline" 
            onPress={() => navigation.navigate('Call', { userName, avatarUrl })}
          />
          
          <HeaderButton iconName="ellipsis-vertical" />
        </View>
      ),
      headerTitleAlign: 'left',
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.background },
    });
  }, [navigation, userName, avatarUrl]);


  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <FlatList
          data={[...messages].reverse()} // Reverse for inverted list
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageBubble message={item} />}
          style={styles.messageList}
          contentContainerStyle={styles.messageListContent}
          inverted
        />

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="add" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <TextInput
            placeholder="Type message..."
            style={styles.textInput}
            placeholderTextColor={COLORS.textGray}
          />
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="mic-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  headerTitleContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerAvatar: { width: 32, height: 32, borderRadius: 16 },
  headerTitleText: { fontFamily: 'InterSemiBold', fontSize: 16, color: COLORS.textDark },
  headerRightContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  messageList: { flex: 1 },
  messageListContent: { paddingHorizontal: 12, paddingVertical: 12 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    margin: 12,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    fontFamily: 'Inter',
    color: COLORS.textDark,
  },
  iconButton: { padding: 4 },
  sendButton: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});