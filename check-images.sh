#!/bin/bash

# Script to check if all required images are in place

echo "🔍 Checking for required images..."
echo ""

MISSING=0

# Check logo
if [ ! -f "images/logo.png" ]; then
    echo "❌ images/logo.png - MISSING"
    MISSING=$((MISSING + 1))
else
    echo "✅ images/logo.png - Found"
fi

# Check service images
SERVICES=("sound-temple" "handpan" "cacao-ceremony" "tea-ceremony" "yoga-nail")

for service in "${SERVICES[@]}"; do
    if [ ! -f "images/services/${service}.jpg" ]; then
        echo "❌ images/services/${service}.jpg - MISSING"
        MISSING=$((MISSING + 1))
    else
        echo "✅ images/services/${service}.jpg - Found"
    fi

    if [ ! -f "images/services/${service}-detail.jpg" ]; then
        echo "❌ images/services/${service}-detail.jpg - MISSING"
        MISSING=$((MISSING + 1))
    else
        echo "✅ images/services/${service}-detail.jpg - Found"
    fi
done

echo ""
echo "📊 Summary: $MISSING images missing"

if [ $MISSING -eq 0 ]; then
    echo "🎉 All images are in place!"
else
    echo "⚠️  Please add the missing images to see them on the website"
fi
