# Chat App

A React Native chat application built with Expo, featuring real-time messaging and intuitive navigation.

## 📱 Features

- **Chat List**: Browse all your conversations
- **Real-time Messaging**: Send and receive messages instantly
- **Voice Calls**: Integrated calling functionality
- **Modern UI**: Clean and responsive design
- **Cross-platform**: Runs on iOS, Android, and Web

## 🏗️ Project Structure

```
├── .expo/                      # Expo configuration and cache
├── .vscode/                    # VS Code settings
├── assets/                     # Static assets
│   ├── fonts/                  # Custom fonts
│   └── images/                 # App icons and images
├── scripts/                    # Utility scripts
├── src/                        # Source code
│   ├── components/             # Reusable UI components
│   │   ├── ChatItem.js         # Chat list item component
│   │   ├── HeaderButton.js     # Navigation header button
│   │   └── MessageBubble.js    # Individual message component
│   ├── constants/              # App constants
│   │   ├── colors.js           # Color scheme
│   │   └── mockData.js         # Sample data for development
│   ├── navigation/             # Navigation configuration
│   │   └── AppNavigator.js     # Main app navigation
│   └── screens/                # App screens
│       ├── CallScreen.js       # Voice call interface
│       ├── ChatListScreen.js   # List of all chats
│       ├── ConversationScreen.js # Individual chat view
│       └── PlaceholderScreen.js # Placeholder/loading screen
├── App.js                      # Main app entry point
├── app.json                    # Expo app configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app on your device

## 📱 Available Scripts

- `npx expo start` - Start the development server
- `npx expo start --web` - Start web version
- `npx expo start --ios` - Start iOS version
- `npx expo start --android` - Start Android version
- `npx expo build` - Build for production
- `node scripts/reset-project.js` - Reset project to initial state

## 🛠️ Technology Stack

- **Framework**: React Native with Expo
- **Language**: JavaScript/TypeScript
- **Navigation**: React Navigation
- **Development**: Expo CLI
- **Code Quality**: ESLint
- **IDE**: VS Code (configured)

## 📂 Key Components

### Screens
- **ChatListScreen**: Displays all user conversations
- **ConversationScreen**: Individual chat interface with message history
- **CallScreen**: Voice calling interface
- **PlaceholderScreen**: Loading states and empty views

### Components
- **ChatItem**: Renders individual chat items in the list
- **MessageBubble**: Displays individual messages with proper styling
- **HeaderButton**: Customizable navigation header buttons

### Constants
- **colors.js**: Centralized color theme management
- **mockData.js**: Sample data for development and testing

## 🎨 Customization

### Colors
Modify `src/constants/colors.js` to customize the app's color scheme:

```javascript
export const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  // ... other colors
};
```

### Fonts
The app uses SpaceMono as the primary font. Add custom fonts to `assets/fonts/` and register them in your app configuration.

## 📱 Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web
- ✅ Expo Go

## 🔧 Development Tools

### VS Code Configuration
The project includes VS Code settings for optimal development experience with proper formatting and IntelliSense.

### ESLint
Code quality is maintained through ESLint configuration. Run linting with:
```bash
npx eslint src/
```

## 🚢 Deployment

### Expo Application Services (EAS)
For production builds, use EAS Build:

```bash
npx eas build --platform all
```

### Web Deployment
Build for web deployment:

```bash
npx expo export --platform web
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Expo documentation](https://docs.expo.dev/)
2. Review [React Native documentation](https://reactnative.dev/docs/getting-started)
3. Open an issue in this repository

## 🔄 Project Reset

To reset the project to its initial state, run:

```bash
node scripts/reset-project.js
```

This will clear all customizations and return the project to its original template state.

---

Built with ❤️ using React Native and Expo
