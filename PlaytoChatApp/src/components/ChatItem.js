// src/components/ChatItem.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

export default function ChatItem({ chat, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: chat.avatarUrl }} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{chat.name}</Text>
        <Text
          style={[styles.lastMessage, chat.isUnread && styles.unreadMessage]}
          numberOfLines={1}
        >
          {chat.lastMessage}
        </Text>
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.timestamp}>{chat.timestamp}</Text>
        {chat.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>{chat.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  avatar: { width: 49, height: 49, borderRadius: 24.5 },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'InterSemiBold', // <--- Changed
    color: COLORS.textDark,
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 12,
    fontFamily: 'Inter', // <--- Changed
    color: COLORS.textGray,
  },
  unreadMessage: { color: COLORS.primary },
  metaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 8,
  },
  timestamp: {
    fontSize: 12,
    fontFamily: 'Inter', // <--- Changed
    color: COLORS.textGray,
  },
  unreadBadge: {
    backgroundColor: COLORS.primary,
    borderRadius: 11,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: 'Inter', // <--- Changed
  },
});