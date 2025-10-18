#!/bin/bash
echo "Installing server dependencies..."

npm init -y
npm install express body-parser url path fs dotenv google-auth-library jsonwebtoken cors bcrypt @supabase/supabase-js

echo "Installation Done!"
