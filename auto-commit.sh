#!/bin/bash

# Auto-commit and push script
# This script stages all changes, commits them, and pushes to GitHub

cd /home/oussama/Downloads/ACADLY-WEB

# Check if there are any changes
if git diff-index --quiet HEAD --; then
    echo "No changes to commit"
    exit 0
fi

# Stage all changes
git add -A

# Create a commit with timestamp
COMMIT_MESSAGE="Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MESSAGE"

# Push to GitHub
git push origin main

echo "Changes pushed to GitHub!"
