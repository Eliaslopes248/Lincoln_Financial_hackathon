#!/bin/bash

# Dependencies list - add new modules here
DEPENDENCIES="expo expo-status-bar react react-native  nativewind tailwindcss react-native-reanimated react-native-safe-area-context react-native-vector-icons"

echo "Installing mobile app dependencies..."
echo "Dependencies: $DEPENDENCIES"

npm install $DEPENDENCIES

if [ $? -eq 0 ]; then
    echo "SUCCESS: Dependencies installed!"
    echo "Run 'npm start' to start development"
else
    echo "ERROR: Installation failed"
    exit 1
fi
