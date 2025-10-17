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

echo "Build complete!"

