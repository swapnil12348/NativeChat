// src/constants/mockData.js
export const CHATS = [
  {
    id: '1',
    name: 'Jonathan',
    lastMessage: 'hey, check this pic, its hilarious',
    timestamp: '8 mins ago',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    unreadCount: 2,
    isUnread: true,
  },
  {
    id: '2',
    name: 'Jane',
    lastMessage: 'Did you have time to see this?',
    timestamp: 'Yesterday',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    unreadCount: 0,
    isUnread: false,
  },
  {
    id: '3',
    name: 'Evelyn',
    lastMessage: 'You: hii!',
    timestamp: 'Tuesday',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    unreadCount: 0,
    isUnread: false,
  },
  // Add more chats as needed
];

export const MESSAGES = {
  '1': [ // Corresponds to Jonathan's chat ID
    { id: 'm1', text: "hey, check this pic, its hilarious", sender: 'other', timestamp: '12:30 AM' },
    { id: 'm2', text: "Maybe sending like another text just to be more clear", sender: 'me', timestamp: '12:31 AM' },
    { id: 'm3', text: "A text with a bigger image!", sender: 'me', timestamp: '12:32 AM', image: 'https://placehold.co/400x600' },
  ],
  // Add message histories for other chats
};