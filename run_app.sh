#!/bin/bash

echo "Starting server and mobile app..."

# Start server
cd server_side
node server.js &
SERVER_PID=$!

# Start mobile app
cd ../mobile-app

# Check if iOS Simulator is available
if command -v xcrun &> /dev/null && xcrun simctl list devices available | grep -q "iPhone"; then
    echo "iOS Simulator detected, starting with --ios flag..."
    echo "y" | npx expo start --ios &
else
    echo "iOS Simulator not detected, starting in development mode..."
    echo "You can manually open iOS Simulator and scan the QR code when it appears"
    npx expo start &
fi

MOBILE_PID=$!

echo "Both services started!"
echo "Server: http://localhost:3001"
echo "Mobile: Check terminal for Expo QR code"
echo "If simulator doesn't open automatically, you can:"
echo "  1. Press 'i' in the Expo terminal to open iOS simulator"
echo "  2. Press 'a' to open Android emulator"
echo "  3. Scan the QR code with Expo Go app on your phone"

# Wait for processes
wait