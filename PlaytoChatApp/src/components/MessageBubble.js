// src/components/MessageBubble.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../constants/colors';

export default function MessageBubble({ message }) {
  const isMyMessage = message.sender === 'me';

  return (
    <View style={[styles.container, isMyMessage ? styles.myMessageContainer : styles.otherMessageContainer]}>
      <View style={[styles.bubble, isMyMessage ? styles.myBubble : styles.otherBubble]}>
        {message.image && <Image source={{ uri: message.image }} style={styles.image} />}
        <Text style={[styles.text, isMyMessage ? styles.myText : styles.otherText]}>
          {message.text}
        </Text>
      </View>
      <Text style={styles.timestamp}>{message.timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    maxWidth: '75%',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  bubble: {
    padding: 12,
    borderRadius: 16,
  },
  myBubble: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 4,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter', // <--- Changed
    lineHeight: 19,
  },
  myText: {
    color: COLORS.textDark,
  },
  otherText: {
    color: COLORS.white,
  },
  timestamp: {
    fontSize: 12,
    color: COLORS.textGray,
    marginTop: 4,
    fontFamily: 'Inter', // <-- Also updated timestamp font for consistency
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 8,
    marginBottom: 8,
  }
});