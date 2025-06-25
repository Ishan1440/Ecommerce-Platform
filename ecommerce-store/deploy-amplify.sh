#!/bin/bash

# Install AWS Amplify CLI if not installed
# npm install -g @aws-amplify/cli

# Initialize Amplify (run this once)
# amplify init

# Build the app
npm run build

# Deploy to Amplify
amplify publish

echo "App deployed to Amplify!" 