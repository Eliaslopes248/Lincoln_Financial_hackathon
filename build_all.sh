#!/bin/bash
echo "Building entire project..."

# Install React dependencies
echo "Installing React dependencies..."
cd web-app
./install_react_dependencies.sh

# Build React app
echo "Building React app..."
npm run build

# Install server dependencies
echo "Installing server dependencies..."
cd ../server_side
./install_server_dependencies.sh

# Install mobile app dependencies
echo "Installing mobile app dependencies..."
cd ../mobile-app
chmod +x install_dependencies.sh
./install_dependencies.sh

echo "Build complete!"
echo ""
echo "All components built successfully:"
echo "- Web app (React) - built and ready"
echo "- Server (Node.js) - dependencies installed"
echo "- Mobile app (Expo) - dependencies installed"
echo ""
echo "To run the full stack:"
echo "1. Run './run_app.sh' to start server and mobile app"
echo "2. Or run 'cd server_side && npm start' for server only"
echo "3. Or run 'cd mobile-app && npm start' for mobile app only"

