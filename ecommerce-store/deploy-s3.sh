#!/bin/bash

# Build the React app
npm run build

# Create S3 bucket (replace with your bucket name)
aws s3 mb s3://your-ecommerce-store-bucket

# Upload files to S3
aws s3 sync build/ s3://your-ecommerce-store-bucket --delete

# Configure bucket for static website hosting
aws s3 website s3://your-ecommerce-store-bucket --index-document index.html --error-document index.html

echo "Website deployed to: http://your-ecommerce-store-bucket.s3-website-region.amazonaws.com" 