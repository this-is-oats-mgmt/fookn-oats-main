#!/bin/bash
# FOOK'N OATS — One-click deploy
cd "$(dirname "$0")"
git add -A
git commit -m "Site update via Cowork editor — $(date '+%Y-%m-%d %H:%M')"
git push
echo "✓ Deployed! Live in ~30 seconds at fookn-oats.enterprises"
