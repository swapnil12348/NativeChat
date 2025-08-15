// src/screens/ChatListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { CHATS } from '../constants/mockData';
import ChatItem from '../components/ChatItem';

export default function ChatListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.textGray} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.tabActive]}>
            <Text style={[styles.tabText, styles.tabTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Unread</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Archived</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={CHATS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem chat={item} onPress={() => navigation.navigate('Conversation', { chatId: item.id, userName: item.name, avatarUrl: item.avatarUrl })} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingHorizontal: 24, paddingTop: 12, paddingBottom: 8, backgroundColor: COLORS.background },
  headerTitle: { fontSize: 24, fontFamily: 'InterSemiBold', color: COLORS.textDark, lineHeight: 29 }, // <--- Changed
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 40,
    marginTop: 12,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, fontFamily: 'Inter', color: COLORS.textGray }, // <--- Changed
  tabsContainer: { flexDirection: 'row', gap: 8, marginTop: 16 },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tabActive: { backgroundColor: COLORS.primary, borderWidth: 0 },
  tabText: { fontFamily: 'Inter', fontSize: 12, color: COLORS.textDark }, // <--- Changed
  tabTextActive: { color: COLORS.white },
  listContent: { paddingHorizontal: 24, paddingTop: 10 },
});