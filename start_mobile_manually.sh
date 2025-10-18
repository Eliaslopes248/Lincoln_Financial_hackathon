#!/bin/bash

echo "Starting mobile app manually..."
echo "This script will start Expo in development mode"
echo "You can then:"
echo "  1. Press 'i' to open iOS simulator"
echo "  2. Press 'a' to open Android emulator" 
echo "  3. Press 'w' to open in web browser"
echo "  4. Scan QR code with Expo Go app"
echo ""

cd mobile-app
npx expo start
