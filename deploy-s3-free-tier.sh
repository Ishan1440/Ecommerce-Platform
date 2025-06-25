#!/bin/bash

# Configuration
BUCKET_NAME="your-ecommerce-store-$(date +%s)"
REGION="us-east-1"

echo "🚀 Deploying to AWS S3 (Free Tier)"

# Build the React app
echo "📦 Building React app..."
npm run build

# Create S3 bucket with unique name
echo "🪣 Creating S3 bucket: $BUCKET_NAME"
aws s3 mb s3://$BUCKET_NAME --region $REGION

# Configure bucket for static website hosting
echo "⚙️ Configuring static website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# Upload files to S3
echo "📤 Uploading files to S3..."
aws s3 sync build/ s3://$BUCKET_NAME --delete

# Make bucket public (required for website hosting)
echo "🌐 Making bucket public..."
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
        }
    ]
}'

echo "✅ Deployment complete!"
echo "🌍 Your website is available at:"
echo "   http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo ""
echo "💰 This setup uses AWS Free Tier:"
echo "   - 5GB storage"
echo "   - 20,000 GET requests/month"
echo "   - 2,000 PUT requests/month" 