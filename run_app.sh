#!/bin/bash

echo "Starting server and mobile app..."

# Start server
cd server_side
node server.js &
SERVER_PID=$!

# Start mobile app with iOS simulator
cd ../mobile-app
npx expo start --ios &
MOBILE_PID=$!

echo "Both services started!"
echo "Server: http://localhost:3001"
echo "Mobile: Check terminal for Expo QR code"

# Wait for processes
wait